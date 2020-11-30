import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  @Output() ChildToParent = new EventEmitter();
  public value;
 constructor() { }

 ngOnInit(): void {
 }

 onKey(event: any) { // without type info
   console.log("Darta:"+event)
   this.value=event.target.value;
   this.ChildToParent.emit(this.value);
 }

}
