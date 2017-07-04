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

    constructor(
        private fb: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private _ToDoService: ToDoService,
        private router: Router) {
        this.toDo = this.toDo || new ToDo();
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            if (params.id) {
                this.toDo = this._ToDoService.getToDo(params.id);
            }
        });
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm(): void {
        this.form = this.fb.group({
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
                    Validators.maxLength(500)
                ]
            ]
        });
    }

    addToDo() {
        if (!this.form.valid) {
            return;
        }
        if (this._ToDoService.addToDo(this.form.value)) {
            this.router.navigate(["/list"]);
        }
    }
}