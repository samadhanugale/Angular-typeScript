import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { OrderModule } from 'ngx-order-pipe';
import { CharAtPipe } from './char-at.pipe';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CharAtPipe,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,OrderModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
