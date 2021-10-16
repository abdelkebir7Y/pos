import React from 'react';
import TopHeader from '../../components/top-header/top-header.component';
import ButtomPane from '../../containers/buttom-pane-articles-page/buttom-pane.component';
import TopPane from '../../containers/top-pane-articles-page/top-pane.component';
import './articles-page.style.css'

class ArticlesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      CRUDOption : 'Articles',
      sendData : false,
      deleteArticle : false,
      articleName : ''
    }
  }

  onChangeCRUDOption = (option) => {
    this.setState({CRUDOption : option});
  }

  setArticleName = (name) => {
    this.setState({articleName : name})
  }
  
  changeCRUD_articleName = (option , name) => {
    this.setState({CRUDOption : option ,articleName : name});
  }

  triggerSendData = ()=> {
    this.setState({sendData : true});
  }
  setSendDataToFalse =()=> {
    this.setState({sendData : false})
  }
  //trigger delete article
  triggerDeleteArticle = ()=> {
    this.setState({deleteArticle : true});
  }
  setDeleteArticleToFalse = () => {
    this.setState({deleteArticle : false})
  }
  render() {
    return (
      <div className="window" style={{flexDirection : 'column'}}>
        <TopHeader />
        <TopPane 
          onChangeCRUDOption={this.onChangeCRUDOption} 
          CRUDOption={this.state.CRUDOption} 
          triggerSendData = {this.triggerSendData} 
          triggerDeleteArticle= {this.triggerDeleteArticle}
          articleName={this.state.articleName}
        />
        <ButtomPane 
          CRUDOption={this.state.CRUDOption} 
          sendData={this.state.sendData} 
          setSendDataToFalse={this.setSendDataToFalse}
          deleteArticle={this.state.deleteArticle}
          setDeleteArticleToFalse = {this.setDeleteArticleToFalse}
          changeCRUD_articleName={this.changeCRUD_articleName}
        />
      </div>
    )  
  }
}

export default ArticlesPage;