import  LoginForm  from "../../components/login-form/login-form.component";
import './login-page.style.css';

const LoginPage = () => {
    return (
        <div className='login-page flex-row text-bold '>
            <LoginForm />
        </div>
    )
}

export default LoginPage;