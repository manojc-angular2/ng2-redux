import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ToDo } from "../models/todo.model";

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

    private toDo: ToDo;
    private form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.toDo = this.toDo || new ToDo();
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm(): void {
        this.form = this.fb.group({
            name: [
                this.toDo.name, [
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(50)
                ]
            ],
            description: [
                this.toDo.description, [
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(500)
                ]
            ]
        });
    }

    addToDo() {
        if (!this.form.valid) {
            return;
        }

        console.log(this.form.value);
    }
}
