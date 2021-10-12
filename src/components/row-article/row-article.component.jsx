import './row-article.style.css';

const RowArticle = ({name , price , imageUrl}) => {
    return (
        <tr className='row-article-component pointer'>
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