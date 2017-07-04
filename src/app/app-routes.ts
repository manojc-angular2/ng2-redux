import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
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
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];