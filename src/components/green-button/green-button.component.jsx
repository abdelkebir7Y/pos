import './green-button.style.css'

const GreenButton = ({children ,handler , option}) => {
    return (
        <button 
            className='green green-button'
            onClick={() => {handler(option)}}
        >{children}</button>
    )
}

export default GreenButton;