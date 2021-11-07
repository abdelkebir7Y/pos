import React from "react";
import ControlPanel from "../../components/dashboard-control-panel/dashboard-control-panel.component"
import SessionCard from "../../components/session-card/session-card.component";
import Sessions from "../../components/sessions/sessions.component";

class  ButtomPaneDashboard extends React.Component{
    constructor() {
        super();
        this.state = {
            navBarValue : 1
        }
    }
    setNavBarValue = (navBarValue) => {
        this.setState({navBarValue});
    }

    switchBarValue = (navBarValue) => {
        switch (navBarValue) {
            case 1:
                return (
                    <SessionCard />
                )
            case 2 : 
                return(
                    <Sessions />
                )
            default:
                break;
        }
    }
    
    render() {
        const {navBarValue} = this.state;
        return (
            <div className='buttom-pane white'>
                <ControlPanel navBarValue = {navBarValue} setNavBarValue= {this.setNavBarValue}/>
                {this.switchBarValue(navBarValue)}
            </div>
        );
    }
    
}

export default ButtomPaneDashboard;