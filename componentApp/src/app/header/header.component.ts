import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
  }
  sampleName:string= "HOME";
  constructor(){
    setTimeout(()=>this.sampleName = "HOME",6000);
  }
  changeTitle(){
    this.sampleName = "GO HOME";
  }

}
