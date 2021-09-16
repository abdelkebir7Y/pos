import './App.css';
import PosPage from './pages/posPage/posPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PaiementPage from './pages/PaiementPage/PaiementPage.component';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact >
          <PosPage />
        </Route>
        <Route path='/paiement' exact component={PaiementPage} />
      </Switch>
    </Router>
    
  );
}

export default App;
