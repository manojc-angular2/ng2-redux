import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ToDo } from "../models/todo.model";
import { ToDoService } from "../to-do.service";

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

    private toDo: ToDo;
    private form: FormGroup;

    constructor(private _FormBuilder: FormBuilder, private _ActivatedRoute: ActivatedRoute, private _ToDoService: ToDoService, private _Router: Router) {
        this.initializeForm();
    }

    public ngOnInit(): void {
        this.buildForm();
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
        this.redirect(this._ToDoService.addToDo(this.form.value));
    }

    public updateToDo(): void {
        if (!this.form.valid) {
            return;
        }
        this.toDo.name = this.form.value.name;
        this.toDo.description = this.form.value.description;
        this.redirect(this._ToDoService.updateToDo(this.toDo));
    }

    private initializeForm(): void {
        this.toDo = this.toDo || new ToDo();
        this._ActivatedRoute.queryParams.subscribe((params: Params) => {
            if (!params.id) {
                return;
            }
            this._ToDoService.getToDo(params.id)
                .then((response: ToDo) => {
                    this.toDo = response;
                })
                .catch((error: any) => {
                    console.log(error);
                });
        });
    }

    private redirect(promise: Promise<ToDo>): void {
        promise
            .then((response: ToDo) => {
                this._Router.navigate(["/home"]);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
}