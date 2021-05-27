import React from 'react';
import MenuItem from '../menu-item-component/menu-item.component';
import {GiShoppingCart} from 'react-icons/gi';
import './directory.style.css';

const Directory = ({items , searchField , addToOrderList}) => {

  const filteredItems =  items.filter(item => {
    return item.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    (filteredItems.length) ?
      <div className='directory-menu'>
        {
          filteredItems.map(({id , ...otherProps}) => (
            <MenuItem 
              key={id} 
              {...otherProps}
              id={id}
              addToOrderList={addToOrderList}
            />
          ))
        }
      </div>
    :
      <div className='no-item text-bold' >
        <p>Aucun élément trouvé</p>
        <GiShoppingCart style={{fontSize : '75px'}} />
      </div>
  );
}

export default Directory;