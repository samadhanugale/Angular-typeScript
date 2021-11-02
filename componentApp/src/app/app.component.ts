import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentApp';


  sampleName:string= "initial String";
  constructor(){
    setTimeout(()=>this.sampleName = "Initial Text",6000);
  }
  changeTitle(){
    this.sampleName = "Changed Name";
  }
}
