import { nanoid } from "nanoid";

import { TODO_ACTIONS } from "@/types/enum/todo-actions";

export const addTodo = (text: string) => ({
  type: TODO_ACTIONS.ADD_TODO,
  payload: { text, id: nanoid() },
});

export const removeTodo = (id: string) => ({
  type: TODO_ACTIONS.REMOVE_TODO,
  payload: id,
});

export const updateStatus = (id: string) => ({
  type: TODO_ACTIONS.UPDATE_STATUS,
  payload: id,
});
