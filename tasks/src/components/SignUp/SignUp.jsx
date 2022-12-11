import React from "react";
import SignUpClasses from './SignUp.module.css';
import SignUpForm from './SignUpForm/SignUpForm';

const SignUp = () => {
    return (
        <div className={SignUpClasses['ts-sign-up-main-box']}>
           <div className={SignUpClasses['ts-sign-up-inner-box']}>
                <SignUpForm/>
           </div>
        </div>
    )
}

export default SignUp;