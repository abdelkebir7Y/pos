import React from "react";
import ArticleContainer from "../../components/Articles-container/articles-container.component"
import ControlPanel from "../../components/control-panel/control-panel.component"
import './buttom-pane.style.css'
class ButtomPane extends React.Component{
    constructor() {
        super();
        this.state ={
            searchField : ''
        }
    }
    onSearchFieldChange = (event) => {
        this.setState({searchField : event.target.value})
    }
    clearSearchField = () => {
        this.setState({searchField : ''})
    }
    render() {
        return (
            <div className='buttom-pane-articles white'>
                <ControlPanel onSearchFieldChange={this.onSearchFieldChange} clearSearchField={this.clearSearchField} searchField={this.state.searchField}/>
                <ArticleContainer searchField={this.state.searchField}/>
            </div>
        );
    }
    
}

export default ButtomPane;