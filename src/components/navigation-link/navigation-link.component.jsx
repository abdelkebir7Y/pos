const NavigationLink = ({handler , children , option , active}) => {
    return (
        <span 
            className={`text-bold ${active ? 'active-link pointer' : 'inactive-link'}`}
            onClick={()=> handler ? handler(option) : ''}
        >{children}</span>
    );
}

export default NavigationLink;