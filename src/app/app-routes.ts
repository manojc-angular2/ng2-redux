import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { ToDoResolverService } from "./add-todo/to-do-resolver.service";
import { ListTodoComponent } from "./list-todo/list-todo.component";

export const appRoutes: Routes = [
    {
        path: "list",
        component: ListTodoComponent
    },
    {
        path: "list/:id",
        component: AddTodoComponent,
        resolve: { todo: ToDoResolverService }
    },
    {
        path: "",
        redirectTo: "list",
        pathMatch: "full"
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];