import React, { Component } from 'react';
import UserList from './UserList';
import ChatArea from './ChatArea';

class Chat extends Component {

  render() {
    return (
      <div id="chat-container">
        <div id="chat">
          <UserList />
          <ChatArea />
        </div>
      </div>
    );
  }

}

export default Chat;
