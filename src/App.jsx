import React from "react";
import './App.css';
import Board from './components/board.jsx'

const App = () => {
  return (
    <div className="App">
      <div className="head-wrapper">
        <h1>All the Coding News</h1>
        <h4>Below are all the best resources I have found for all news that's coding related.</h4>
      </div>
      <Board />
    </div>
  )
}

export default App;
