import React from "react";
import TopHeader from "../../components/top-header/top-header.component";
import Leftpane from "../../containers/leftpane-pos-page/leftpane.container";
import Rightpane from "../../containers/rightpane-pos-page/rightpane.container";
import './posPage.style.css';

class PosPage extends React.Component{
  constructor() {
    super();
    this.state = {
      searchField : '',
      items : [
        {
          name : 'Cocktail de fruits',
          price : '45',
          id : 1,
          imageUrl : 'https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2Fc446ee8d-a302-4ed4-9d7a-f09489712af7.2Ejpeg/400x400/quality/80/crop-from/center/cocktail-de-fruits-a-la-creme.jpeg'
        },
        {
          name : "Jus d'orange",
          price : '29',
          id : 2,
          imageUrl : 'https://img.cuisineaz.com/610x610/2017-08-03/i131280-jus-d-orange-au-thermomix.jpeg'
        },
        {
          name : 'Jus de citron',
          price : '25',
          id : 3,
          imageUrl : 'https://www.plantes-et-sante.fr/images/articles/le-vertus-du-citron.jpg_720_1000_2'
        },
        {
          name : 'Jus de carotte',
          price : '22',
          id : 4,
          imageUrl : 'https://file1.topsante.com/var/topsante/storage/images/nutrition-et-recettes/recettes/jus-tonique-de-carottes-614842/8728596-1-fre-FR/Jus-tonique-de-carottes.jpg?alias=original'
        },
        {
          name : 'Jus de concombre',
          price : '22',
          id : 6,
          imageUrl : 'https://img.cuisineaz.com/660x660/2017-11-03/i133743-jus-detox-concombre.jpeg'
        },
        {
          name : 'Jus de kiwi',
          price : '35',
          id : 7,
          imageUrl : 'https://img.cuisineaz.com/610x610/2017-08-16/i131627-smoothie-kiwi-thermomix.jpeg'
        },
        {
          name : 'Jus de pêche',
          price : '37',
          id : 8,
          imageUrl : 'https://img.cuisineaz.com/660x660/2016-04-28/i26500-jus-de-peche-frais.jpg'
        },
        {
          name : "Jus d'ananas",
          price : '39',
          id : 9,
          imageUrl : 'https://www.naturaforce.com/wp-content/uploads/2020/01/shutterstock_178806548-min.jpg'
        },
        {
          name : 'Jus de poire',
          price : '39',
          id : 10,
          imageUrl : 'https://www.courses-domicile.fr/wp-content/uploads/2018/06/jus-de-poire-1.jpg'
        },
        {
          name : 'Jus d\'avocat',
          price : '35',
          id : 11,
          imageUrl : 'https://ileauxepices.com/blog/wp-content/uploads/2018/03/jus-davocat-sant%C3%A9.jpg'
        },
        {
          name : 'Café frappé',
          price : '35',
          id : 12,
          imageUrl : 'https://www.recette360.com/wp-content/uploads/2019/08/caf%C3%A9-frapp%C3%A9-au-thermomix.jpg'
        },
        {
          name : 'Chocolat glacé',
          price : '35',
          id : 13,
          imageUrl : 'https://files.meilleurduchef.com/mdc/photo/recette/glace-chocolat/glace-chocolat-640.jpg'
        },
        {
          name : 'Choco-vanille',
          price : '35',
          id : 14,
          imageUrl : 'https://www.ptitchef.com/imgupl/recipe/moelleux-choco-vanille-coeur-coulant-chocolat-au-lait--md-409250p643304.jpg'
        },
        {
          name : 'Café turc',
          price : '30',
          id : 15,
          imageUrl : 'https://www.toutelaturquie.com/wp-content/uploads/2020/05/Gunun-bol-kopuklu-Turk-Kahvesi.-%EF%B8%8FHazzapulo-Pasajindayim-ve-kendimi-bildim-bileli-burada-olan-tasli.jpg'
        },
        {
          name : 'Espresso',
          price : '20',
          id : 16,
          imageUrl : 'https://media-cdn.tripadvisor.com/media/photo-s/0d/e7/dc/49/cafeina-expresso.jpg'
        },
        {
          name : 'Café double',
          price : '24',
          id : 17,
          imageUrl : 'https://www.maaned.fr/wp-content/uploads/2020/01/Caf%C3%A9-double.jpg'
        },
        {
          name : 'Amrécano',
          price : '22',
          id : 18,
          imageUrl : 'https://assets.afcdn.com/recipe/20180801/81649_w1024h576c1cx1766cy2888.webp'
        },
        {
          name : 'Pizza',
          price : '25',
          id : 19,
          imageUrl : 'https://img.freepik.com/photos-gratuite/pizza-pizza-remplie-tomates-salami-olives_140725-1200.jpg?size=626&ext=jpg'
        },
        {
          name : 'Pizza',
          price : '25',
          id : 20,
          imageUrl : 'https://img.freepik.com/photos-gratuite/pizza-pizza-remplie-tomates-salami-olives_140725-1200.jpg?size=626&ext=jpg'
        },
        {
          name : 'Pizza',
          price : '25',
          id : 21,
          imageUrl : 'https://img.freepik.com/photos-gratuite/pizza-pizza-remplie-tomates-salami-olives_140725-1200.jpg?size=626&ext=jpg'
        },
        {
          name : 'Pizza',
          price : '25',
          id : 22,
          imageUrl : 'https://img.freepik.com/photos-gratuite/pizza-pizza-remplie-tomates-salami-olives_140725-1200.jpg?size=626&ext=jpg'
        },
        {
          name : 'Pizza',
          price : '25',
          id : 23,
          imageUrl : 'https://img.freepik.com/photos-gratuite/pizza-pizza-remplie-tomates-salami-olives_140725-1200.jpg?size=626&ext=jpg'
        },
        {
          name : 'Pizza',
          price : '25',
          id : 24,
          imageUrl : 'https://img.freepik.com/photos-gratuite/pizza-pizza-remplie-tomates-salami-olives_140725-1200.jpg?size=626&ext=jpg'
        },
        {
          name : 'Pizza',
          price : '25',
          id : 25,
          imageUrl : 'https://img.freepik.com/photos-gratuite/pizza-pizza-remplie-tomates-salami-olives_140725-1200.jpg?size=626&ext=jpg'
        }
      ],
      orderItems : []
    }
  }

  onSearchFieldChange = (event) => {
    this.setState({searchField : event.target.value});
  }

  clearSearchField = () => {
    this.setState({searchField : ''});
  }

  addToOrderList = (item)=> {
    const indexOFItem = this.state.orderItems.findIndex(obj => obj.id === item.id);
    if(indexOFItem >= 0) {
      const orderItems = this.state.orderItems;
      const selectItem = orderItems[indexOFItem];
      selectItem.counter = selectItem.counter + 1;
      orderItems[indexOFItem] = selectItem;
      this.setState(orderItems)
    }else{
      this.setState({orderItems : this.state.orderItems.concat(item) });
    }
  }

  render () {
    return (
      <div className='window'>
        <TopHeader 
          searchField={this.state.searchField} 
          onSearchFieldChange = {this.onSearchFieldChange} 
          clearSearchField={this.clearSearchField}
        />
        <Leftpane 
          orderItems={this.state.orderItems} 
        />
        <Rightpane 
          searchField={this.state.searchField} 
          items={this.state.items}
          addToOrderList= {this.addToOrderList}
        />
      </div>
    );  
  }
}

export default PosPage;