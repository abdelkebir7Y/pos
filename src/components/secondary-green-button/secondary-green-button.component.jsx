import './secondary-green-button.style.css'

const SecondaryGreenButton = ({children , handler , option}) => {
    return (
        <button 
            className='secondary-green-button white'
            onClick={() => {handler(option)}}
        >{children}</button>
    )
}

export default SecondaryGreenButton;