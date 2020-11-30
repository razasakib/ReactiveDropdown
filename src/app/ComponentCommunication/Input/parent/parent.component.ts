import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data:any;
  dataofAray;
  constructor() { }

  ngOnInit(): void {
  }

  onClickMe() {
   console.log(this.data);
   this.dataofAray=this.data;
   let b=JSON.parse(this.dataofAray);
   console.log(b);
  }

}
