import { ToDo } from "../models/todo.model";
import { Action } from "@ngrx/store";

export const GET_TODOS = "GET_TODOS";
export const GET_TODO = "GET_TODO";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function toDoReducer(state: ToDo[] = [], action: Action): ToDo[] {
    switch (action.type) {
        case GET_TODOS:
            return state;

        case GET_TODO:
            return state;

        case ADD_TODO:
            return state;

        case REMOVE_TODO:
            return state;

        case UPDATE_TODO:
            return state;

        case DELETE_TODO:
            return state;

        default:
            return state;
    }
}