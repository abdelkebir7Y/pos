import React from 'react';
import './PaiementPage.style.css';
import { Link } from 'react-router-dom';
import Ticket from '../../components/ticket/ticket.component';

const PaiementPage = (props) => {
    const {orderItems} = props?.location?.state;
    
    const print = ()=>{
        window.print();
    }

    return (
        <div className='paiement-page'>
            <Ticket orderItems= {orderItems} />
            <div>
                <button 
                    className='green print-button' 
                    onClick={()=> print()}
                >Imprimer le ticket</button>
                <br/>
                <Link to={{pathname : '/' , state: { orderItems : [] } }} >
                    <button
                        className='red cancel-button' 
                    > Annuler </button> 
                </Link>
                <Link to={{pathname : '/' , state: { orderItems} }} >
                    <button
                        className='green edit-order-button' 
                    > Modifier </button>
                </Link>
            </div>
        </div>
    )
};

export default PaiementPage;