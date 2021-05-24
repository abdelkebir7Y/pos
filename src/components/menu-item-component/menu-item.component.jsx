import './menu-item.style.css';

function MenuItem({name , price , imageUrl}) {
  return (
    <div className='item' >
      <div 
        className='background-image' 
        style={{backgroundImage : `url(${imageUrl})`}}
      />
      <div className='content'>
        <h5 className='name' >{name}</h5>
        <span className='price'>{price} DHs</span>
      </div>
    </div>
  );
}

export default MenuItem;
