import React from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddTodo = ({todos, addTodo}) => {
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");

    const handleSubmit = e => {
        let todo = { title, body};
        e.preventDefault();
        if (
            !title ||
            !body
        ) return;
        console.log(todo);
        addTodo(todo);
        setTitle("");
        setBody("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label><b>Ttile</b></Form.Label>
                <Form.Control type="text" className="input" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
                <Form.Label><b>Body</b></Form.Label>
                <Form.Control type="text" className="input" value={body} onChange={e => setBody(e.target.value)} placeholder="Body" />
            </Form.Group>
            <Button variant="primary mb-3" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default AddTodo;