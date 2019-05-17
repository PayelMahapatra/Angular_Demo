import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  user : User;
  constructor(){
    this.user = new User();
    this.user.name = 'Payel Mahapatra';
    this.user.title = 'Software Developer';
    this.user.address = 'Kolkata';
    this.user.phone = ['123-456-789', '852-741-963', '896-345-1234'];
  }
}
