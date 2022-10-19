import React from 'react'

import './Box.css'

export const Box = ({value, onClick}) => {
  const style = value === "X" ? "box x" : value === "TOES"? "box o": "box";

  return (
    <button className = {style} onClick = {onClick}> {value} </button>
  )
  }