
import './key-button.style.css';

const KeyButton = ({children , className}) => {
  return (
    <button className={`key ${className}`} >{children}</button>
  );
}

export default KeyButton