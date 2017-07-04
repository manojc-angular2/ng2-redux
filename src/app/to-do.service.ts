import { Injectable } from '@angular/core';
import { ToDo } from "./models/todo.model";

@Injectable()
export class ToDoService {

    private toDos: ToDo[];
    constructor() { }

    public getToDos() {
        this.toDos = JSON.parse(localStorage.getItem('toDos')) || [];
        return this.toDos;
    }

    public getToDo(id: string) {
        try {
            this.toDos = JSON.parse(localStorage.getItem('toDos')) || [];
            return this.toDos.find((toDo: ToDo) => {
                return toDo.id === parseInt(id);
            });
        } catch (error) {
            console.log(error);
        }
    }

    public addToDo(toDo: ToDo): boolean {
        try {
            this.toDos = this.toDos || [];
            toDo.id = this.getNewId();
            this.toDos.push(toDo);
            localStorage.setItem('toDos', JSON.stringify(this.toDos));
            return true;
        } catch (error) {
            console.error(error);
            return false
        }
    }

    public deleteToDo(toDo: ToDo): boolean {

        if (!toDo || !toDo.id) {
            return false;
        }

        try {
            this.toDos = this.toDos || [];
            this.toDos = this.toDos.filter((toDoItem: ToDo) => {
                return toDoItem.id !== toDo.id;
            });
            localStorage.setItem('toDos', JSON.stringify(this.toDos));
            return true;
        } catch (error) {
            console.log(error);
            return false
        }
    }

    private getNewId(): number {

        if (!this.toDos || !this.toDos.length) {
            return 1;
        }

        this.toDos.sort((item1: ToDo, item2: ToDo) => {
            return item1.id - item2.id;
        })
        return this.toDos[this.toDos.length - 1].id + 1;
    }
}