import { Component } from "@angular/core";
import { User } from "../../models/User";
import { userTest } from "../../models/mocks/mock-user";

@Component({
  selector: "app-user-page",
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
