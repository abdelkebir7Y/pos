import './article.style.css';

const Article = ({name, price ,imageUrl})=> {
    return (
        <div className='article-component'>
            <div className='image'
                style={{backgroundImage : `url(${imageUrl})`}}
            />
            <div className='article-details'>
                <span>name : {name}</span>
                <span>price : {price}</span>
                <span>code barre : {123456754549}</span>
                <span>en stock : 15 unité(s)</span>
            </div>
        </div>
    )
}

export default Article;