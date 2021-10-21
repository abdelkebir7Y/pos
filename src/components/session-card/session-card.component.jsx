import React, { useState } from 'react';
import GreenButton from '../green-button/green-button.component';
import RedButton from '../red-button/red-button.component';
import {BiUserCircle , BiTime } from 'react-icons/bi'
import {IoEllipsisVertical } from 'react-icons/io5'
import './session-card.style.css';

const SessionCard = () => {
    const [openDropDown , setOpenDropDown] = useState(false);

    return (
        <div className='session-card flex-column' >
            {
                false ? 
                <>
                    <div className='session-id flex-row'>
                        <h2 >Session : ID52214Z4</h2>
                        <IoEllipsisVertical className='icon' onClick={()=>setOpenDropDown(!openDropDown)}/>
                    </div>
                    {
                        openDropDown ?
                            <div className='drop-down white gray pointer'>
                                détails
                            </div>
                        : ''
                    }
                    <div className='session-inforamtions flex-row'>
                        <BiUserCircle className='icon' /><span>Utilisateur : abdelkebir</span>
                        <BiTime className='icon'/> <span>Date d'ouverture : 12-12-2021 16:18</span>    
                    </div>
                    <div className='buttons'>
                        <GreenButton handler={()=>{}}>Reprendre</GreenButton>
                        <RedButton handler={()=>{}}> Fermer</RedButton>    
                    </div>
                </>
                :
                <>
                    <div className='session-id flex-row'>
                        <h3 >vous n'avez pas de session ouverte</h3>
                    </div>
                    <div className='session-inforamtions flex-row'>
                        <BiUserCircle className='icon' /><span>Utilisateur : abdelkebir</span>
                        <BiTime className='icon'/> <span>Dernière date de clôture : 12-12-2021 16:18</span>    
                    </div>
                    <div className='buttons'>
                        <GreenButton handler={()=>{setOpenDropDown(true)}}>Nouvelle session</GreenButton>
                    </div>
                </>
            }
            
        </div>
    );
}

export default SessionCard;