const { default: NavigationLink } = require("../../components/navigation-link/navigation-link.component")

const TopPaneDashboard = () => {
    return (
        <div className='top-pane white' >
            <NavigationLink active={false} >Tableau de bord</NavigationLink>
        </div>
    );
}

export default TopPaneDashboard;