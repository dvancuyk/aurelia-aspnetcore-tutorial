import {eventsData} from 'services/eventsData';
import moment from 'moment';

function filterEvents(pastOrFuture, events){

  console.log(moment());

    if(pastOrFuture == 'past'){
    return events.filter(item => moment(item.dateTime) < moment());
  }
  else if(pastOrFuture == 'future') {
    return events.filter(item => moment(item.dateTime) > moment());
  }

  return results;
}

export class DataRepository{
  constructor(){
  }

  getEvents(pastOrFuture){
    console.log('loading event data for ' + pastOrFuture);
    var promise = new Promise((resolve, error) =>{

      if(!this.events){

        setTimeout(() => {
          this.events = eventsData;

          this.events = this.events.sort((a, b) => {
            a.dateTime >= b.dateTime ? 1 : -1;
          });

          this.events.forEach(event => event.dateTime = moment(event.dateTime).format("MM/DD/YYYY HH:mm"));

          console.log('resolved events');
          resolve(filterEvents(pastOrFuture, this.events));
        }, 2000);

      }
      else{
        resolve(filterEvents(pastOrFuture, this.events));
      }
    });

    return promise;
  }

  sayHello(){
    return "Hello from repository";
  }

  getEvent(eventId){

    var promise = new Promise((resolve, error) =>{

      if(this.events){
        resolve(this.events.find(e => e.id === eventId));
      }
      else{
        this.getEvents().then(events => {
          resolve(events.find(e => e.id === eventId));
        });
      }

    });
    return promise;
  }
}
