import React, {useState} from "react";



import './App.css';

import { Board} from "./components/Board"
import {Title} from './components/Title.js'


function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setxPlaying] = useState(true);

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X": "TOES";
      } else {
        return value;
      }
    })

    setBoard (updatedBoard);
    setxPlaying(!xPlaying);


  }
  return(
    <div className="App">
      <Title/>
      <Board board={board} onClick = {handleBoxClick} />
    </div>
  );
}

export default App;
