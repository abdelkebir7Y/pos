import GreenButton from '../../components/green-button/green-button.component'
import './top-pane.style.css'

const TopPane = () => {
    return (
        <div className='top-pane-articles white' >
            <span className='text-bold text-green-active'>/ Articles</span>
            <GreenButton>{'Créer'}</GreenButton>
        </div>
    )
}

export default TopPane;