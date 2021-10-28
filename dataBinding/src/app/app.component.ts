import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dataBinding';
  num1:number = 12;
  num2:number = 14;
  companyName:string = "Neosoft Technologies";

  constructor(){
    setTimeout(()=>this.title = "Initial Text",6000);
  }
  changeTitle(){
    this.title = "Changed Name";
  }
  mul(){
    return this.num1*this.num2;
  }
  greet(){
    console.log("Console msg printed! : "+this.num1+this.num2);
  }
  showInfo($event){
    console.log("Event : "+$event)
  }
  overTest(){
    console.log("Mouse over!");
  }

  showCompany():void{
    console.log(this.companyName);
  }
}

