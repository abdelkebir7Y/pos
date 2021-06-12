
import './key-button.style.css';

const KeyButton = ({children , className , handleChangeButtonActive , buttonActiveValue}) => {
  return (
    handleChangeButtonActive ?
      <button  
        className={`key ${className}`} 
        onClick={(event)=> {handleChangeButtonActive(buttonActiveValue)}}
      >
        {children}
      </button>
    :
      <button className={`key ${className}`} >{children}</button>
  );
}

export default KeyButton