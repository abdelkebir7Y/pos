import GreenButton from '../../components/green-button/green-button.component'
import './top-pane.style.css'

const TopPane = ({onChangeCRUDOption , CRUDOption , triggerSendData}) => {
    switch (CRUDOption) {
        case 'R':
            return (
                <div className='top-pane-articles white' >
                    <span className='text-bold text-green-inactive'>/ Articles</span>
                    <GreenButton 
                        handler= {onChangeCRUDOption}
                        option={'C'}
                    >{'Créer'}</GreenButton>
                </div>
            );
        case 'C': case 'U' :
                return (
                    <div className='top-pane-articles white' >
                        <div>
                            <span 
                                className='text-bold text-green-active pointer'
                                onClick={()=> {onChangeCRUDOption('R')}}
                            >/ Articles</span>
                            <span className='text-bold text-green-inactive'>/ Nouveau article</span>    
                        </div>
                        <GreenButton 
                            handler= {triggerSendData}
                            option={'R'}
                        >{'Enregistrer'}</GreenButton>
                    </div>
                );
        default:
            break;
    }
    
}

export default TopPane;