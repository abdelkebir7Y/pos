import './square-article.style.css';

const SquareArticle = ({name, price ,imageUrl})=> {
    return (
        <div className='article-component pointer'>
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