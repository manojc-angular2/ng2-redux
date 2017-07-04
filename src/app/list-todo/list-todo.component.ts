import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppModelState } from "../models/app-model-state";
import { ToDoService } from "../to-do.service";
import { ToDo } from "../models/todo.model";

@Component({
    selector: 'app-list-todo',
    templateUrl: './list-todo.component.html',
    styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

    private toDos: ToDo[];

    constructor(
        private _ToDoService: ToDoService,
        private router: Router,
        private _Store: Store<AppModelState<ToDo[]>>) { }

    ngOnInit() {
        // this.getToDos();
        this._Store.select('todo').subscribe((response: ToDo[]) => {
            this.toDos = response;
        });
    }

    deleteToDo(toDo: ToDo) {
        this._ToDoService.deleteToDo(toDo)
        .then((response: boolean) => {
            this.getToDos();
        })
        .catch((error: any) => {
            console.log(error);
        });
    }

    editToDo(toDo: ToDo) {
        if (!toDo || !toDo.id) {
            return;
        }
        this.router.navigate(["/add"], { queryParams: { id: toDo.id } });
    }

    private getToDos(): void {
        this._ToDoService.getToDos()
            .then((response: ToDo[]) => {
                this.toDos = response;
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
}