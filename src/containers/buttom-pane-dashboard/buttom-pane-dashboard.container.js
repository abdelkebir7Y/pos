import React from "react";
import ControlPanel from "../../components/dashboard-control-panel/dashboard-control-panel.component"
import SessionCard from "../../components/session-card/session-card.component";

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

    render() {
        const {navBarValue} = this.state;
        return (
            <div className='buttom-pane white'>
                <ControlPanel navBarValue = {navBarValue} setNavBarValue= {this.setNavBarValue}/>
                <SessionCard />
            </div>
        );
    }
    
}

export default ButtomPaneDashboard;