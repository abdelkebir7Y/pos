import TopHeader from '../../components/top-header/top-header.component';
import ButtomPane from '../../containers/buttom-pane-articles-page/buttom-pane.component';
import TopPane from '../../containers/top-pane-articles-page/top-pane.component';
import './articles-page.style.css'

const ArticlesPage = () => {
  return (
    <div className="window" style={{flexDirection : 'column'}}>
      <TopHeader />
      <TopPane />
      <ButtomPane />
    </div>
  )
}

export default ArticlesPage;