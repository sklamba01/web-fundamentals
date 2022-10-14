import React, {PureComponent} from 'react'


class AddUser extends PureComponent {
    render() {
      return (
        <table>
          {this.props.userAttributes.map((attributes) => (
            <tr>
              <td>{attributes.label}</td>
              <td>
                <input></input>
              </td>
            </tr>
          ))}
        </table>
      )
    }
}

export default AddUser;