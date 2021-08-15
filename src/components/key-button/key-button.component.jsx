
import './key-button.style.css';

const KeyButton = ({children , className , handleOnClickEvent , title}) => {
  return  <button  
            className={`key ${className}`} 
            onClick={(event)=> {handleOnClickEvent(children)}}
            title={title}
          >
            {children}
          </button>
}

export default KeyButton