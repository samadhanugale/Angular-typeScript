import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit  {

  sampleName:string="";

  ngOnInit(): void {
    
  }
  constructor(){
    setTimeout(()=>this.sampleName = "Initial Text",6000);
  }
  changeTitle(){
    this.sampleName = "Changed Name";
  }
}
