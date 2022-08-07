import './App.css';
import React from 'react';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    // <Router>
      <div className="App">
        <BrowserRouter>
        <Main/>
        </BrowserRouter>
        
      </div>
  );
}

export default App;
