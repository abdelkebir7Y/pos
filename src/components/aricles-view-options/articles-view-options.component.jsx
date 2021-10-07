import {ImList} from 'react-icons/im';
import {FaTh} from 'react-icons/fa';
import './articles-view-options.css';

const ArticlesViewOption = () => {
    return (
        <div className='articles-VO'>
            <ImList className='icon text-green-inactive '/>
            <FaTh className='icon text-green-active '/>
        </div>
    )
}

export default ArticlesViewOption