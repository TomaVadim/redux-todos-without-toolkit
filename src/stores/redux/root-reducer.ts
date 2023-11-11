import { combineReducers } from "redux";
import { todosReducers } from "./todos/todos-reducers/todos-reducers";

export const rootReducer = combineReducers({
  todos: todosReducers,
});

export type RootReducer = ReturnType<typeof rootReducer>;
