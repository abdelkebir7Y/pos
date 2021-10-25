import { useEffect, useState } from "react";
import FilterDropDownMenu from "../filter-dropdown-menu/filter-dropdown.component";
import GreenButton from "../green-button/green-button.component";
import {FaFilter} from 'react-icons/fa'
import { apiUrl } from "../../config/api/apiUrl";
import './filter.style.css'
const Filter = ({filterSessions}) => {
    const [showFilter , setShowFilter] = useState(false);

    const [showUsers , setShowUsers] = useState(false);
    const [users , setUsers] = useState([]);
    const [filtredUsers , setFiltredUsers] = useState([]);

    const [showStatus , setShowStatus] = useState(false);
    const [status , setStatus] = useState([]);
    const [filtredStatus , setFiltredStatus] = useState([]);

    const checkItemHandler = (event , filtredItems, item , handler) => {
        if(event.target.checked) 
            handler(filtredItems.concat([item]))
        else {
            const filtredArray = filtredItems.filter(elm => elm !== item)
            handler(filtredArray);
        } 
    }
    
    const checkUserHandler = (event , user) =>{
        checkItemHandler(event , filtredUsers , user , setFiltredUsers);
    }
    const checkStatusHandler = (event , status) => {
        checkItemHandler(event , filtredStatus , status , setFiltredStatus);
    }

    const fetchData = (path , setItem , setFiltredItem) => {
        fetch(`${apiUrl}${path}`)
        .then(res => res.json())
        .then(res => {
            setItem(res);
            setFiltredItem(res);
        })
        .catch(error => console.log(error , 'filter component'));
    }

    useEffect(() => {
        fetchData('users' ,setUsers , setFiltredUsers);
        fetchData('status' ,setStatus , setFiltredStatus);
        
    } ,[])
    
    return (
        <div className='filter'>
            <div className='filter-button pointer gray white' onClick={() =>{setShowFilter(!showFilter)}}>
                <FaFilter className='filtre-icon'  />
                <span>Filter</span>    
            </div>
            {
                showFilter ?
                    <>
                        <div className='filter-options white'>
                            <button onClick={() => {setShowUsers(!showUsers)}}>users</button>
                            {
                                showUsers ?  
                                    <FilterDropDownMenu 
                                        items={users} 
                                        filtredItems={filtredUsers} 
                                        checkItem={checkUserHandler} 
                                    /> 
                                : ''
                            }
                            <button onClick={() => {setShowStatus(!showStatus)}}>status</button>
                            {
                                showStatus ?  
                                    <FilterDropDownMenu 
                                        items={status} 
                                        filtredItems={filtredStatus} 
                                        checkItem={checkStatusHandler} 
                                    /> 
                                : ''
                            }
                            <GreenButton 
                                handler={() => {filterSessions(filtredUsers , filtredStatus)}} 
                            >filter</GreenButton>
                        </div>
                        <div className='arrow white'/>
                    </>
                : ''
            }
            
        </div>
    )
}

export default Filter;