import { Component } from "@angular/core";
import { User } from "./User";
import { userTest } from "./mock-user";

@Component({
  selector: "app-user",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent {
  user: User = userTest;
  showAge: boolean = true;

  displayAge(): void {
    this.showAge = !this.showAge;
  }
}