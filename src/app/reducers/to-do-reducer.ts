import { ActionReducer, Action } from "@ngrx/store";
import { ToDo } from "../models/todo.model";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function toDoReducer(state: ToDo[] = [], action: Action): ToDo[] {
    console.log(state);
    let newState = state.slice();
    switch (action.type) {
        case ADD_TODO:
            newState.push(action.payload);
            return newState;

        case DELETE_TODO:
            return newState;

        case UPDATE_TODO:
            return newState;

        default:
            return newState;
    }
}