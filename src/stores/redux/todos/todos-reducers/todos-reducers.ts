import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_STATUS,
} from "../todos-actions/todos-actions";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Action<T = any> {
  type: string;
  payload: T;
}

export const todosReducers = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case UPDATE_STATUS:
      return state.map((todo) => {
        if (todo.id !== action.payload.id) return todo;

        return { ...todo, completed: !todo.completed };
      });

    default:
      return state;
  }
};
