import React, { PureComponent, useEffect } from "react";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from "./UserList";
import AddUser from "./AddUser";
import updateFields from "./AddUser";
import axios from 'axios'


const UserComponent = () => {
  const empUser = {firstName:"", lastName:"", email:"", mob:""};
  const [users, setUsers] = React.useState([
    {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      mob: "Mobile Number"
    }
  ]);

  const getUsersFromApi = async () => {    
    axios.get('/user_all')
      .then((data) => {
        const newUsers = [...users];
        data.data.map((user) => {
          console.log(user);
          newUsers.push(user);
        });
        setUsers(newUsers);
      });
  }

  const addUser = (user) => {
    const newUsers = [...users, user];
    setUsers(newUsers);
  };

  const deleteUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  }

  const updateUser = (index) => {
    const user = users[index];
    // deleteUser(index);
    
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">User list</h1>
        <Button className="btn-primary" variant="outline" onClick={() => {getUsersFromApi()}}>Fetch users</Button>
        <AddUser user={empUser} users={users} addUser={addUser} />
        <UserList users={users} deleteUser={deleteUser} updateUser={updateUser} />
      </div>
    </div>
  );
}


export default UserComponent;