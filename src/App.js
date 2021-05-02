import './App.css';
function App() {
  return (
    <div className='item' >
      <div 
        className='background-image' 
        style={{backgroundImage : 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYQhzCm91T20Z-_2TWSvR9OGn-zA7QIWW-w&usqp=CAU")'}}
      />
      <div className='content'>
        <h5 className='title' >pizza</h5>
        <span className='subtitle'>25 DHs</span>
      </div>
    </div>
  );
}

export default App;
