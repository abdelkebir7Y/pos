import './menu-item.style.css';

function MenuItem({id , name , price , imageUrl , addToOrderList }) {
  return (
    <div 
      className='item' 
      onClick={()=>{
        addToOrderList({name , price , id , counter : 1 })
      }} 
    >
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
