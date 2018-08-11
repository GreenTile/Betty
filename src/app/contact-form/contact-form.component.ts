import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'},
    { id: 3, name: 'Sms'},
    { id: 4, name: 'Street'}
  ];
  
  log(x){
    console.log(x);
  }
      submit(f){
        console.log(f);
      }
}
