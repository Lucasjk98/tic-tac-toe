import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import Title from './components/Title';
import ResetButton from './components/ResetButton';

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setxPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const checkWinner = (boardState) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i += 1) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (boardState[x] && boardState[x] === boardState[y] && boardState[y] === boardState[z]) {
        setGameOver(true);
        return boardState[x];
      }
    }

    return null;
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? 'X' : 'O';
      }
      return value;
    });
    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === 'O') {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    setBoard(updatedBoard);
    setxPlaying(!xPlaying);
  };

  return (
    <div className="App">
      <Title />
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
