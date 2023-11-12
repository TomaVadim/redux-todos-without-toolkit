import { TODO_ACTIONS } from "@/types/enum/todo-actions";
import { Todo } from "@/types/todo";

interface PayloadAction<T> {
  type: string;
  payload: T;
}

export const todosReducers = (
  state: Todo[] = [],
  { type, payload }: PayloadAction<Todo>
) => {
  switch (type) {
    case TODO_ACTIONS.ADD_TODO:
      return state.concat({
        id: payload.id,
        text: payload.text,
        completed: false,
      });

    case TODO_ACTIONS.REMOVE_TODO:
      if (typeof payload === "string") {
        return state.filter((todo) => todo.id !== payload);
      }
      return state;

    case TODO_ACTIONS.UPDATE_STATUS:
      return state.map((todo) => {
        if (todo.id !== payload.id) return todo;

        return { ...todo, completed: !todo.completed };
      });

    default:
      return state;
  }
};
