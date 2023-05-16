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

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SignUpComponent,
    MenuComponent,
    HomeComponent,
    MyFormComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}