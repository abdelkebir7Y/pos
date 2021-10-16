import {VscCircleSlash} from 'react-icons/vsc';
import GreenButton from '../green-button/green-button.component';
import RedButton from '../red-button/red-button.component';
import './pop-up-alert.style.css';
const PopUpAlert = ({handleDeleteArticle , toggleDeleteAlert}) => {
    return (
        <div className='pop-up-alert flex-row'>
            <div className='box white flex-column'>
                <div>
                    <VscCircleSlash className='delete-icon' />
                    <p>Voulez-vous réellement supprimer cet article?</p>
                </div>
                <div className='buttons'>
                    <RedButton handler={handleDeleteArticle}>Supprimer</RedButton>
                    <GreenButton handler={toggleDeleteAlert} option={false}>{' Annuler '}</GreenButton>
                </div>
            </div>
        </div>
    );
}

export default PopUpAlert;