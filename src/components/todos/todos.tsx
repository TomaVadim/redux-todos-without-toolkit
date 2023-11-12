import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addTodo,
  removeTodo,
} from "@/stores/redux/todos/todos-actions/todos-actions";
import { RootReducer } from "@/stores/redux/root-reducer";

export const Todos = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const todos = useSelector((state: RootReducer) => state.todos);

  const handleDeleteTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleAddNewTodos = () => {
    if (inputRef.current) {
      const textOfTodo = inputRef.current.value;
      dispatch(addTodo(textOfTodo));
    }
  };

  return (
    <>
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleAddNewTodos}>add task</button>
      </div>

      <ul style={{ maxWidth: "300px", margin: "0 auto" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
