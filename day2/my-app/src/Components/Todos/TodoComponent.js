import React, { PureComponent } from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";


const TodoComponent = () => {
  const [todos, setTodos] = React.useState([
    {
      title: "Title",
      body: "Body"
    }
  ]);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const updateTodo = (index) => {
    // const newTodos = [...todos];
    // newTodos.splice(index, 1);
    // setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo list</h1>
        <AddTodo todos={todos} addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
      </div>
    </div>
  );
}


export default TodoComponent;