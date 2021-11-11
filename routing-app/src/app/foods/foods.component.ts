import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  foodArray:Food[] = [
    new Food(1,"Banana",22),
    new Food(2,"Potato",12),
    new Food(1,"Apple",27),
    new Food(2,"Tomato",10)
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}

class Food{
 foodId:number;
 foodName:string;
 foodPrice:number;
  
 constructor(foodId:number,foodName:string,foodPrice:number){
   this.foodId = foodId;
   this.foodName = foodName;
   this.foodPrice = foodPrice;
 }
}
