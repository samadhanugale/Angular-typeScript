import { Component } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesDemo';


  bookArray: Book[] = [
    new Book(81, "Java Technology", 400.8955, new Date('12 nov 2020 13:31:42')),
    new Book(12, "Python dJango", 300.567688, new Date('12 jan 2021')),
    new Book(63, "HTML boot", 600.998873, new Date('12 june 2010')) ,
    new Book(11, "k Technology", 200.8955, new Date('28 feb 2020 13:31:42')),
    new Book(92, "dJango Python", 800.567688, new Date('16 aug 2021')),
    new Book(33, " CSS HTML boot", 500.998873, new Date('2 oct 2010')) 
  ];
  sortedCollection: any[];
  
  constructor(private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.bookArray, 'bookId');
    console.log(this.sortedCollection);
  }

  passType= 'password';

  changePasswordType() {
    if (this.passType == 'password') {
      this.passType = 'text';
    } else if(this.passType == 'text') {
      this.passType ='password';
    }
  }
  
  orderBy:string="";
  reverse: boolean = false;
  order(ord:string){
    if(this.orderBy === ord){
      this.reverse = !this.reverse;
    }
    this.orderBy=ord;
    
  }
}
class Book {
  bookId: Number;
  bookName: string;
  bookPrice: number;
  publishDate: Date;

  constructor(id: Number, name: string, price: number, publishDate: Date) {
    this.bookId = id;
    this.bookName = name;
    this.bookPrice = price;
    this.publishDate = publishDate;
  }
  get bprice(): number {
    return this.bookPrice;
  }

  set bprice(price: number) {
    this.bookPrice = price;
  }
  

}