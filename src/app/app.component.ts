import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactiveForm';

  ngOnInit(): void {}













 /* public aboutData;
  public contactData;
 public testForm:FormGroup;

 constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.testForm = this.fb.group({
      about:[''],
      contact:['']
})
  }
  //about function
  onAbout(event:any){
       console.log("About data:"+event);
       this.aboutData=event;
  }
  //contact function
  onContact(event:any){
    console.log("Contact data:"+event);
    this.contactData=event;
}
  
  add(){
   console.log("data");
  }
  onSubmit(){
       console.log("data");
       console.log("formDaa:"+this.testForm.value.about);
  }*/
}
