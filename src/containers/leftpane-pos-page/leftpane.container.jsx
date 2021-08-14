import './leftpane.style.css'
import Keybaord from "../../components/keybaord/keybaord.component"
import OrderContainer from '../../components/order-container/order-container';
import React from 'react';

function Leftpane({orderItems , selectedItemId , onClickSelectItem , handleChangeInput ,handleChangeButtonActive , buttonActive}){
  return (
    <div className='left-pane'>
      <OrderContainer 
        orderItems={orderItems}
        selectedItemId={selectedItemId} 
        onClickSelectItem = {onClickSelectItem}
      />
      <Keybaord 
        handleChangeButtonActive = {handleChangeButtonActive} 
        handleChangeInput={handleChangeInput}
        buttonActive={buttonActive}
      />
    </div>
  ); 
}

export default Leftpane;