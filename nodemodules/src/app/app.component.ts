import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nodemodules';
  age = 0;
  sub1 = 0;
  sub2 = 0;
  sub3 = 0;
  sub11 = 0;
  sub22 = 0;
  sub33 = 0;
  choice = 0;
  choice1 = 0;
  totalMark = 0
  percent = 0;
  add = this.sub1 + this.sub2 + this.sub3;
  perc = (this.add / 3) * 100;
  numArray = [12, 23, 34, 45, 56, 67, 78, 89, 90];
  myColor = "black";
  background: string = "";
  percentage(mark1: string, mark2: string, mark3: string) {
    this.percent = ((parseInt(mark1)  + parseInt(mark2) + parseInt(mark3))/3);
  }
  totalMarks(mark1: string, mark2: string, mark3: string) {
    this.totalMark = parseInt(mark1)  + parseInt(mark2) + parseInt(mark3);
  }

  addElement(ele1: string): void {
    this.numArray.push(parseInt(ele1));
  }
  removeElement(): number | undefined {
    return this.numArray.pop();
  }
  bookArray: Book[] = [
    new Book(11, "Java", 300, ["R.V", "Barel"]),
    new Book(12, "Python", 400, ["TomV", "Cruise"]),
    new Book(13, "HTML", 500, ["MegaD"])
  ];


  paraColor: string = "black";
  textColor: string = "black";
  paraFont: number = 15;
  myStyle = {
    'color': this.paraColor,
    'background-color': 'gray',
    'font-size.px': this.paraFont,
    'border': '4px solid pink'
  }
  update1(newColor: string) {
    this.myStyle.color = newColor;
  }
  update2(newFont: string) {
    this.myStyle['font-size.px'] = parseInt(newFont)
  }
}

class Book {
  bookId: Number;
  bookName: string;
  bookPrice: Number;
  authorNames: string[];

  constructor(id: Number, name: string, price: number, author: string[]) {
    this.bookId = id;
    this.bookName = name;
    this.bookPrice = price;
    this.authorNames = author;
  }
  get bprice(): Number {
    return this.bookPrice;
  }

  set bprice(price: Number) {
    this.bookPrice = price;
  }

}