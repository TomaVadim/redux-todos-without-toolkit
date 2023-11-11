import { nanoid } from "nanoid";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_STATUS = "UPDATE_STATUS";

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: { text, id: nanoid() },
});

export const removeTodo = (id: string) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const updateStatus = (id: string) => ({
  type: UPDATE_STATUS,
  payload: id,
});
