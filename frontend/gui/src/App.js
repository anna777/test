import React from 'react';
import './App.css';
import StartPage from './containers/StartPage';
import {BrowserRouter as Router} from 'react-router-dom'
import BaseRouter from './routes';


function App() {
      return (
        <div className="App">
         <Router>
            <StartPage></StartPage>
            <header className="App-header">
            </header>
            <BaseRouter/>
         </Router>
        </div>
  );
}

export default App;
