import './order-container.style.css'

const OrderContainer = () => {
  return (
    <div className='order-container'>
      <div class="tabs">
          <div class="tab tabs__tab--active">
            Commande I
          </div>
          <div class="tab tabs__tab--inactive">
            Commande II
          </div>
          <div class="tab tabs__tab--inactive">
            Commande II
          </div>
          <div class="tab tabs__tab--inactive">
            Commande II
          </div>
      </div>
      <ul className='order-item'>
        <li className='product-info text-bold'>
          <span className='product-name'>Pizza</span>
          <span className='product-price'>25DH</span>
        </li>
        <li className='price-info'>
          <span className='product-name'>{'2,00 unité(s) à 25DH/unité'}</span>
        </li>
      </ul>
      <ul className='order-item'>
        <li className='product-info text-bold'>
          <span className='product-name'>Pizza</span>
          <span className='product-price'>25DH</span>
        </li>
        <li className='price-info'>
          <span className='product-name'>{'2,00 unité(s) à 25DH/unité'}</span>
        </li>
      </ul>
      <ul className='order-item'>
        <li className='product-info text-bold'>
          <span className='product-name'>Pizza</span>
          <span className='product-price'>25DH</span>
        </li>
        <li className='price-info'>
          <span className='product-name'>{'2,00 unité(s) à 25DH/unité'}</span>
        </li>
      </ul>
      <div className='total text-bold'>Total :175DH</div>
    </div>
  );
}

export default OrderContainer;