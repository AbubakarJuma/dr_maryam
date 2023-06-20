import React from 'react';
import '../Styles/NumberCard.css';

const NumberCard = ({ title, number, color }) => {
  return (
    <div className='miharbi'>
    <div className="number-card" style={{ backgroundColor: color }}>
      <h3 className="number-card__title">{title}</h3>
      <p className="number-card__number">{number}</p>
    </div>
    </div>
  );
};

export default NumberCard;
