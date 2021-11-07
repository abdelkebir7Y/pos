import GreenButton from '../../components/green-button/green-button.component'
import NavigationLink from '../../components/navigation-link/navigation-link.component';
import RedButton from '../../components/red-button/red-button.component';

const TopPane = ({onChangeCRUDOption , CRUDOption , triggerSendData , articleName , triggerDeleteArticle}) => {
    switch (CRUDOption) {
        case 'R':
            return (
                <div className='top-pane white' >
                    <div>
                        <NavigationLink 
                                handler= {onChangeCRUDOption}
                                option={'Articles'}
                                active={true}
                        >{'/ Articles '}</NavigationLink> 
                        <NavigationLink 
                                active={false}
                        > / {articleName}</NavigationLink> 
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
                <div className='top-pane white' >
                    <div>
                        <NavigationLink 
                                handler= {onChangeCRUDOption}
                                option={'Article'}
                                active={true}
                        >{'/ Articles '}</NavigationLink> 
                        <NavigationLink 
                                active={false}
                        > / {'Nouveau article'}</NavigationLink> 
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
                <div className='top-pane white' > 
                    <div>
                        <NavigationLink 
                                handler= {onChangeCRUDOption}
                                option={'Article'}
                                active={true}
                        >{'/ Articles '}</NavigationLink> 
                        <NavigationLink 
                                active={false}
                        > / {articleName}</NavigationLink> 
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
                <div className='top-pane white' >
                    <NavigationLink
                        active={false}
                    >{'/ Articles '}</NavigationLink> 
                    <GreenButton 
                        handler= {onChangeCRUDOption}
                        option={'C'}
                    >{'Créer'}</GreenButton>
                </div>
            );
    }
    
}

export default TopPane;