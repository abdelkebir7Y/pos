import './green-button.style.css'

const GreenButton = ({children}) => {
    return (
        <button className='green green-button text-bold '>{children}</button>
    )
}

export default GreenButton;