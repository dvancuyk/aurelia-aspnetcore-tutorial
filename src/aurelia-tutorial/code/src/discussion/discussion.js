function getDiscussionInput(){
  // fake data access
  return "";
}

function cloneObject(obj){
  return JSON.parse(JSON.stringify(obj));
}

export class Discussion{
  constructor(){

  }

  activate(){
    this.discussionInput = getDiscussionInput();
    this.originalInput = cloneObject(this.discussionInput);
  }

  save(){
     this.originalInput = cloneObject(this.discussionInput);
  }
  //
   canDeactivate(){
     if(JSON.stringify(cloneObject(this.discussionInput)) != JSON.stringify(this.originalInput)){
       if(confirm("Unsaved data, are you sure you want to navigate away?")){
        return true;
      }
  
       return false;
     }

     return true;
  }
}
