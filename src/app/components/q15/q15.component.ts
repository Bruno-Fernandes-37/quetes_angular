import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from './email-validator';

@Component({
  selector: 'app-q15',
  templateUrl: './q15.component.html',
  styleUrls: ['./q15.component.css']
})
export class Q15Component {

  userForm = this.formBuilder.group({
    credentials: this.formBuilder.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', Validators.required],
    })
  })

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
