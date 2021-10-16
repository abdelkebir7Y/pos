import React from 'react';
import {GrEdit} from 'react-icons/gr';
import {RiDeleteBin6Line} from 'react-icons/ri';
import Alert from '../alert-component/alert.component';
import './article-form.style.css';
import {apiUrl} from '../../config/api/apiUrl';
import PopUpAlert from '../pop-up-alert/pop-up-alert.component';
class  ArticleForm extends React.Component {
    constructor() {
        super();
        this.state= {
            id : 0,
            name:'' ,
            s_price : '',
            p_price : '',
            category : 'jus',
            imageUrl : 'https://abdo2.odoo.com/web/static/src/img/placeholder.png',
            errors : {
                nameError : '',
                s_priceError : '',
                p_priceError : ''
            },
            success : '',
            information : '',
            deleteAlert : false
        }
    }

    //handle input data validation 

    onInputName = (event) => {
        const value = event.target.value.trim();
        const {errors} = this.state;
        if(value !== '')
            this.setState({name : value, errors : {...errors , nameError : ''}});
        else
            this.setState({name : value,errors : {...errors , nameError : "name can't be empty"}})
    }
    onInputSPrice = (event) => {
        const value = event.target.value;
        const {errors} = this.state;
        if(!isNaN(value))
            this.setState({s_price : value , errors : {...errors , s_priceError : ''}});
        else 
            this.setState({s_price : value ,errors : {...errors , s_priceError : 'invalid selling price value '}})
    }
    onInputPPrice = (event) => {
        const value = event.target.value;
        const {errors} = this.state;
        if(!isNaN(value))
            this.setState({p_price : value , errors : {...errors , p_priceError : ''}});
        else 
            this.setState({p_price : value , errors : {...errors , p_priceError : 'invalid purchase price value '}})
    }
    onSelectCategory = (event)=> {
        const value = event.target.value;
        this.setState({category : value});
    }


    //handle selectArticleImage
    createInput = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.name = 'file';
        return input;
    }

    handleSendImage = (event , input) => {
        this.setState({information : 'Uploading the image'});
        event.stopPropagation();
        event.preventDefault();
        const formData = new FormData();

        formData.append('username', 'abc123');
        formData.append('avatar', input.files[0]);

        fetch(`${apiUrl}add-product-image`, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result =>{
            this.setState({
                    imageUrl : `${apiUrl}${result.path}` ,
                    information :'' , 
                    success : 'Image updated successfully'
                } , ()=> {
                    setTimeout( () => {this.setState({success : ''})} , 5000 )
                }
            );
        })
        .catch(error =>  console.error('Error:', error));
    }

    selectArticleImage = ()=> {
        const input = this.createInput();
        input.oninput = (event)=> this.handleSendImage(event,input);
        input.click();
    }

    //delete image 
    handleDeleteImageFromServer = async() => {
        try {
            const response = await fetch(`${apiUrl}delete-product-image`,{
                method : 'DELETE' ,
                headers : {
                    "Content-Type" : 'application/json'
                },
                body : JSON.stringify({imageUrl:this.state.imageUrl})
            })
            if (response.status === 200) {
                const result = await response.json();
                this.setState(
                    {success : result , information : ''} ,
                    ()=> {
                        setTimeout(() => {this.setState({success : ''})} , 5000)
                    }
                )
            }else {
                const result = await response.json();
                this.setState(
                    {information : result } ,
                    ()=> {
                        setTimeout(() => {this.setState({information : ''})} , 5000)
                    }
                )
            }    
        } catch(err){
            console.log('error at handleDeleteImageFromServer');
            setTimeout(() => {this.setState({information : ''})} , 5000)
        } 
        
        
    }

    deleteImage = () => {
        const defaultImage = 'https://abdo2.odoo.com/web/static/src/img/placeholder.png';
        if(this.state.imageUrl !== defaultImage){
            this.setState({information : ' deleting the image'})
            this.handleDeleteImageFromServer();
            this.setState({imageUrl : defaultImage})
        }
    }

    //create and update send data to server
    handleSendData = () => {
        const {id ,name , s_price , p_price, category , imageUrl} = this.state;
        const {nameError , s_priceError ,p_priceError} = this.state.errors;
        const path = id ? `update-article/${id}` : 'create-article';
        if( !nameError && !s_priceError && !p_priceError && name !== '' && s_price!== '' && p_price !== ''){
            fetch(`${apiUrl}${path}` , {
                method : id ? 'PUT' :'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    id ,
                    name ,
                    s_price,
                    p_price,
                    category,
                    imageUrl
                })
            })
            .then(res => res.json())
            .then((res) => {
                this.setState(
                    {success :res} , 
                    ()=> {
                        setTimeout(()=>this.setState( {success : ''}), 5000)
                    }
                )
                this.props.selectArticle({id , name ,p_price ,s_price ,category ,imageUrl})
                
            })
            .catch(err => console.log('error' , err));
        }
    }
    
    //display and hide deleteAlert
    toggleDeleteAlert = (deleteAlert) => {
        this.setState({deleteAlert});
    }
    //delete article 

    handleDeleteArticle = async() => {
        const {id} = this.state;
        const path = `delete-article/${id}` ; 
        const response = await fetch(`${apiUrl}${path}` , {
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json'
            }
        });
        const result = await response.json();
        if (response.status === 200) {
            this.props.setAlertMessage(result , 'success')
        } else {
            if(response.status === 400) {
                this.props.setAlertMessage(result , 'information')
            }else {
                this.props.setAlertMessage(result , 'error')
            }
        }
        this.props.changeCRUD_articleName('Articles' , '')
    }
    
    // life sycle methods && send data to server && delete article from database 
    componentDidMount(){
        const {article} = this.props;
        if(article) {
            this.setState({...article});
        }
    }

    componentDidUpdate() {
        const {sendData , setSendDataToFalse, deleteArticle , setDeleteArticleToFalse} = this.props;
        if(sendData){
            this.handleSendData();
            setSendDataToFalse();
        }else if(deleteArticle) {
            this.toggleDeleteAlert(true);
            setDeleteArticleToFalse();
        }
    }

    render(){
        const {name, s_price ,p_price, category, errors , imageUrl , success , information , deleteAlert} = this.state;
        const {disabled} = this.props;
        return (
            <>
                {
                    success ? <Alert type='success'> {success } </Alert>: '' 
                }
                {
                    information ? <Alert type='information'> {information } </Alert>: '' 
                }
                {
                    errors.nameError ? <Alert type='error' > {errors.nameError } </Alert>: '' 
                }
                {
                    errors.s_priceError ? <Alert type='error'> {errors.s_priceError } </Alert>: '' 
                }
                {
                    errors.p_priceError ? <Alert type='error'> {errors.p_priceError } </Alert>: '' 
                }
                {
                    deleteAlert ?
                        <PopUpAlert handleDeleteArticle = {this.handleDeleteArticle} toggleDeleteAlert = {this.toggleDeleteAlert}/>
                    : ''
                }
                <div className='flex-row w-100'>
                    <div className='article-informations text-bold '>
                        <label htmlFor='nom' > Nom :</label>
                        <input 
                            type='text' 
                            placeholder="Nom de l'article" id='nom' 
                            required 
                            onInput={this.onInputName}
                            value={name}
                            disabled={disabled}
                        />
                        <label htmlFor='prix-v' > Prix de vente (DHs):</label>
                        <input 
                            type='text' 
                            placeholder="Prix de vente" id='prix-v' 
                            required 
                            onInput={this.onInputSPrice}
                            value={s_price}
                            disabled={disabled}
                        />
                        <label htmlFor='prix-a' > Prix d'achat (DHs):</label>
                        <input 
                            type='text' 
                            placeholder="Prix d'achat" 
                            id='prix-a' 
                            required 
                            onInput={this.onInputPPrice}
                            value={p_price}
                            disabled={disabled}
                        />
                        <label htmlFor='catégorie' > Catégorie :</label>
                        <select 
                            id='catégorie' 
                            required 
                            onChange={this.onSelectCategory} 
                            value={category}
                            disabled={disabled}
                        > 
                            <option value='jus'>Jus</option>
                            <option value='cafe'>Café</option>
                            <option value='limonade'>Limonade</option>
                        </select>
                    </div>
                    <div className='product-image flex-column'>
                        <img src={imageUrl} alt='product'/>
                        {
                            !disabled 
                            ?   <div className='image-icons'>
                                    <GrEdit className='icon edit ' onClick={this.selectArticleImage} />
                                    <RiDeleteBin6Line className='icon delete' onClick={this.deleteImage} />
                                </div>
                            : ''
                        }
                        
                    </div>
                </div>
                
            </>
        );    
    }
}

export default ArticleForm;