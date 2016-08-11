import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';

@inject(DataRepository)
export class EventDetail{
  constructor(dataRepository){
    this.dataRepository = dataRepository;
  }

  activate(params, routeConfig){
    var id = parseInt(params.eventId);
    //this.event = this.dataRepository.getEvent(id);
    this.dataRepository.getEvent(id).then(e => this.event = e);
  }
}
