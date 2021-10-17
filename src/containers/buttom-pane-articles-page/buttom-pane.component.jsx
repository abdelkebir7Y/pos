import React from "react";
import ArticleForm from "../../components/article-form/article-form.component";
import ArticleContainer from "../../components/Articles-container/articles-container.component"
import ControlPanel from "../../components/control-panel/control-panel.component";
import Alert from '../../components/alert-component/alert.component';
import './buttom-pane.style.css'
class ButtomPane extends React.Component{
    constructor() {
        super();
        this.state ={
            searchField : '',
            viewOption : 'square',
            article : {},
            success : '',
            information : '',
            error : ''
        }
    }
    onSearchFieldChange = (event) => {
        this.setState({searchField : event.target.value})
    }
    clearSearchField = () => {
        this.setState({searchField : ''})
    }
    onViewOptionChange = (viewOption)=> {
        this.setState({viewOption })
    }

    selectArticle = (article) => {
        this.setState({article});
        this.props.changeCRUD_articleName('R' , article.name);
    }

    //success message if any article is deleted 
    setAlertMessage = (message , type) => {
        if(type === 'success')
            this.setState({success : message} , () => {
                setTimeout(() => {
                    this.setState({success : ''});
                } , 5000)
            });
        else{ 
            if (type === 'information') {
                this.setState({information : message} , () => {
                    setTimeout(() => {
                        this.setState({information : ''});
                    } , 5000)
                });
            }else {
                this.setState({error : message} , () => {
                    setTimeout(() => {
                        this.setState({error : ''});
                    } , 5000)
                });
            }
        }
    }

    CRUDOptionSwitch = () => {
        const {CRUDOption , sendData , setSendDataToFalse , deleteArticle , setDeleteArticleToFalse , changeCRUD_articleName} = this.props;
        switch (CRUDOption) {
            case 'R':
                return (
                        <ArticleForm 
                            key='R'
                            sendData={sendData} 
                            setSendDataToFalse={setSendDataToFalse} 
                            article={this.state.article} 
                            disabled={true}
                            deleteArticle={deleteArticle}
                            setDeleteArticleToFalse = {setDeleteArticleToFalse}
                            setAlertMessage = {this.setAlertMessage}
                            changeCRUD_articleName = {changeCRUD_articleName}
                        />
                );
            case 'C' : 
                return (
                        <ArticleForm 
                            key='C'
                            sendData={sendData} 
                            setSendDataToFalse={setSendDataToFalse} 
                            setAlertMessage = {this.setAlertMessage}
                            selectArticle={this.selectArticle} 
                        />
                );
            case 'U' :
                return (
                        <ArticleForm 
                            key='U'
                            sendData={sendData} 
                            setSendDataToFalse={setSendDataToFalse} 
                            article={this.state.article}
                            setAlertMessage = {this.setAlertMessage}
                            selectArticle={this.selectArticle} 
                        />  
                );
            default:
                return (
                    <>
                        <ControlPanel 
                            onSearchFieldChange={this.onSearchFieldChange} 
                            clearSearchField={this.clearSearchField} 
                            searchField={this.state.searchField}
                            viewOption={this.state.viewOption} 
                            onViewOptionChange = {this.onViewOptionChange}
                        />
                        <ArticleContainer 
                            selectArticle= {this.selectArticle}
                            searchField={this.state.searchField} 
                            viewOption={this.state.viewOption} 
                        />
                    </>
                );
        }        
    }

    render() {
        return (
            <div className='buttom-pane-articles white'>
            {
                this.state.success ? <Alert type='success'> {this.state.success  } </Alert>: '' 
            }
            {
                this.state.information ? <Alert type='information'> {this.state.information  } </Alert>: '' 
            }
            {
                this.state.error ? <Alert type='error'> {this.state.error  } </Alert>: '' 
            }
            {
                this.CRUDOptionSwitch()
            }
            </div>
        )
        
    }
    
}

export default ButtomPane;