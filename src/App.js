import React from 'react';
import Main from './component/Main';
import github_logo from "./component/github_logo.jpg";
import './App.css';

function App() {
  return (
    <div className="App">
    <header className='App-header'>
      <img src={ github_logo } className="App-logo" alt='github_logo'/>
      <h1>Github Search User App</h1>
    </header>
    
      <Main />
    </div>
  );
}

export default App;
