import { BsSearch } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";
import './search-field.style.css';

const SearchField = ( {searchField , onSearchFieldChange ,clearSearchField}) => {
	return (
		<div className='search-field'>
			<BsSearch className='icon left-icon'/>
			<input 
				type='text' 
				className='search-input text-bold' 
				placeholder='search' 
				value={searchField}
				onInput={onSearchFieldChange}
			/> 
			<BsXCircle 
				className='icon right-icon'
				onClick={clearSearchField}
			/>
		</div>
	)
}

export default SearchField;