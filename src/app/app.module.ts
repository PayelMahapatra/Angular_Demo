import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, AddressCardComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ TestService ]
})
export class AppModule { }
