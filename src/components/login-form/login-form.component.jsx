import React from 'react';
import GreenButton from '../green-button/green-button.component';
import {apiUrl} from '../../config/api/apiUrl';
import { BsEye, BsEyeSlash } from "react-icons/bs";
import LoginAvatar from './login.png';
import './login-form.style.css'
import Alert from '../alert-component/alert.component';



class LoginForm extends React.Component{
    constructor() {
        super()
        this.state ={
            username : '',
            password : '',
            passwordType : 'password',
            showPassword : false,
            error : ''
        }
    }

    changeLabelPosition = (event) => {
        const input = event.target;
        const label = document.querySelector(`label[for =${input.id}]` );
        label.classList.add('move-top');
    }
    setUsername = (event) => {
        const username = event.target.value.trim();
        this.setState({username});
    }
    setPassword = (event) => {
        const password = event.target.value.trim()
        this.setState({password});
    }
    toggleShowPassword = () => {
        const showPassword = !this.state.showPassword;
        const passwordType = showPassword ? 'text' : 'password';
        this.setState({showPassword , passwordType});
    }

    // logIn
    sendUserInformations = async(username , password) => {
        try {
            const response = await fetch(`${apiUrl}login` , {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({username , password})
            }); 
            const result =await response.json();
            if(response.status === 200) {
                console.log(result)
            }else {
                if(response.status === 400) {
                    this.setState({error : result } , ()=> {
                            setTimeout( () => {this.setState({error : ''}) ; console.log('fffffffff')} , 5000 )
                        }
                    );
                }else {
                    console.log('error' , 'maybe some error in the server from login form component ')
                }
            }
        } catch (error) {
            console.log(error , 'login form component');
        }
    }
    logIn = () => {
        const {username , password} = this.state;
        if(username === '' || password === '') {
            this.setState({error : 'fill in all fields' } , ()=> {
                    setTimeout( () => {this.setState({error : ''})} , 5000 )
                }
            );
        }else {
            this.sendUserInformations(username,password);
        }
    }
    render() {
        const {showPassword , passwordType , error} = this.state;
        return (
            <div className='login-form flex-column white'>
                <img src={LoginAvatar} alt='' className='login-avatar white' />
                <h2 className='app-name'>POSystem</h2>
                {
                    error ? <Alert type='error'>{error}</Alert> : ''
                }
                <div className={`input-field ${error ? 'input-field-error' : ''}`} >
                    <label className='white' htmlFor='username' >nom d'utilisateur</label>
                    <input 
                        type='text' 
                        id ='username' 
                        onClick={this.changeLabelPosition}
                        onInput={this.setUsername}
                        spellCheck="false"
                    />
                </div>
                <div className={`input-field ${error ? 'input-field-error' : ''}`} >
                    <label className='white' htmlFor='password' >mot de passe</label>
                    <input 
                        type= {passwordType}
                        id ='password' 
                        onClick={this.changeLabelPosition} 
                        onInput={this.setPassword}
                        spellCheck="false"
                    />
                    {
                        showPassword ? 
                            <BsEyeSlash className='eye-icon icon red-eye' onClick={this.toggleShowPassword} />
                        :
                            <BsEye className='eye-icon icon' onClick={this.toggleShowPassword} />
                    }
                    
                </div>
                <GreenButton handler={this.logIn}>connexion</GreenButton>
            </div>
        );
    }
    
}

export default LoginForm;