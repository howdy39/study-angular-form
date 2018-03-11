import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    const name = new FormControl('', [
      Validators.required,
    ]);
    const name2 = new FormControl('', [
    ]);

    this.myForm = this.fb.group({
      name,
      name2,
    });

    console.log(this.myForm);
  }

  onSubmit(myform: FormGroup) {
    console.log('onSubmit', myform);
    console.log(myform.controls['name']);
  }

}
