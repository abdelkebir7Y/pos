import './red-button.style.css';

const RedButton = ({children ,handler , option}) => {
    return (
        <button 
            className='red-button text-bold'
            onClick={() => {handler(option)}}
        >{children}</button>
    )
}

export default RedButton;