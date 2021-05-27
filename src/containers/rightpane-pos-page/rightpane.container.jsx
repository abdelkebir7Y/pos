import Directory from "../../components/directory/directory.component"
import './rightpane.style.css'
const Rightpane = ({searchField , items , addToOrderList}) => {
  return (
    <div className='right-pane'>
      <Directory 
        searchField = {searchField} 
        items = {items} 
        addToOrderList = {addToOrderList}
      />
    </div>
  )
}

export default Rightpane;