import { HiLockClosed} from "react-icons/hi";
import { BsPersonFill} from "react-icons/bs";
import { BsCaretDownFill} from "react-icons/bs";
import './top-header.style.css'
import { Link } from "react-router-dom";


const TopHeader = ({page}) => {
    return (
      <div className='top-header text-bold red'>
        <ul className='top-header-left-buttons'>
          <li className='app-name'>POSystem</li>  
          <li className={`left-button ${page === 'dashboard' ? 'active' : ''}`}> <Link to='/'>Tableau de bord</Link> </li>
          <li className={`left-button ${page === 'articles' ? 'active' : ''}`} ><Link to='/articles'>Articles </Link></li>
          <li className={`left-button ${page === 'analyzes' ? 'active' : ''}`}>Analyse</li>
          <li className={`left-button ${page === 'configuration' ? 'active' : ''}`} >Configuration</li>
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