import ArticlesViewOption from "../aricles-view-options/articles-view-options.component";
import SearchField from "../search-field/search-field.component";
import './control-panel.style.css';
 
const ControlPanel = ({onSearchFieldChange , clearSearchField , searchField}) => {
  return (
    <div className='control-panel'>
      <SearchField onSearchFieldChange={onSearchFieldChange} clearSearchField={clearSearchField} searchField={searchField} />
      <ArticlesViewOption />
    </div>
  )
}

export default ControlPanel;