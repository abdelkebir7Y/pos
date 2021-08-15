import './order-container.style.css'
import {GiShoppingCart} from 'react-icons/gi';

const OrderContainer = ({orderItems, selectedItemId , onClickSelectItem}) => {
  let total = 0;
  return (
    <div className='order-container'>
      {
        orderItems.map(item => {
          total += Number(item.remise ? item.price * item.counter - (item.price * item.counter * item.remise / 100): item.price * item.counter);
          return (
            <ul 
              className={`order-item  ${item.id === selectedItemId ? 'selected-item' : ''}`}
              key={item.id}
              onClick= {() => {onClickSelectItem(item.id)}}
            >
              <li className='product-info text-bold'>
                <span className='product-name'>{item.name}</span>
                <span className='product-price'>
                  {`${item.remise ? item.price * item.counter - (item.price * item.counter * item.remise / 100): item.price * item.counter } DHs`}
                </span>
              </li>
              <li className='price-info'>
                <span className='product-name'>
                  {`${Number(item.counter)} unité(s) à ${Number(item.price)}DH/unité ${item.remise ? `avec remise de ${item.remise}%` : '' }`}
                </span>
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