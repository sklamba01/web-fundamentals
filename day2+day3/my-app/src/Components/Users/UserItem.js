import React, { PureComponent } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const UserItem = ({user, index, deleteUser, updateUser}) => {
  return (
    <div className="user">
      <table>
        <tbody>
          <tr>
            <td className="element">{user.firstName}</td>
            <td className="element">{user.lastName}</td>
            <td className="element">{user.email}</td>
            <td className="element">{user.mob}</td>
            <td className="element">
              <Button variant="outline-danger" onClick={() => deleteUser(index)}>✕</Button>
              <Button variant="outline-danger" onClick={() => updateUser(index)}>Edit</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserItem;