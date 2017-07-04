import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { appRoutes } from "./app-routes";
import { HomeComponent } from './home/home.component';
import { ToDoService } from "./to-do.service";

@NgModule({
    declarations: [
        AppComponent,
        AddTodoComponent,
        ListTodoComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
		ReactiveFormsModule,
        StoreModule,
        RouterModule.forRoot(
            appRoutes
        )
    ],
    providers: [ToDoService],
    bootstrap: [AppComponent]
})
export class AppModule { }