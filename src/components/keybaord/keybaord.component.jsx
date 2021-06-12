import {BsBackspace} from 'react-icons/bs';
import {BsCheckCircle} from 'react-icons/bs';
import KeyButton from '../key-button/key-button.component';
import './keybaord.style.css'

const Keybaord = ({handleChangeButtonActive ,button_active}) => {
  return (
    <div className="keybaord">
      <KeyButton className='large-key green text-bold ' >
        <span>Paiement</span>
        <BsCheckCircle style={{fontSize : '65px'}} />
      </KeyButton>
      <div className='group-keybaords'>
        <div className='group-keys' >
          <KeyButton className='text-bold small-key gray' >1</KeyButton>
          <KeyButton className='text-bold small-key gray' >2</KeyButton>
          <KeyButton className='text-bold small-key gray' >3</KeyButton>
          <KeyButton className={`text-bold medium-key gray ${button_active==='qte' ? 'green' : ''}`}
              handleChangeButtonActive={handleChangeButtonActive} 
              buttonActiveValue='qte' 
          >
            Qté
          </KeyButton>
        </div>
        <div className='group-keys' >
          <KeyButton className='text-bold small-key gray' >4</KeyButton>
          <KeyButton className='text-bold small-key gray' >5</KeyButton>
          <KeyButton className='text-bold small-key gray' >6</KeyButton>
          <KeyButton className={`text-bold medium-key gray ${button_active==='prix' ? 'green' : ''}`} 
              handleChangeButtonActive={handleChangeButtonActive} 
              buttonActiveValue='prix'
          >
            Prix
          </KeyButton>
        </div>
        <div className='group-keys' >
          <KeyButton className='text-bold small-key gray' >7</KeyButton>
          <KeyButton className='text-bold small-key gray' >8</KeyButton>
          <KeyButton className='text-bold small-key gray' >9</KeyButton>
          <KeyButton className={`text-bold medium-key gray ${button_active==='remise' ? 'green' : ''}`} 
              handleChangeButtonActive={handleChangeButtonActive} 
              buttonActiveValue='remise'
          >
            Remise%
          </KeyButton>
        </div>
        <div className='group-keys' >
          <KeyButton className="text-bold small-key red" >+/-</KeyButton>
          <KeyButton className='text-bold small-key gray' >0</KeyButton>
          <KeyButton className='text-bold small-key gray' >,</KeyButton>
          <KeyButton className="text-bold medium-key red" ><BsBackspace className='icon' /></KeyButton>
        </div>
      </div>
    </div>
  );
}


export default Keybaord;