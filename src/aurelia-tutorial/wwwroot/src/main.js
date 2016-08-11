import 'github:twbs/bootstrap@3.3.6';

export function configure(aurelia){
    aurelia.use.standardConfiguration().developmentLogging();
    aurelia.start().then(a => a.setRoot("shell"));
}
