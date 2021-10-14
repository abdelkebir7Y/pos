import React from 'react';
import {GrEdit} from 'react-icons/gr';
import {RiDeleteBin6Line} from 'react-icons/ri';
import Alert from '../alert-component/alert.component';
import './article-form.style.css';
import {apiUrl} from '../../config/api/apiUrl';
class  ArticleForm extends React.Component {
    constructor() {
        super();
        this.state= {
            name:'' ,
            s_price : '',
            p_price : '',
            category : '',
            imageUrl : 'https://abdo2.odoo.com/web/static/src/img/placeholder.png',
            errors : {
                nameError : '',
                s_priceError : '',
                p_priceError : ''
            },
            success : '',
            information : '',
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
    handleDeleteImageFromServer = () => {
        fetch(`${apiUrl}delete-product-image`,{
            method : 'DELETE' ,
            headers : {
                "Content-Type" : 'application/json'
            },
            body : JSON.stringify({imageUrl:this.state.imageUrl})
        })
        .then(response => response.json())
        .then(result => { 
            this.setState(
                {success : result , information : ''} ,
                ()=> {
                    setTimeout(() => {this.setState({success : ''})} , 5000)
                }
            )
        })
        .catch(error => this.setState(
            {success : error , information : ''} ,
            ()=> {
                setTimeout(() => {this.setState({success : ''})} , 5000)
            }
        ));
    }

    deleteImage = () => {
        const defaultImage = 'https://abdo2.odoo.com/web/static/src/img/placeholder.png';
        if(this.state.imageUrl !== defaultImage){
            this.setState({information : ' deleting the image'})
            this.handleDeleteImageFromServer();
            this.setState({imageUrl : defaultImage})
        }
    }

    //send data to server
    handleSendData = () => {
        const {name , s_price , p_price, category , imageUrl} = this.state;
        const {nameError , s_priceError ,p_priceError} = this.state.errors;
        if( !nameError && !s_priceError && !p_priceError && name !== '' && s_price!== '' && p_price !== ''){
            fetch(`${apiUrl}create-article` , {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    name ,
                    s_price,
                    p_price,
                    category,
                    imageUrl
                })
            })
            .then(res => res.json())
            .then((item) => {
                this.setState(
                    {success :`${item} has been successfully registered`} , 
                    ()=> {
                        setTimeout(()=>this.setState( {success : ''}), 5000)
                    }
                )
                
            })
            .catch(err => console.log('error' , err));
        }
    }


    // life sycle methods and send data to server
    componentDidUpdate() {
        const {sendData , setSendDataToFalse} = this.props;
        if(sendData){
            this.handleSendData();
            setSendDataToFalse();
        }
    }

    render(){
        const {errors , imageUrl , success , information} = this.state;
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
                <div className='flex-row w-100'>
                    <div className='article-informations text-bold '>
                        <label htmlFor='nom' > Nom :</label>
                        <input type='text' placeholder="Nom de l'article" id='nom' required onInput={this.onInputName}/>
                        <label htmlFor='prix-v' > Prix de vente (DHs):</label>
                        <input type='text' placeholder="Prix de vente" id='prix-v' required onInput={this.onInputSPrice}/>
                        <label htmlFor='prix-a' > Prix d'achat (DHs):</label>
                        <input type='text' placeholder="Prix d'achat" id='prix-a' required onInput={this.onInputPPrice}/>
                        <label htmlFor='catégorie' > Catégorie :</label>
                        <select id='catégorie' required onChange={this.onSelectCategory}> 
                            <option value='jus'>Jus</option>
                            <option value='cafe'>Café</option>
                            <option value='limonade'>Limonade</option>
                        </select>
                    </div>
                    <div className='product-image flex-column'>
                        <img src={imageUrl} alt='product'/>
                        <div className='image-icons'>
                            <GrEdit className='icon edit ' onClick={this.selectArticleImage} />
                            <RiDeleteBin6Line className='icon delete' onClick={this.deleteImage} />
                        </div>
                    </div>
                </div>
                
            </>
        );    
    }
}

export default ArticleForm;