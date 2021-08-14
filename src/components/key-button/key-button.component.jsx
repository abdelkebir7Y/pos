
import './key-button.style.css';

const KeyButton = ({children , className , handleOnClickEvent}) => {
  return  <button  
            className={`key ${className}`} 
            onClick={(event)=> {handleOnClickEvent(children)}}
          >
            {children}
          </button>
}

export default KeyButton