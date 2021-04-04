import './App.css';
import propic from './glenn.jpg'
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>agora</h1>
        <h5>a new way to connect</h5>
      </header> 

      <div className="Profile">
        <img src={propic} />
        <div className="Profile-content">
          <div className="Profile-header">
            <b>Glenn Yu</b> 
            <SocialIcon url="https://www.facebook.com/glenn.yu.12/" style={{ height: 20, width: 20 }}/>
          </div>
          <br/>
          Hi I don't know if this is a good idea but whatever
          <br/><br/>
          <em>Let's talk about:</em> why the Clippers choke so much :(
        </div>
      </div>
    </div>
  );
}


// ===================================

export default App;

