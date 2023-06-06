import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ROUTES } from "./app.routes";

import { UserProfileComponent } from "./pages/user/user-profile.component";
import { SignUpComponent } from "./pages/signup/signup.component";
import { HomeComponent } from "./pages/home/home.component";
import { DeveloperComponent } from './pages/developer/developer.component';
import { OnomatopoeiaComponent } from './pages/onomatopoeia/onomatopoeia.component';
import { KittenStoryComponent } from './pages/kitten-story/kitten-story.component';
import { CocktailListComponent } from './pages/cocktail-list/cocktail-list.component';
import { NasaComponent } from './pages/nasa/nasa.component';

import { MenuComponent } from "./components/menu/menu.component";
import { SkillComponent } from './components/skill/skill.component';
import { MyFormComponent } from "./components/myForm/my-form.component";
import { CreateOnomatopoeiaComponent } from './components/create-onomatopoeia/create-onomatopoeia.component';
import { CreateKittenComponent } from './components/create-kitten/create-kitten.component';
import { ListKittenComponent } from './components/list-kitten/list-kitten.component';
import { UserKittenComponent } from './components/user-kitten/user-kitten.component';
import { KittenDetailsComponent } from './components/kitten-details/kitten-details.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SignUpComponent,
    MenuComponent,
    HomeComponent,
    MyFormComponent,
    DeveloperComponent,
    SkillComponent,
    OnomatopoeiaComponent,
    CreateOnomatopoeiaComponent,
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent,
    KittenStoryComponent,
    KittenDetailsComponent,
    CocktailListComponent,
    NasaComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
