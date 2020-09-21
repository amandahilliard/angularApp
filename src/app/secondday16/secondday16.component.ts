import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondday16',
  templateUrl: './secondday16.component.html',
  styleUrls: ['./secondday16.component.scss']
})
export class Secondday16Component implements OnInit {

  names: Array<string> = ["Xavier", "Oslo", "Mike", "Hortense"]
  newName: string = ''

  constructor() { }

  removeName(idx: number){
    this.names.splice(idx,1);
  }

  addName(){
    if(this.newName.length > 0){
      this.names = [...this.names, this.newName];
      this.newName = "";
    }
  }

  ngOnInit(): void {
  }

}
