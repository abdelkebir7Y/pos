import './green-button.style.css'

const GreenButton = ({children ,handler , option}) => {
    return (
        <button 
            className='green green-button text-bold '
            onClick={() => {handler(option)}}
        >{children}</button>
    )
}

export default GreenButton;