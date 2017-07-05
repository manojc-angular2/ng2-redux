import { ActionReducer, Action } from "@ngrx/store";
import { ToDo } from "../models/todo.model";

export const SET_TODO = "SET_TODO";
export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function toDoListReducer(state: ToDo[] = [], action: Action): ToDo[] {
    switch (action.type) {

        case GET_TODOS:
            return action.payload;

        case ADD_TODO:
            return action.payload;

        case DELETE_TODO:
            return action.payload;

        case UPDATE_TODO:
            return action.payload;

        default:
            return state.slice();
    }
}

export function toDoItemReducer(state: ToDo = new ToDo(), action: Action): ToDo {
    switch (action.type) {

        case SET_TODO:
            return action.payload;

        default:
            return Object.assign({}, state);
    }
}