import React from 'react'

import "./ScoreBoard.css"
export const ScoreBoard = ({scores, xPlaying}) => {
  const {xScore, oScore} = scores;
  return (
    <div className='scoreboard'>
        <span className= {`score x-score ${!xPlaying && "inactive"}`}> Tik-Tok - {xScore} </span>
        <span className= {`score o-score ${xPlaying && "inactive"}`}> Toes - {oScore} </span>
    </div>
  )
}
