import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { UserProfileComponent } from "./user/user-profile.component";
import { SignUpComponent } from "./signup/signup.component";
import { MenuComponent } from "./menu/menu.component";
import { ROUTES } from "./app.routes";
import { HomeComponent } from "./home/home.component";
import { MyFormComponent } from "./myForm/my-form.component";
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { OnomatopoeiaComponent } from './onomatopoeia/onomatopoeia.component';
import { CreateOnomatopoeiaComponent } from './create-onomatopoeia/create-onomatopoeia.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { KittenStoryComponent } from './kitten-story/kitten-story.component';
import { DatePipe } from "@angular/common";
import { KittenDetailsComponent } from './kitten-details/kitten-details.component';


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
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
