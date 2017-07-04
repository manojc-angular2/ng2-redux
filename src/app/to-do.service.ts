import { Injectable } from '@angular/core';
import { ToDo } from "./models/todo.model";

@Injectable()
export class ToDoService {

    private toDos: ToDo[];
    constructor() { }

    public getToDos(): Promise<ToDo[]> {
        try {
            this.setToDos();
            return Promise.resolve(this.toDos);

        } catch (error) {
            return Promise.reject(error);
        }
    }

    public getToDo(id: string): Promise<ToDo> {
        try {
            this.setToDos();
            let toDo: ToDo = this.toDos.find((toDo: ToDo) => {
                return toDo.id === parseInt(id);
            });
            return Promise.resolve(toDo);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    public addToDo(toDo: ToDo): Promise<ToDo> {
        try {
            this.setToDos();
            toDo.id = this.getNewId();
            this.toDos.push(toDo);
            localStorage.setItem('toDos', JSON.stringify(this.toDos));
            return Promise.resolve(toDo);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    public updateToDo(toDo: ToDo): Promise<ToDo> {

        if (!toDo || !toDo.id) {
            Promise.reject(null);
        }

        try {
            this.setToDos();
            this.toDos.forEach((toDoItem: ToDo) => {
                if (toDo.id === toDoItem.id) {
                    toDoItem.name = toDo.name;
                    toDoItem.description = toDo.description;
                }
            });
            localStorage.setItem('toDos', JSON.stringify(this.toDos));
            return Promise.resolve(toDo);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    public deleteToDo(toDo: ToDo): Promise<boolean> {

        if (!toDo || !toDo.id) {
            return Promise.resolve(false);
        }

        try {
            this.setToDos();
            this.toDos = this.toDos.filter((toDoItem: ToDo) => {
                return toDoItem.id !== toDo.id;
            });
            localStorage.setItem('toDos', JSON.stringify(this.toDos));
            return Promise.resolve(true);
        } catch (error) {
            return Promise.reject(error);
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

    private setToDos(): void {
        this.toDos = JSON.parse(localStorage.getItem('toDos')) || [];
    }
}