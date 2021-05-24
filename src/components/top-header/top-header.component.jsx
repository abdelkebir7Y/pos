import { BsSearch } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";
import { HiLockClosed} from "react-icons/hi";
import { BsPersonFill} from "react-icons/bs";
import { BsCaretDownFill} from "react-icons/bs";
import './top-header.style.css';
const  TopHeader = ({searchField , onSearchFieldChange , clearSearchField}) => {
  return (
    <div className='top-header text-bold red'>
      <span className='app-logo'>POS-System</span>
      <div className='top-header-right'>
        <div className='search-field'>
          <BsSearch className='icon left-icon'/>
          <input 
            type='text' 
            className='search-input text-bold' 
            placeholder='search' 
            value={searchField}
            onChange={onSearchFieldChange}
          /> 
          <BsXCircle 
            className='icon right-icon'
            onClick={clearSearchField}
          />
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