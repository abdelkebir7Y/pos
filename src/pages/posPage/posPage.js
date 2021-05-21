import TopHeader from "../../components/top-header/top-header.component";
import Leftpane from "../../containers/leftpane-pos-page/leftpane.container";
import Rightpane from "../../containers/rightpane-pos-page/rightpane.container";
import './posPage.style.css';

const PosPage = () => {
  return (
    <div className='window'>
      <TopHeader />
      <Leftpane />
      <Rightpane />
    </div>
  );
}

export default PosPage;