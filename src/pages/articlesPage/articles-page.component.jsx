import React from 'react';
import TopHeader from '../../components/top-header/top-header.component';
import ButtomPane from '../../containers/buttom-pane-articles-page/buttom-pane.component';
import TopPane from '../../containers/top-pane-articles-page/top-pane.component';
import './articles-page.style.css'

class ArticlesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      CRUDOption : 'R',
      sendData : false
    }
  }

  onChangeCRUDOption = (option) => {
    this.setState({CRUDOption : option});
  }

  triggerSendData = ()=> {
    this.setState({sendData : true});
  }
  setSendDataToFalse =()=> {
    this.setState({sendData : false})
  }
  render() {
    return (
      <div className="window" style={{flexDirection : 'column'}}>
        <TopHeader />
        <TopPane onChangeCRUDOption={this.onChangeCRUDOption} CRUDOption={this.state.CRUDOption} triggerSendData = {this.triggerSendData} />
        <ButtomPane CRUDOption={this.state.CRUDOption} sendData={this.state.sendData} setSendDataToFalse={this.setSendDataToFalse}/>
      </div>
    )  
  }
}

export default ArticlesPage;