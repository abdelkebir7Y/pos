import './order-container.style.css'
import {GiShoppingCart} from 'react-icons/gi';

const OrderContainer = ({orderItems}) => {
  let total = 0;
  return (
    <div className='order-container'>
      {
        orderItems.map(item => {
          total += Number(item.price * item.counter);
          return (
            <ul className='order-item' key={item.id}>
              <li className='product-info text-bold'>
                <span className='product-name'>{item.name}</span>
                <span className='product-price'>{`${item.price * item.counter} DHs`}</span>
              </li>
              <li className='price-info'>
                <span className='product-name'>{`${item.counter} unité(s) à ${item.price}DH/unité`}</span>
              </li>
            </ul>
          );
        })
      }
      {
        (orderItems.length)
        ? 
          <div className='total text-bold'>Total :{total}DH</div>
        : 
          <div className='no-item text-bold'>
            <p>Select Item </p>
            <GiShoppingCart style={{fontSize : '75px'}} />
          </div>
      }
    </div>
  );
}

export default OrderContainer;