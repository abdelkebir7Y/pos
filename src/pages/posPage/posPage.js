import React from "react";
import { withRouter } from "react-router";
import TopHeader from "../../components/top-header/top-header.component";
import Leftpane from "../../containers/leftpane-pos-page/leftpane.container";
import Rightpane from "../../containers/rightpane-pos-page/rightpane.container";
import './posPage.style.css';

class PosPage extends React.Component{
  constructor() {
    super();
    this.state = {
      searchField : '',
      orderItems :[],
      buttonActive : "Qté",
      selectedItemId : 0,
      inputValue : ''
    }
  }

  onSearchFieldChange = (event) => {
    this.setState({searchField : event.target.value});
  }

  clearSearchField = () => {
    this.setState({searchField : ''});
  }

  findIndexOfItem =(id) => this.state.orderItems.findIndex(obj => obj.id === id)

  selectItemById = (id) => {
    const orderItems = this.state.orderItems;
    const selectedItem = orderItems[id];
    return selectedItem;
  }

  addToOrderList = (item)=> {
    const indexOFItem = this.findIndexOfItem(item.id);
    if(indexOFItem >= 0) {
      const selectedItem = this.selectItemById(indexOFItem)
      selectedItem.counter = selectedItem.counter + 1;
      this.setState({selectedItemId : selectedItem.id , inputValue: ""})
    }else{
      this.setState({orderItems : this.state.orderItems.concat(item) , selectedItemId : item.id , inputValue: ""})
    }
  }

  handleChangeButtonActive = (button) => {
    this.setState({buttonActive : button , inputValue : ''});
  }

  onClickSelectItem = (id) => {
    this.setState({selectedItemId : id , inputValue: ""});
  }

  changePriceQteRemise = (value , property) => {
    let {inputValue , selectedItemId} = this.state;
    inputValue =  inputValue.concat(value);
    if(selectedItemId && !isNaN(inputValue)) {
      const indexOfItem = this.findIndexOfItem(selectedItemId);
      const selectedItem = this.selectItemById(indexOfItem);
      selectedItem[property] = Number(inputValue);
      this.setState({inputValue});
    }
  }

  handleChangeInput = (value) => {
    switch(this.state.buttonActive){
      case 'Qté' : 
        this.changePriceQteRemise(value , 'counter');
        break;
      case 'Prix' :
        this.changePriceQteRemise(value , 'price');
        break;
      case 'Remise' :
        if(this.state.inputValue.concat(value) <= 100 )
          this.changePriceQteRemise(value , 'remise');
        break;
      default :
        console.log(this.state.buttonActive);
    }
    
  }

  deleteFromPriceQteRemise =(property) => {
    let {inputValue , selectedItemId} = this.state;
    inputValue = inputValue.slice(0, -1);
    if(selectedItemId) {
      const indexOfItem = this.findIndexOfItem(selectedItemId);
      const selectedItem = this.selectItemById(indexOfItem);
      selectedItem[property] = Number(inputValue);
      this.setState({inputValue});
    }
  }

  handleDeleteFromInput = ()=> {
    switch(this.state.buttonActive){
      case 'Qté' : 
        this.deleteFromPriceQteRemise('counter');
        break;
      case 'Prix' :
        this.deleteFromPriceQteRemise('price');
        break;
      case 'Remise' :
        this.deleteFromPriceQteRemise('remise');
        break;
      default :
        console.log(this.state.buttonActive);
    } 
  }

  handleDeleteItem =() => {
    let {selectedItemId , orderItems} = this.state;
    if(selectedItemId ) {
      const indexOfItem = this.findIndexOfItem(selectedItemId);
      orderItems.splice(indexOfItem , 1 )
      if(orderItems.length)
        selectedItemId = orderItems[orderItems.length-1].id;
      else 
        selectedItemId = 0;
      this.setState({orderItems , selectedItemId});
    }
  }
  



  componentDidMount(){
    this.setState({orderItems : this?.props?.location?.state?.orderItems ?? []})
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
          selectedItemId = {this.state.selectedItemId}
          handleChangeButtonActive = {this.handleChangeButtonActive}
          buttonActive= {this.state.buttonActive}
          onClickSelectItem = {this.onClickSelectItem}
          handleChangeInput= {this.handleChangeInput}
          handleDeleteFromInput= {this.handleDeleteFromInput}
          handleDeleteItem ={this.handleDeleteItem}
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

export default withRouter(PosPage);