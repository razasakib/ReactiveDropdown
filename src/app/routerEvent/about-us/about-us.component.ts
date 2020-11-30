import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  @Output() ChildToParent = new EventEmitter();
   public value;
  constructor() { }

  ngOnInit(): void {
  }

  onKey(event: any) { 
    console.log("Darta:"+event)
    this.value=event.target.value;
    this.ChildToParent.emit(this.value);
  }


}
