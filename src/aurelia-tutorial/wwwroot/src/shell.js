import toastr from 'toastr';
export class Shell{
  constructor(){

  }

  configureRouter(config, router){
    this.router = router;

    config.title = "Capital Area .NET User Group";
    config.options.pushState = true;
    config.addPipelineStep('modelbind', ToastNavResult);
    config.map([
      { route: ['', 'events'],
            viewPorts: { mainContent: {moduleId: 'events/events' }, sideBar: {moduleId: 'sideBar/sponsors'}},
            name: 'Events', title: 'Events', nav: true}, // Empty string indicates default
      { route: 'jobs',
            viewPorts: { mainContent: {moduleId: 'jobs/jobs' }, sideBar: {moduleId: 'sideBar/ads'}},
            title: 'Jobs', nav: true}, // Title can be used to display for navigation display values
      { route: 'discussion',
            viewPorts: { mainContent: {moduleId: 'discussion/discussion' }, sideBar: {moduleId: 'sideBar/sponsors'}},
            title: 'Discussion', nav: true},
      { route: 'eventDetail/:eventId',
            viewPorts: { mainContent: {moduleId: 'events/eventDetail' }, sideBar: {moduleId: 'sideBar/sponsors'}},
            name: 'eventDetail'} // Name is used for routing
    ]);
  }
}

class ToastNavResult{
  run(navigationInstruction, next){
    return next().then(a => {
      console.log(a);
      toastr.info(a.status);
      return a;
    })
  }
}
