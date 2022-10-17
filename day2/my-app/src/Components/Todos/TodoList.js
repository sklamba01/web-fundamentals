import React, { PureComponent } from 'react'
import TodoItem from './TodoItem';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoList = ({todos, deleteTodo, updateTodo}) => {
    return (
        <div>
            {todos.map((todo, index) => (
                <Card>
                    <Card.Body>
                        <TodoItem todo={todo} index={index} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}



export default TodoList