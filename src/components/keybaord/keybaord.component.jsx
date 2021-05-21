import './keybaord.style.css'

const Keybaord = () => {
  return (
    <div className="keybaord">
      <button className="key large-key" >Paiement</button>
      <div className='group-keybaords'>
      <div className='group-keys' >
        <button className="key" >1</button>
        <button className="key" >2</button>
        <button className="key" >3</button>
        <button className="key large color" >Qté</button>
      </div>
      <div className='group-keys' >
        <button className="key" >4</button>
        <button className="key" >5</button>
        <button className="key" >6</button>
        <button className="key large color" >Prix</button>
      </div>
      <div className='group-keys' >
        <button className="key" >7</button>
        <button className="key" >8</button>
        <button className="key" >9</button>
        <button className="key large color" >Remis</button>
      </div>
      <div className='group-keys' >
        <button className="key color" >+/-</button>
        <button className="key" >0</button>
        <button className="key" >,</button>
        <button className="key large" >{'<='}</button>
      </div>
    </div>
    </div>
  );
}


export default Keybaord;