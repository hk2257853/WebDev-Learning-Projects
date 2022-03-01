import React from "react";
import ToDo from "./Todo";

export default function TodoList({ todos, toggleTodo }) {
  // return the modifies array
  return todos.map((todo) => {
    return <ToDo key={todo.id} toggleTodo={toggleTodo} todo={todo} />; //
  });
  // we need to give a unique key (here we took name)...
  //so that things that only things that change will be re rendered.
}
