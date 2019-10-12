import React from 'react';
import Chat from './components/Chat'
import AudioPlayer from './components/AudioPlayer';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Chat />
      <br />
      <AudioPlayer />
    </div>
  );
}

export default App;
