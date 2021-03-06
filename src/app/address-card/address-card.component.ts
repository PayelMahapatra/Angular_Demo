import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('user') user : User;
  isCollapse : boolean = true;
  inputText : string = 'Input Text';

  toggleCollapse(){
    this.isCollapse = !this.isCollapse;
  }
  myBtnClicked(event){
    alert('Button is clicked');
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}