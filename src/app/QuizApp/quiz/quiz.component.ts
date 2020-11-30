import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
      
  constructor() { }
  
  ngOnInit(): void {
    this.setQuestion();
  }


  allQuestions: any = [
  {
		id: 1,
		question: "What is the capital of Belgium?",
		a: "Vienna",
		b: "Berlin",
		c: "Brussels",
		d: "Prague",
		answer: "c"                   
	},
	{
		id: 2,
		question: "What is the capital of Australia?",
		a: "scdf",
		b: "nnn",
		c: "plk",
		d: "rc",
		answer: "plk"
  },
  {
		id: 3,
		question: "What is the capital of India?",
		a: "delhi",
		b: "BBSR",
		c: "MI",
		d: "CTC",
		answer: "delhi"
	}
	
  ];
  
  public question:any=[];

  public object1;
  public object2;
  public object3;

  setQuestion(){
  this.object1 = this.allQuestions.filter(function (obj) { 
    return obj.id==1; 
    })/*[0]*/;//using for converting array of object to string 
    console.log(this.object1);

    //object of 2nd question
   this.object2=this.allQuestions.filter(function (obj) { 
    return obj.id==2; 
  })

  //object of 3rd question
  this.object3=this.allQuestions.filter(function (obj) { 
    return obj.id==3; 
  })
   
  }
  oneShow = false;
  twoShow=false;
  thirdShow=false;
  //next To 2nd
  nextToSecQuestion(){
    this.oneShow=!this.oneShow;
    this.twoShow = !this.twoShow;
    this.thirdShow = this.thirdShow;
  }

 //next to 3rd
  nextToThirdQuestion(){
    this.oneShow=this.oneShow;
    this.twoShow = !this.twoShow;
    this.thirdShow = !this.thirdShow;
  }

 //ptrv to 2nd
  prevToSecQuestion(){
    this.oneShow=this.oneShow;
    this.twoShow = !this.twoShow;
    this.thirdShow = !this.thirdShow;
  }
 //prev to 1st
  prevToFirstQuestion(){
    this.oneShow=!this.oneShow;
    this.twoShow = !this.twoShow;
    this.thirdShow = this.thirdShow;
  
  }


}