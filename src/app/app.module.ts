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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToDoService } from "./to-do.service";
import { toDoListReducer, toDoItemReducer } from "./reducers/to-do-reducer";
import { ToDoResolverService } from "app/add-todo/to-do-resolver.service";

@NgModule({
    declarations: [
        AppComponent,
        AddTodoComponent,
        ListTodoComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.provideStore({
                todos: toDoListReducer,
                todo: toDoItemReducer
        }),
        RouterModule.forRoot(
            appRoutes
        )
    ],
    providers: [ToDoService, ToDoResolverService],
    bootstrap: [AppComponent]
})
export class AppModule { }