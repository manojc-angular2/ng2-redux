import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { ToDo } from "app/models/todo.model";
import { ToDoService } from "app/to-do.service";

@Injectable()
export class ToDoResolverService implements Resolve<ToDo> {
    constructor(private _ToDoService: ToDoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this._ToDoService.getToDo(route.params.id);
    }
}