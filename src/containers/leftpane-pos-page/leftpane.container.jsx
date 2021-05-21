import './leftpane.style.css'
import Keybaord from "../../components/keybaord/keybaord.component"
import OrderContainer from '../../components/order-container/order-container';

const Leftpane = () => {
  return (
    <div className='left-pane'>
      <OrderContainer/>
      <Keybaord />
    </div>
  );
}

export default Leftpane;