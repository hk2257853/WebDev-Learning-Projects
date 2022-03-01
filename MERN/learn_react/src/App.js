import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

/*
useState re renders whenever things change
useRef getting reference to input
useEffect storing data
uuidv4 for random ids
*/

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, settodos] = useState([]);
  // todos, settodos whever these change...   useState([])   ([]) mean no default data(render normally when I start the site)
  const todoNameRef = useRef();
  // todos - items...
  // settodos - functions we will each time

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]); // 2nd argument tell when to update stored date(here when I change that array)

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) settodos(storedTodos);
  }, []);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    settodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    settodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]; // take the previous data array n append this new one...
    });
    todoNameRef.current.value = null; // clear the input box
  }

  function handleClearTodo() {
    const newtodos = todos.filter((todo) => !todo.complete);
    settodos(newtodos);
  }

  return (
    // return html that will be displayed
    <>
      {/* It can return only one thing at a time something... so we put in an empty element.
    Its returning one thing that contains multiple things(TodoList, input, button...) */}

      {/*<TodoList /> is the component(js file) we created. We are Displaying whatever its returning*/}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      {/*passing todos as parameter*/}
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add ToDo</button>
      <button onClick={handleClearTodo}>Clear Done</button>
      <div>{todos.filter((todo) => !todo.complete).length} ToDo remaining!</div>
    </> // Using common inbuilt functions look very neat compared to a custom for loop...
  );
}

export default App;
