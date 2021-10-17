import './App.css';
import PosPage from './pages/posPage/posPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PaiementPage from './pages/PaiementPage/PaiementPage';
import ArticlesPage from './pages/articlesPage/articles-page';
import LoginPage from './pages/login-page/login-page';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact >
          <PosPage />
        </Route>
        <Route path='/paiement' exact component={PaiementPage} />
        <Route path='/articles' exact component={ArticlesPage} />
        <Route path='/login' exact component={LoginPage} />
      </Switch>
    </Router>
    
  );
}

export default App;
