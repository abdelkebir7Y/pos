import React from "react";
import Directory from "../../components/directory/directory.component"
import './rightpane.style.css';
import {apiUrl} from '../../config/api/apiUrl'


class Rightpane extends React.Component {
  
  constructor(){
    super();
    this.state = {
      items : []
    }
  }

  componentDidMount(){
    fetch(`${apiUrl}menu-items`)
    .then(res => res.json())
    .then(items => this.setState({items}))
    .catch(err => console.log('error posPage/rightPane/componentDidMount\n' , err))
  }

  render(){
    const {searchField , addToOrderList} = this.props;
    return (
      <div className='right-pane'>
        <Directory 
          searchField = {searchField} 
          items = {this.state.items} 
          addToOrderList = {addToOrderList}
        />
      </div>
    )
  }
  
}

export default Rightpane;