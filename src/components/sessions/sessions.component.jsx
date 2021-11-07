import React from "react";
import {apiUrl} from '../../config/api/apiUrl';
import Filter from "../filter-component/filter.component";
import './sessions.style.css';

class Sessions extends React.Component {
    constructor() {
        super()
        this.state = {
            sessions : [],
            filtredSessions : [],
        }
    }

    filterSessions = (filtredUsers , filtredStatus) => {
        console.log(filtredUsers , filtredStatus)
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
        const {filtredSessions } = this.state;
        return (
            <div className='sessions flex-column '>
                <Filter filterSessions= {this.filterSessions} />
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
                                        <td>{session['id']}</td>
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