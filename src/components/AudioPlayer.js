import React, { Component } from 'react';

class AudioPlayer extends Component {

  render() {
    return (
      <div id="audio-player">
        <audio>
          <div className="player">
            <div className="info">
              <div id="artist-name">Deftones</div>
              <div id="song-name">My Own Summer</div>
            </div>
            <div className="btns">
              <span id="mute-btn" role="img" aria-label="accessible-emoji">🔇</span>
              <div id="mute-btn"></div>
            </div>
          </div>
        </audio>
      </div>
    );
  }

}

export default AudioPlayer;
