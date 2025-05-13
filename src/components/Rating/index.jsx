import { useState } from 'react';
import { Star } from '../Star';
import './style.css';

export const Rating = () => {
  const [rating, setRating] = useState(0);
  
  return (
    <div className="rating">
      <div className="rating__value">{rating}</div>
      <div className="rating__stars">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </div>
  );
};
