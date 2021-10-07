import ArticleContainer from "../../components/Articles-container/articles-container.component"
import ControlPanel from "../../components/control-panel/control-panel.component"
import './buttom-pane.style.css'
const ButtomPane = () => {
    return (
        <div className='buttom-pane-articles white'>
            <ControlPanel />
            <ArticleContainer />
        </div>
    )
}

export default ButtomPane;