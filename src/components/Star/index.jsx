import { useState } from 'react';
import './style.css';

export const Star = () => {
  const [glowing, setGlowing] = useState(false);
  
  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  return (
    <div className={starClass}></div>
  );
};
