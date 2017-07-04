import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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
        private router: Router) { }

    ngOnInit() {
        this.toDos = this._ToDoService.getToDos();
    }

    deleteToDo(toDo: ToDo) {
        if (this._ToDoService.deleteToDo(toDo)) {
            this.toDos = this._ToDoService.getToDos();
        }
    }

    editToDo(toDo: ToDo) {
        if (!toDo || !toDo.id) {
            return;
        }
        this.router.navigate(["/add"], { queryParams: { id: toDo.id } });
    }
}