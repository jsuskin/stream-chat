import React, { Component } from 'react';
import ChatBox from './ChatBox'
import MessageBox from './MessageBox'

class ChatArea extends Component {

  render() {
    return (
      <div>
        <ChatBox />
        <MessageBox />
      </div>
    );
  }

}

export default ChatArea;
