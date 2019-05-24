import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  user : User;
  // Need a service TestService
  
  constructor(svc : TestService, private http: HttpClient){
    this.user = new User();
    this.user.name = 'Payel Mahapatra';
    this.user.title = 'Software Developer';
    this.user.address = 'Kolkata';
    this.user.phone = ['123-456-789', '852-741-963', '896-345-1234'];
    svc.printToConsole('Got The Service!!');
    
  }
  ngOnInit(){
    let obs = 
    this.http.get('https://api.github.com/users/koushikkothagal');
    obs.subscribe((response)=> console.log(response));
  }
  
  

}
