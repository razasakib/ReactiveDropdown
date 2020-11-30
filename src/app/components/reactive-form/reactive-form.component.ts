import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  

  formGlobalData:FormGroup;//2.exact name of [formGroup]

  constructor(private formBuilder:FormBuilder) {
      this.formGlobalData=formBuilder.group({
           email:['',Validators.required],//new FormControl(),
           pwd:['',Validators.required],//new FormControl(),
           checkbox:['',Validators.requiredTrue]//new FormControl()
      });
   }
    
  ngOnInit(): void {
   this. onPostFormData();
  }

  //data submited
  onPostFormData(){
    console.log("data");
    console.log(this.formGlobalData.value);
    console.log(this.formGlobalData.value.email);
    }
}
