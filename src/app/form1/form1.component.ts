import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  user: User;

  constructor() { }

  ngOnInit() {
    this.user = {
      name: '',
      name2: '',
    };
  }

  onSubmit(myform: NgForm) {
    console.log('onSubmit', myform);
    console.log(myform.value);
  }

}


export interface User {
  name: string;
  name2: string;
}
