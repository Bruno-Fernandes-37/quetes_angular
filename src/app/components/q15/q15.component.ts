import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-q15',
  templateUrl: './q15.component.html',
  styleUrls: ['./q15.component.css']
})
export class Q15Component {

  userForm = this.formBuilder.group({
    credentials: this.formBuilder.group({
      email: [''],
      password: [''],
    })
  })

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    console.log(this.userForm.get('credentials')?.get('email')?.value);
    console.log(this.userForm.get('credentials')?.get('password')?.value);
  }
}
