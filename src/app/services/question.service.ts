import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  arrSelectedMethodologies = [];
  constructor() { }
  
  fnSetMethodologies(methods){
    this.arrSelectedMethodologies = methods;
  }

  fnGetMethodologies(){
    return this.arrSelectedMethodologies;
  }

  fnReset(){
    this.arrSelectedMethodologies = [];
  }

}
