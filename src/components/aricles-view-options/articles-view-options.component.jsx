import {ImList} from 'react-icons/im';
import {FaTh} from 'react-icons/fa';
import './articles-view-options.css';

const ArticlesViewOption = ({onViewOptionChange , viewOption}) => {
    return (
        <div className='articles-VO'>
            <ImList 
                className={`icon ${viewOption==='row' ? 'text-green-active' : 'text-green-inactive' } `}
                onClick={() => { onViewOptionChange('row')}}
            />
            <FaTh 
                className= {`icon ${viewOption==='square' ? 'text-green-active' : 'text-green-inactive' } `} 
                onClick={() => { onViewOptionChange('square')}}
            />
        </div>
    )
}

export default ArticlesViewOption