import React from "react";
import SquareArticle from "../square-article/square-article.component";
import {apiUrl} from '../../config/api/apiUrl'
import './articles-container.style.css';
import RowArticle from "../row-article/row-article.component";

class ArticleContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			articles : []
		}
	}

	getArticles = () => {
		fetch(`${apiUrl}menu-items`)
		.then(res => res.json())
		.then(articles => this.setState({articles}))
		.catch(err => console.log('error posPage/rightPane/componentDidMount\n' , err))
	}

	componentDidMount() {
		this.getArticles();
	}
	
	render() {
		const {searchField , viewOption  , selectArticle} = this.props ;
		const filteredArticles = this.state.articles.filter(article => {
			return article.name.toUpperCase().includes(searchField.toUpperCase());
		})
		return (
			<>
				{
					filteredArticles.length 
					? 
					<div className='articles-container'>
						{
							viewOption === 'square'
							?
								filteredArticles.map(({...props}) => {
									return <SquareArticle key={props.id} {...props} selectArticle={selectArticle}/>
								})
							:
								
								<table>
									<thead>
										<tr>
											<th></th>
											<th>Nom</th>
											<th>Prix de vente</th>
											<th>Prix d'achat</th>
											<th>Catégorie</th>
										</tr>
									</thead>
									<tbody>
										{
												filteredArticles.map(({id , ...props}) => {
												return <RowArticle key={id} {...props} selectArticle={selectArticle}/>
											})
										}
									</tbody>
								</table>
						}
					</div>
					:
						<p className='no-article text-bold'>aucun article trouvé</p>
				}
			</>
		);
	}
}

export default ArticleContainer;