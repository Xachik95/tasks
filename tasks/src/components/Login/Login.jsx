import React from "react";
import LoginClasses from './Login.module.css';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
    return (
        <div className={LoginClasses['ts-login-main-box']}>
           <div className={LoginClasses['ts-login-inner-box']}>
                <LoginForm/>
           </div>
        </div>
    )
}

export default Login;