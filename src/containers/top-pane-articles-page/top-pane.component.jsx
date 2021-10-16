import GreenButton from '../../components/green-button/green-button.component'
import RedButton from '../../components/red-button/red-button.component';
import './top-pane.style.css'

const TopPane = ({onChangeCRUDOption , CRUDOption , triggerSendData , articleName , triggerDeleteArticle}) => {
    switch (CRUDOption) {
        case 'R':
            return (
                <div className='top-pane-articles white' >
                    <div>
                        <span 
                            className='text-bold text-green-active pointer'
                            onClick={()=> {onChangeCRUDOption('Article')}}
                        >/ Articles </span>
                        <span className='text-bold text-green-inactive'>/ {articleName}</span>    
                    </div>   
                    <div>
                        <RedButton
                            handler= {triggerDeleteArticle}
                            option={'Articles'}
                        >Supprimer</RedButton>
                        <GreenButton 
                            handler= {onChangeCRUDOption}
                            option={'U'}
                        >{'Modifier'}</GreenButton>    
                    </div>
                </div>
            );
        case 'C': 
            return (
                <div className='top-pane-articles white' >
                    <div>
                        <span 
                            className='text-bold text-green-active pointer'
                            onClick={()=> {onChangeCRUDOption('Article')}}
                        >/ Articles </span>
                        <span className='text-bold text-green-inactive'>/ {'Nouveau article'}</span>    
                    </div>
                    <div>
                        <RedButton
                            handler= {onChangeCRUDOption}
                            option={'Articles'}
                        >Annuler</RedButton>
                        <GreenButton 
                            handler= {triggerSendData}
                            option={'R'}
                        >{'Enregistrer'}</GreenButton>    
                    </div>
                </div>
            );
        case 'U' :
            return (
                <div className='top-pane-articles white' >
                    <div>
                        <span 
                            className='text-bold text-green-active pointer'
                            onClick={()=> {onChangeCRUDOption('Article')}}
                        >/ Articles </span>
                        <span className='text-bold text-green-inactive'>/ {articleName}</span>    
                    </div>   
                    <div>
                        <RedButton
                            handler= {onChangeCRUDOption}
                            option={'R'}
                        >Annuler</RedButton>
                        <GreenButton 
                            handler= {triggerSendData}
                            option={'R'}
                        >{'Enregistrer'}</GreenButton>    
                    </div>
                </div>
            );
        default:
            return (
                <div className='top-pane-articles white' >
                    <span className='text-bold text-green-inactive'>/ Articles </span>
                    <GreenButton 
                        handler= {onChangeCRUDOption}
                        option={'C'}
                    >{'Créer'}</GreenButton>
                </div>
            );
    }
    
}

export default TopPane;