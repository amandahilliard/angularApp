import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day16',
  templateUrl: './day16.component.html',
  styleUrls: ['./day16.component.scss']
})
export class Day16Component implements OnInit {
  randNum: number;
  max: number = 0;
  constructor() { }

  randomNumber(){
    this.randNum = Math.floor(Math.random() * this.max) + 1;
  }

  ngOnInit(): void {

  }

}