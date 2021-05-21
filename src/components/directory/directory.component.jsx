import React from 'react';
import MenuItem from '../menu-item-component/menu-item.component';

import './directory.style.css';

class Directory extends React.Component {
  constructor(){
    super();
    this.state = {
      items : [
        {
          title : 'Pizza',
          price : '25',
          id : 1,
          imageUrl : 'https://www.thesdelapagode.com/guide-du-the/wp-content/uploads/2019/12/choix-th%C3%A9-vrac-infusette.jpg'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 2,
          imageUrl : 'https://www.dunesdeserts.com/wp-content/uploads/2019/03/THE-A-LA-MENTHE-MAROC-12.5.jpg'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 3,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 4,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 5,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 1,
          imageUrl : 'https://www.thesdelapagode.com/guide-du-the/wp-content/uploads/2019/12/choix-th%C3%A9-vrac-infusette.jpg'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 2,
          imageUrl : 'https://www.dunesdeserts.com/wp-content/uploads/2019/03/THE-A-LA-MENTHE-MAROC-12.5.jpg'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 3,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 4,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 5,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 1,
          imageUrl : 'https://www.thesdelapagode.com/guide-du-the/wp-content/uploads/2019/12/choix-th%C3%A9-vrac-infusette.jpg'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 2,
          imageUrl : 'https://www.dunesdeserts.com/wp-content/uploads/2019/03/THE-A-LA-MENTHE-MAROC-12.5.jpg'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 3,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 4,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 5,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 1,
          imageUrl : 'https://www.thesdelapagode.com/guide-du-the/wp-content/uploads/2019/12/choix-th%C3%A9-vrac-infusette.jpg'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 2,
          imageUrl : 'https://www.dunesdeserts.com/wp-content/uploads/2019/03/THE-A-LA-MENTHE-MAROC-12.5.jpg'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 3,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 4,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 5,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 1,
          imageUrl : 'https://www.thesdelapagode.com/guide-du-the/wp-content/uploads/2019/12/choix-th%C3%A9-vrac-infusette.jpg'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 2,
          imageUrl : 'https://www.dunesdeserts.com/wp-content/uploads/2019/03/THE-A-LA-MENTHE-MAROC-12.5.jpg'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 3,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 4,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        },
        {
          title : 'Pizza',
          price : '25',
          id : 5,
          imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU'
        }
      ]
    }
  }

  render(){
    return (
      <div className='directory-menu'>
        {
          this.state.items.map(({id , ...otherProps}) => (
            <MenuItem key={id} {...otherProps} />
          ))
        }
      </div>
    );
  }

}
export default Directory;