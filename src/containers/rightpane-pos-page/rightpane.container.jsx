import Directory from "../../components/directory/directory.component"
import './rightpane.style.css'
const Rightpane = ({searchField , items}) => {
  return (
    <div className='right-pane'>
      <Directory searchField = {searchField} items = {items} />
    </div>
  )
}

export default Rightpane;