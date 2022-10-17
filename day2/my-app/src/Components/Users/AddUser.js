import React, { Fragment } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddUser = ({ curUser, users, addUser }) => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mob, setMob] = React.useState("");

    const updateFields = (user) => {
        console.log("update fields");
        setFirstName(curUser.firstName);
        setLastName(curUser.lastName);
        setEmail(curUser.email);
        setMob(curUser.mob);
    }

    const handleSubmit = e => {
        let user = { firstName, lastName, email, mob };
        e.preventDefault();
        if (
            !firstName ||
            !lastName ||
            !email ||
            !mob
        ) return;
        console.log(user);
        addUser(user);
        curUser = {firstName:"", lastName:"", email:"", mob:""};
        updateFields(curUser);
    };

    return (
        <Fragment>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label><b>First name</b></Form.Label>
                    <Form.Control type="text" className="input" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First name" />
                    <Form.Label><b>Last name</b></Form.Label>
                    <Form.Control type="text" className="input" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last name" />
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control type="email" className="input" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                    <Form.Label><b>Mobile number</b></Form.Label>
                    <Form.Control type="text" className="input" value={mob} onChange={e => setMob(e.target.value)} placeholder="Mobile number" />
                </Form.Group>
                <Button variant="primary mb-3" type="submit">
                    Submit
                </Button>
            </Form>
        </Fragment>
    );
}

export default AddUser;