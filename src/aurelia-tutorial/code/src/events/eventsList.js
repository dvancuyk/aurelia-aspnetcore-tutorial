import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';
import {Router, activationStrategy} from 'aurelia-router';

@inject(DataRepository, Router)
export class EventsList{
  constructor(dataRepository, router){
    this.repository = dataRepository;
    this.router = router;
  }

  activate(params, routeConfig){
    var pastOrFuture = routeConfig.name == '' ? 'future' : routeConfig.name;
    console.log('activating with ' + pastOrFuture)
    return this.repository.getEvents(pastOrFuture).then(events => {
      if(params.speaker || params.topic){
        var filteredResults = [];
        events.forEach(item => {
          if(params.speaker && item.speaker.toLowerCase().indexOf(params.speaker) > 0){
            console.log('filtering on speaker with ' + params.speaker + ' and speaker for this item is ' + item.speaker);
            item.detailUrl = this.router.generate('eventDetail', {eventId: item.id});
            filteredResults.push(item);
          }
          if(params.topic && item.title.toLowerCase().indexOf(params.topic)){
            item.detailUrl = this.router.generate('eventDetail', {eventId: item.id});
            filteredResults.push(item);
          }

          this.events = filteredResults;
        });
      }
      else {
          this.events = events;
          this.events.forEach(item => item.detailUrl = this.router.generate('eventDetail', {eventId: item.id}));
      }
    });
  }

  canActivate(){
    console.log('canActivate called');
    return true;
  }

  canDeactivate(){
    console.log('canDeactivate called');
    return true;
  }

  deactivate(){
    console.log('deactivate called');
  }

  determineActivationStrategy(){
    console.log('determineActivationStategy called');
    return activationStrategy.invokeLifecycle;
  }

  goToDiscussion(){
    this.router.navigateToRoute('eventDetail', {eventId: this.events[0].id});
  }
}
