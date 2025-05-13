import './style.css';

export const Star = ({value, onSelect, glowing}) => {
  
  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  const handleClick = () => {
    glowing = !glowing
    !glowing && onSelect(value)
  }

  return (
    <div className={starClass} onClick={handleClick}></div>
  );
};
