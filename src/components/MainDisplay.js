import React, { Component } from 'react';
import Chat from './Chat';
import AudioPlayer from './AudioPlayer';

class MainDisplay extends Component {

  render() {
    return (
      <div id="main-display">
        <Chat />
        <br />
        <AudioPlayer />
      </div>
    );
  }

}

export default MainDisplay;
