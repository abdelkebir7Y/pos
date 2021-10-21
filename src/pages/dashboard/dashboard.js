import TopHeader from "../../components/top-header/top-header.component";
import ButtomPaneDashboard from "../../containers/buttom-pane-dashboard/buttom-pane-dashboard.container";
import TopPaneDashboard from "../../containers/top-pane-dashboard/top-pane-dashboard.container";

const Dashboard = () => {
    return (
        <div className="window" style={{flexDirection : 'column'}}>
            <TopHeader/>
            <TopPaneDashboard />
            <ButtomPaneDashboard />
        </div>
    )
}

export default Dashboard;