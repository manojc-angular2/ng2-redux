import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { ListTodoComponent } from "./list-todo/list-todo.component";

export const appRoutes: Routes = [
    {
        path: "home",
        component: ListTodoComponent
    },
    {
        path: "add",
        component: AddTodoComponent
    },
    {
        path: "list",
        component: ListTodoComponent
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "**",
        component: HomeComponent
    }
];