import { BsSearch } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";
import { HiLockClosed} from "react-icons/hi";
import { BsPersonFill} from "react-icons/bs";
import { BsCaretDownFill} from "react-icons/bs";
import './top-header.style.css';
const  TopHeader = () => {
  return (
    <div className='top-header text-bold red'>
      <span className='app-logo'>POS-System</span>
      <div className='top-header-right'>
        <div className='search-field'>
          <BsSearch className='icon'/>
          <input type='search' className='search-input text-bold' placeholder='search' /> 
          <BsXCircle className='icon'/>
        </div>
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

export default TopHeader;