import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { OrderModule } from 'ngx-order-pipe';
import { CharAtPipe } from './char-at.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CharAtPipe
  ],
  imports: [
    BrowserModule,OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
