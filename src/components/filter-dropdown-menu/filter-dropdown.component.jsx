import './filter-dropdown.style.css';


const FilterDropDownMenu = ({items , filtredItems , checkItem}) => {
    return (
        <div className='white filter-dropdown-menu'>
            {
                items.map(item => 
                    <p key={item}> 
                        <input 
                            type='checkbox' 
                            checked={filtredItems.includes(item)} 
                            onChange = {(event) => checkItem(event ,item)}
                        /> 
                        {item}
                    </p>
                )
            }
        </div>
    )
}

export default FilterDropDownMenu;