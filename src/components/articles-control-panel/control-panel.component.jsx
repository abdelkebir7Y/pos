import ArticlesViewOption from "../aricles-view-options/articles-view-options.component";
import SearchField from "../search-field/search-field.component";
import './control-panel.style.css';
 
const ControlPanel = ({onSearchFieldChange , clearSearchField , searchField ,onViewOptionChange ,viewOption}) => {
  return (
    <div className='control-panel'>
      <SearchField onSearchFieldChange={onSearchFieldChange} clearSearchField={clearSearchField} searchField={searchField} />
      <ArticlesViewOption onViewOptionChange={onViewOptionChange} viewOption={viewOption} />
    </div>
  )
}

export default ControlPanel;