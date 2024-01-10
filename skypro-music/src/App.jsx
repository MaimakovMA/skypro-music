import './App.css';
import NavMenu from './components/NavMenu/NavMenu.jsx'
import Centerblock from './components/Centerblock/Centerblock.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import AudioPlayer from './components/AudioPlayer/AudioPlayer.jsx';
import React from 'react';


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu/>
          <Centerblock/>
          <Sidebar/>
        </main>
        <AudioPlayer/>
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
