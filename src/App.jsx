import React from "react";
import './App.css';
import Board from './components/board.jsx'

const App = () => {
  return (
    <div className="App">
      <h1>All the Coding News</h1>
      <h4>Below are all the best resources I have found for all news that's coding related.</h4>
      <Board />
    </div>
  )
}

export default App;
