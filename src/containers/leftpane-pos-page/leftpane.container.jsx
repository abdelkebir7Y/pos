import './leftpane.style.css'
import Keybaord from "../../components/keybaord/keybaord.component"
import OrderContainer from '../../components/order-container/order-container';
import React from 'react';

class Leftpane extends React.Component {
  constructor(){
    super();
    this.state={
      button_active : "qte"
    }
  }
  handleChangeButtonActive = (button) => {
    this.setState({button_active : button});
  }
  render() {
    const {orderItems} = {...this.props}
    return (
      <div className='left-pane'>
        <OrderContainer orderItems={orderItems}/>
        <Keybaord 
          handleChangeButtonActive = {this.handleChangeButtonActive} 
          button_active={this.state.button_active}
        />
      </div>
    );  
  }
}

export default Leftpane;