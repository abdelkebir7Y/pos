import ArticlesViewOption from "../aricles-view-options/articles-view-options.component";
import SearchField from "../search-field/search-field.component";
import './control-panel.style.css';
 
const ControlPanel = () => {
  return (
    <div className='control-panel'>
      <SearchField />
      <ArticlesViewOption />
    </div>
  )
}

export default ControlPanel;