import './leftpane.style.css'
import Keybaord from "../../components/keybaord/keybaord.component"
import OrderContainer from '../../components/order-container/order-container';

const Leftpane = ({orderItems}) => {
  return (
    <div className='left-pane'>
      <OrderContainer orderItems={orderItems}/>
      <Keybaord />
    </div>
  );
}

export default Leftpane;