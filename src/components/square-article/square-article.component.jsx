import './square-article.style.css';

const SquareArticle = ({id , name, price ,imageUrl,selectArticle})=> {
    return (
        <div 
            className='article-component pointer' 
            onClick={() => selectArticle({name ,s_price : price ,p_price : price , imageUrl , category :'cafe' , id  })}
        >
            <div className='image'
                style={{backgroundImage : `url(${imageUrl})`}}
            />
            <div className='article-details'>
                <span>nom : {name}</span>
                <span>prix de vente  : {price}</span>
                <span>prix d'achat  : {'-'}</span>
                <span>categorie : {'jus'}</span>
                {/* <span>code barre : {123456754549}</span>
                <span>en stock : 15 unité(s)</span> */}
            </div>
        </div>
    )
}

export default SquareArticle;