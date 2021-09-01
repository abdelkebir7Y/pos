import './App.css';
import PosPage from './pages/posPage/posPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PayemmentPage from './pages/PayemmentPage/PayemmentPage.component';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact >
          <PosPage />
        </Route>
        <Route path='/payemment' exact component={PayemmentPage} />
      </Switch>
    </Router>
    
  );
}

export default App;
