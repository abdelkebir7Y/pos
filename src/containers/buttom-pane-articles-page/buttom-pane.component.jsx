import React from "react";
import ArticleForm from "../../components/article-form/article-form.component";
import ArticleContainer from "../../components/Articles-container/articles-container.component"
import ControlPanel from "../../components/control-panel/control-panel.component";
import './buttom-pane.style.css'
class ButtomPane extends React.Component{
    constructor() {
        super();
        this.state ={
            searchField : '',
            viewOption : 'square'
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

    render() {
        const {CRUDOption , sendData , setSendDataToFalse} = this.props;
        switch (CRUDOption) {
            case 'R':
                return (
                    <div className='buttom-pane-articles white'>
                        <ControlPanel 
                            onSearchFieldChange={this.onSearchFieldChange} 
                            clearSearchField={this.clearSearchField} 
                            searchField={this.state.searchField}
                            viewOption={this.state.viewOption} 
                            onViewOptionChange = {this.onViewOptionChange}
                        />
                        <ArticleContainer 
                            searchField={this.state.searchField} 
                            viewOption={this.state.viewOption} 
                        />
                    </div>
                );
            case 'C' : 
                    return (
                        <div className='buttom-pane-articles white flex-column'>
                            <ArticleForm sendData={sendData} setSendDataToFalse={setSendDataToFalse}/>
                        </div>
                    );
            default:
                break;
        }
    }
    
}

export default ButtomPane;