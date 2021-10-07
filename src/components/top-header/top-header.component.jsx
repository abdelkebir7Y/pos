import { HiLockClosed} from "react-icons/hi";
import { BsPersonFill} from "react-icons/bs";
import { BsCaretDownFill} from "react-icons/bs";
import './top-header.style.css'


const TopHeader = () => {
    return (
      <div className='top-header text-bold red'>
        <ul className='top-header-left-buttons'>
          <li className='app-name'>POSystem</li>  
          <li className='left-button active '>Articles</li>
          <li className='left-button'>Analyse</li>
          <li className='left-button' >Configuration</li>
        </ul>
        
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
    )
}

export default TopHeader;