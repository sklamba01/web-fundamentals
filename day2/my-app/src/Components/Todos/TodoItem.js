import React, { PureComponent } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const TodoItem = ({todo, index, deleteTodo, updateTodo}) => {
  return (
    <div className="todo">
      <table>
        <tbody>
          <tr>
            <td className="element">{todo.title}</td>
            <td className="element">{todo.body}</td>
            <td className="element">
              <Button variant="outline-danger" onClick={() => deleteTodo(index)}>✕</Button>
              <Button variant="outline-danger" onClick={() => updateTodo(index)}>Edit</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoItem;