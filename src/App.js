import './App.css';
import Directory from './components/directory/directory.component';
import Keybaord from './components/keybaord/keybaord.component';


function App() {
  return (
    <div className='app'>
      <div className='divTest'>
        <Keybaord /> 
      </div>
      <Directory />
    </div>
    
  );
}

export default App;
