import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function User({ user }) {
  return (
    <div className="user">
      <table>
        <tbody>
          <tr>
            <td className="element">{user.firstName}</td>
            <td className="element">{user.lastName}</td>
            <td className="element">{user.email}</td>
            <td className="element">{user.mob}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function FormUser({ addUser }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mob, setMob] = React.useState("");

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
    setFirstName("");
    setLastName("");
    setEmail("");
    setMob("");
  };

  return (
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
  );
}

function App() {
  const [users, setUsers] = React.useState([
    {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      mob: "Mobile Number"
    }
  ]);

  const addUser = (user) => {
    const newUsers = [...users, user];
    setUsers(newUsers);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">User list</h1>
        <FormUser addUser={addUser} />
        <div>
          {users.map((user) => (
            <Card>
              <Card.Body>
                <User user={user} />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;