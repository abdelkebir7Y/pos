import React from "react";
import {FaFilter} from 'react-icons/fa'
import {apiUrl} from '../../config/api/apiUrl';
import GreenButton from "../green-button/green-button.component";
import './sessions.style.css';

class Sessions extends React.Component {
    constructor() {
        super()
        this.state = {
            sessions : [],
            filtredSessions : [],
            showFilter : false
        }
    }

    filterSessions = () => {
        const {sessions} = this.state;
        const user = document.querySelector('#user').value;
        const status = document.querySelector('#status').value;
        console.log(user , status)
        if(user && status) {
            const filtredSessions = sessions.filter(session => (session.user=== user && session.status === status) )
            this.setState({filtredSessions , showFilter :false})
        }else {
            if(user) {
                const filtredSessions = sessions.filter(session => session.user=== user)
                this.setState({filtredSessions , showFilter :false})
            }else {
                if(status){
                    const filtredSessions = sessions.filter(session => session.status === status )
                    this.setState({filtredSessions , showFilter :false})
                }
                else {
                    this.setState({filtredSessions : sessions , showFilter : false})
                }
            }
        }
        
    }

    toggleShowFiltreOption = () => {
        this.setState({showFilter : !this.state.showFilter})
    }

    componentDidMount() {
        fetch(`${apiUrl}sessions`)
        .then(res => res.json())
        .then(sessions => this.setState({sessions , filtredSessions : sessions}))
        .catch(console.log);
    }
    render() {
        const {filtredSessions , showFilter} = this.state;
        return (
            <div className='sessions flex-column '>
                <div className='filter'>
                    <div className='filter-button pointer gray white' onClick={this.toggleShowFiltreOption}>
                        <FaFilter className='filtre-icon'  />
                        <span>Filter</span>    
                    </div>
                    {
                        showFilter ?
                        <>
                            <div className='filter-options white'>
                                <label htmlFor='user' >user : </label>
                                <select className='white' id='user' >
                                    <option value='' >toutes</option>
                                    <option value='abdelkebir'>Abdelkebir</option>
                                    <option value='mohamed'>Mohamed</option>
                                </select>
                                <label htmlFor='status'>status : </label>
                                <select className='white' id ='status'>
                                    <option value='' >toutes</option>
                                    <option value='fermé'>Fermé</option>
                                    <option value='ouvert'>Ouvert</option>
                                </select>
                                <GreenButton handler={this.filterSessions} >filter</GreenButton>
                            </div>
                            <div className='arrow white'/>
                        </>
                        : ''
                    }
                    
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>identifiant</th>
                            <th>Ouvert par</th>
                            <th>Date d'ouverture</th>
                            <th>Date de clôture</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filtredSessions.map(session => {
                                return (
                                    <tr key={session.id}>
                                        <td>{session.id}</td>
                                        <td>{session.user}</td>
                                        <td>{session.openIn}</td>
                                        <td>{session.closeIn}</td>
                                        <td>{session.status}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>    
            </div>
        )    
    }
}

export default Sessions;