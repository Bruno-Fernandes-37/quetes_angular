import { Component } from "@angular/core";
import { SingupForm } from "../../models/SignupForm";

@Component({
  selector: "app-my-form",
  templateUrl: "./my-form.component.html",
  styleUrls: ["./my-form.component.css"]
})
export class MyFormComponent {
  signupForm = new SingupForm("", "", "", "");

  onSubmit(): void {
    // form submitted
    console.log(this.signupForm);
    
  }
}
