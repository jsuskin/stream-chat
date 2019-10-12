import React, { Component } from 'react';

const fakeUsers = ['dee', 'mac', 'charlie', 'dennis', 'frank', 'gary bussy', 'urethra franklin', 'penis dragger']

class UserList extends Component {

  render() {
    return (
      <div id="user-list">
        <ul>
          {fakeUsers.map((user, idx) => <li key={idx}>{user}</li>)}
        </ul>
      </div>
    );
  }

}

export default UserList;
