import './row-article.style.css';

const RowArticle = ({id , name , price , imageUrl , selectArticle}) => {
    return (
        <tr 
            className='row-article-component pointer' 
            onClick={() => selectArticle({name ,s_price : price ,p_price : price , imageUrl , category :'cafe' , id })}
        >
            <td >
                <div className='image'
                    style={{backgroundImage : `url(${imageUrl})`}}
                />
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td>-</td>
            <td>{'jus'}</td>
        </tr>
    )
}

export default RowArticle;