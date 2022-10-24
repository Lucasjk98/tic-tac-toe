import React from 'react';

import '../styles/ResetButton.css';

export default function ResetButton({ resetBoard }) {
  return (
    <button type="button" className="reset-button" onClick={resetBoard}>Reset</button>
  );
}
