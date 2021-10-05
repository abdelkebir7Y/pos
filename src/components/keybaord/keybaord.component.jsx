import {BsBackspace , BsXCircle} from 'react-icons/bs';
import {BsCheckCircle} from 'react-icons/bs';
import KeyButton from '../key-button/key-button.component';
import './keybaord.style.css';
import { Link } from 'react-router-dom';

const Keybaord = ({handleChangeButtonActive ,buttonActive , handleChangeInput , handleDeleteFromInput ,handleDeleteItem , orderItems}) => {
  return (
    <div className="keybaord">
      <Link to={{pathname : '/paiement' , state: { orderItems } }} >
        <KeyButton className='large-key green text-bold ' handleOnClickEvent={()=> {}}  >
          <span>Paiement</span>
          <BsCheckCircle style={{fontSize : '65px'}} />
        </KeyButton>
      </Link>
      <div className='group-keybaords'>
        <div className='group-keys' >
          <KeyButton className='text-bold small-key gray' handleOnClickEvent={handleChangeInput} >1</KeyButton>
          <KeyButton className='text-bold small-key gray' handleOnClickEvent={handleChangeInput} >2</KeyButton>
          <KeyButton className='text-bold small-key gray' handleOnClickEvent={handleChangeInput} >3</KeyButton>
          <KeyButton className={`text-bold medium-key gray ${buttonActive==='Qté' ? 'green' : ''}`}
              handleOnClickEvent={handleChangeButtonActive} 
          >
            Qté
          </KeyButton>
        </div>
        <div className='group-keys' >
          <KeyButton className='text-bold small-key gray' handleOnClickEvent={handleChangeInput} >4</KeyButton>
          <KeyButton className='text-bold small-key gray' handleOnClickEvent={handleChangeInput} >5</KeyButton>
          <KeyButton className='text-bold small-key gray' handleOnClickEvent={handleChangeInput} >6</KeyButton>
          <KeyButton className={`text-bold medium-key gray ${buttonActive==='Prix' ? 'green' : ''}`} 
              handleOnClickEvent={handleChangeButtonActive} 
          >
            Prix
          </KeyButton>
        </div>
        <div className='group-keys' >
          <KeyButton className='text-bold small-key gray' handleOnClickEvent={handleChangeInput} >7</KeyButton>
          <KeyButton className='text-bold small-key gray' handleOnClickEvent={handleChangeInput} >8</KeyButton>
          <KeyButton className='text-bold small-key gray' handleOnClickEvent={handleChangeInput} >9</KeyButton>
          <KeyButton className={`text-bold medium-key gray ${buttonActive==='Remise' ? 'green' : ''}`} 
              handleOnClickEvent={handleChangeButtonActive} 
          >
            Remise
          </KeyButton>
        </div>
        <div className='group-keys' >
          <KeyButton 
            className="text-bold small-key red" 
            handleOnClickEvent={handleDeleteItem}
            title="supprimer l'élément sélectionné" 
          >
            <BsXCircle className='icon' />
          </KeyButton>
          <KeyButton className='text-bold small-key gray' handleOnClickEvent={handleChangeInput} >0</KeyButton>
          <KeyButton className='text-bold small-key gray' handleOnClickEvent={handleChangeInput} >.</KeyButton>
          <KeyButton className="text-bold medium-key red" handleOnClickEvent={handleDeleteFromInput} >
            <BsBackspace className='icon' />
          </KeyButton>
        </div>
      </div>
    </div>
  );
}


export default Keybaord;