import Logo from './logoPos.png';
import './ticket.style.css';

const Ticket = ({orderItems}) => {
    var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' , minute: 'numeric' };
    const date =new Date().toLocaleDateString('fr-FR', dateOptions);
    let total  = 0;
    return (
        <div className='ticket'>
            <img className='logo' src={Logo} alt='logo' />
            <p className='date' >{date}</p>
            {
                orderItems.map(item => {
                    const itemPrice = item.remise ? item.price * item.counter - (item.price * item.counter * item.remise / 100): item.price * item.counter;
                    total += itemPrice;
                    return <p className='ticket-item' key={item.id} >{item.name.padEnd(31 , '-')+ ( itemPrice+ 'DH').padStart(7 , '-')}</p>
                })
            }
            <div className='total' >
                <p>{"".padEnd(total.toString().length + 11, '_')}</p>
                <p>{"Total " + total + ' DH '}</p> 
            </div>
            <p className='ticket-footer'>Merci de votre visite</p>
        </div>
    )
}

export default Ticket;