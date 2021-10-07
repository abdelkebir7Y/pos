import { HiLockClosed} from "react-icons/hi";
import { BsPersonFill} from "react-icons/bs";
import { BsCaretDownFill} from "react-icons/bs";
import './top-header-pos.style.css';
import SearchField from "../search-field/search-field.component";
const  TopHeaderPos = ({...props}) => {
  return (
    <div className='top-header text-bold red'>
      <span className='app-logo'>POS-System</span>
      <div className='top-header-right'>
        <SearchField {...props} />
        <div className='top-header-right-buttons'>
          <span className='lock-button top-header-button'> 
            <HiLockClosed className='icon' />
            Lock
          </span>
          <span className='top-header-button'>
            <BsPersonFill className='icon'/>
            Abdelkebir
            <BsCaretDownFill className='icon caret-down'/>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopHeaderPos;