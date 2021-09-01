import React from 'react';
import './PayemmentPage.style.css';

const PayemmentPage = (props) => {
    const {orderItems} = props?.location?.state;
    return (
        <div className='ticket'>
            {
                orderItems.map(item => <p style={{ fontFamily : 'monospace' }}>{item.name.padEnd(35 , '-')}</p>)
            }
        </div>
    )
};

export default PayemmentPage;