import { Routes } from "@angular/router";
import { UserProfileComponent } from "./user/user-profile.component";
import { SignUpComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { DeveloperComponent } from "./developer/developer.component";
import { OnomatopoeiaComponent } from "./onomatopoeia/onomatopoeia.component";
import { KittenStoryComponent } from "./kitten-story/kitten-story.component";

const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "signup", component: SignUpComponent },
  { path: "profile", component: UserProfileComponent },
  { path: "dev", component: DeveloperComponent },
  { path: "onomatopoeia", component: OnomatopoeiaComponent },
  { path: "kitten", component: KittenStoryComponent },
];

export { ROUTES };
