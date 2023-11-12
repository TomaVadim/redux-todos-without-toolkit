import { combineReducers } from "redux";

import { todosReducers } from "@/stores/redux/todos/todos-reducers/todos-reducers";

export const rootReducer = combineReducers({
  todos: todosReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
