import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  //bind model(componet data) data into view(html template) called Interpolation
  //Interpolation also called as One-way Data-Binding
 public product={
   name:'samsung tv',
   price:45000.00,
   qty:2,
   mfd:new Date('2020/09/05'),
   isStock:false
 }

  constructor() { }

  ngOnInit(): void {
  }




}
