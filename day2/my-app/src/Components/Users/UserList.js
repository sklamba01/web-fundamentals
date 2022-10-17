import React, { PureComponent } from 'react'
import UserItem from './UserItem';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = ({users, index, deleteUser, updateUser}) => {
    return (
        <div>
            {users.map((user, index) => (
                <Card>
                    <Card.Body>
                        <UserItem user={user} index={index} deleteUser={deleteUser} updateUser={updateUser} />
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}



export default UserList