import React from "react";
import ArticleContainer from "../../components/Articles-container/articles-container.component"
import ControlPanel from "../../components/control-panel/control-panel.component"
import './buttom-pane.style.css'
class ButtomPane extends React.Component{
    constructor() {
        super();
        this.state ={
            searchField : '',
            viewOption : 'row'
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
    }
    
}

export default ButtomPane;