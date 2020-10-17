import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestionModel } from 'src/app/models/question.model';
import { QuestionService } from 'src/app/services/question.service';
import preguntas from './../../../assets/questions/preguntas.json';
import detail from './../../../assets/detail/metodosExperto.json';
import { DetailModel } from 'src/app/models/detail.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
    

  questions: QuestionModel[] = preguntas;

  formArray = new FormArray([]);
  sendClicked = false;

  detail: any;
  constructor(
    private toasrtService: ToastrService,
    private questionService: QuestionService,
    private router: Router
  ) {
    this.detail = detail;
   }

  ngOnInit(): void {
    window.scroll(0,0);
    console.log(this.questions);
    if(this.questionService.fnGetMethodologies().length > 0){
      this.arrMethodologiesNice = this.questionService.fnGetMethodologies();
      this.sendClicked = true;
    }
    this.fnGenerateQuestions();
  }
  
  formloaded = false;
  fnGenerateQuestions(){
    this.questions.forEach(question => {
      this.formArray.push(new FormControl('', Validators.required));
    });
    this.formloaded = true;
  }


  fnCalculate(){
    if(this.formArray.invalid){
      this.toasrtService.error("Se deben contestar todas las preguntas");
      return;
    }
    let methodologies = {};
    let array: any[] = this.formArray.value;
    array.forEach((element, index) => {
      element.forEach(m => {
        if(!methodologies[m]){
          methodologies[m] = 1;
        }else{
          methodologies[m] += 1;
        }
      })
    });

    let keysSorted = Object.keys(methodologies).sort(function(a,b){return methodologies[a]-methodologies[b]});
    this.sendClicked = true;
    this.fnLoadData({keysSorted, methodologies});
  }

  arrMethodologiesNice: any[] = [];
  fnLoadData(event){
    window.scroll(0,0);
    this.hardCode = [];
    this.arrMethodologiesNice = [];
    console.log(event);
    let methodologies = event.methodologies;
    let sorted: any[] = event.keysSorted;
    sorted.reverse();
    let nameHigherValue = sorted[0];
    let higgherValue = methodologies[nameHigherValue];
    
    
    for (var method in methodologies) {
      if(higgherValue == methodologies[method]){
        this.arrMethodologiesNice.push(method);
      }
    }
    this.questionService.fnSetMethodologies(this.arrMethodologiesNice);
  }

  fnReset(){
    window.scroll(0,0);
    this.hardCode = [];
    this.sendClicked = false;
    this.questionService.fnReset();
    this.formArray.reset();
  }

  navigateDetail(method){
    this.router.navigate(['/detailPage', method]);

  }

  hardCode = [];
  onChangeInput(data){
    this.hardCode = data;
  }

}
