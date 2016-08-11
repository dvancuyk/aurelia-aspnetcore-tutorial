export class Jobs{
  constructor(){

  }

  canActivate(params, routeConfig, navigationInstructions){
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(false);
        }, 1000);
    });

    return promise;
  }
}
