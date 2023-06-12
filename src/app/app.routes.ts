import { Routes } from "@angular/router";

import { UserProfileComponent } from "./pages/user/user-profile.component";
import { SignUpComponent } from "./pages/signup/signup.component";
import { HomeComponent } from "./pages/home/home.component";
import { DeveloperComponent } from "./pages/developer/developer.component";
import { OnomatopoeiaComponent } from "./pages/onomatopoeia/onomatopoeia.component";
import { KittenStoryComponent } from "./pages/kitten-story/kitten-story.component";
import { NasaComponent } from "./pages/nasa/nasa.component";
import { CocktailListComponent } from "./pages/cocktail-list/cocktail-list.component";
import { ReactiveFormComponent } from "./pages/reactive-form/reactive-form.component";

const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "signup", component: SignUpComponent },
  { path: "profile", component: UserProfileComponent },
  { path: "dev", component: DeveloperComponent },
  { path: "onomatopoeia", component: OnomatopoeiaComponent },
  { path: "kitten", component: KittenStoryComponent },
  { path: "cocktail", component: CocktailListComponent },
  { path: "nasa", component: NasaComponent },
  { path: "form", component: ReactiveFormComponent },
];

export { ROUTES };
