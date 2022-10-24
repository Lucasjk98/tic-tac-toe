import React from 'react';
import tiktokImage from '../assets/tiktok.jpg';
import toeImage from '../assets/toe.png';
import '../styles/Box.css';

export default function Box({ value, onClick }) {
  const objectFit = value === 'X' ? 'contain' : 'fill';

  return (
    <button type="button" className="box x" onClick={onClick}>
      { value && <img style={{ objectFit }} src={value === 'X' ? tiktokImage : toeImage} alt={{ value }} /> }
    </button>
  );
}
