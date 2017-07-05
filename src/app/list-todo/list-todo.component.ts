import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppModelState } from "../models/app-model-state";
import { ToDoService } from "../to-do.service";
import { ToDo } from "../models/todo.model";
import { SET_TODO } from "app/reducers/to-do-reducer";

@Component({
    selector: 'app-list-todo',
    templateUrl: './list-todo.component.html',
    styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit, OnDestroy {

    private toDos: ToDo[];

    constructor(
        private _ToDoService: ToDoService,
        private _Router: Router,
        private _Store: Store<AppModelState<ToDo[]>>) { }

    public ngOnInit(): void {
        this._ToDoService.getToDos();
        this._Store.select('todos').subscribe((response: ToDo[]) => {
            this.toDos = response;
        });
    }

    public ngOnDestroy(): void {
        // throw new Error("Method not implemented.");
    }

    public deleteToDo(toDo: ToDo): void {
        this._ToDoService.deleteToDo(toDo);
    }

    public editToDo(toDo: ToDo): void {
        if (toDo && toDo.id) {
            this._Router.navigate(["/list", toDo.id], );
        }
    }
}