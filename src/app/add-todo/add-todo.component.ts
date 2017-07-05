import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { toDoListReducer, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../reducers/to-do-reducer";
import { ToDo } from "../models/todo.model";
import { AppModelState } from "../models/app-model-state";
import { ToDoService } from "../to-do.service";

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

    private toDo: ToDo;
    private form: FormGroup;

    constructor(private _FormBuilder: FormBuilder,
        private _ActivatedRoute: ActivatedRoute,
        private _ToDoService: ToDoService,
        private _Router: Router,
        private _ToDosStore: Store<AppModelState<ToDo[]>>) {
    }

    public ngOnInit(): void {
        this._ToDosStore.select('todo').subscribe((response: ToDo) => {
            this.toDo = response || new ToDo();
            this.buildForm();
        });
    }

    public buildForm(): void {
        this.form = this._FormBuilder.group({
            name: [
                this.toDo.name, [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(50)
                ]
            ],
            description: [
                this.toDo.description, [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(5000)
                ]
            ]
        });
    }

    public addToDo(): void {
        if (!this.form.valid) {
            return;
        }
        this._ToDoService.addToDo(this.form.value);
        this._Router.navigate(["/list"]);
    }

    public updateToDo(): void {
        if (!this.form.valid) {
            return;
        }
        this.toDo.name = this.form.value.name;
        this.toDo.description = this.form.value.description;
        this._ToDoService.updateToDo(this.toDo);
        this._Router.navigate(["/list"]);
    }
}