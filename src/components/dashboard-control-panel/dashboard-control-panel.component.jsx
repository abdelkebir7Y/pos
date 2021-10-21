import React from 'react';
import './dashboard-control-panel.style.css'

const  ControlPanel = ({navBarValue , setNavBarValue}) => {
    return (
        <ul className='dashboard-control-panel flex-row text-bold'>
            <li className={`pointer gray ${navBarValue === 1 ? 'active' : ''}`} onClick={() => setNavBarValue(1)}>Session en cours </li>
            <li className={`pointer gray ${navBarValue === 2 ? 'active' : ''}`} onClick={() => setNavBarValue(2)}>Sessions</li>
            <li className={`pointer gray ${navBarValue === 3 ? 'active' : ''}`} onClick={() => setNavBarValue(3)}>Commandes</li>
            <li className={`pointer gray ${navBarValue === 4 ? 'active' : ''}`} onClick={() => setNavBarValue(4)}>Paiements</li>
            <li className={`pointer gray ${navBarValue === 5 ? 'active' : ''}`} onClick={() => setNavBarValue(5)}>Clients</li>
        </ul>
    );
    
}

export default ControlPanel;