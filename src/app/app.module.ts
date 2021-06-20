import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './mycomponent/todo/todo.component';
import { TodoItemComponent } from './mycomponent/todo-item/todo-item.component';
import { AddTodoComponent } from './mycomponent/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './registrationportal/home/home.component';
import { LoginComponent } from './registrationportal/login/login.component';
import { RegistrationComponent } from './registrationportal/registration/registration.component';
import { NavbarComponent } from './registrationportal/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    AddTodoComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
