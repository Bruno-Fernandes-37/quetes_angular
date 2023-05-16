import { Routes } from "@angular/router";
import { UserProfileComponent } from "./user/user-profile.component";
import { SignUpComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";

const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "signup", component: SignUpComponent },
  { path: "profile", component: UserProfileComponent }
];

export { ROUTES };
