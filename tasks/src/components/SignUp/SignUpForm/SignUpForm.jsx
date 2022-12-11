import SignUpFormClasses from './SignUpForm.module.css';
import { SiGnuprivacyguard } from 'react-icons/si';
import {NavLink} from "react-router-dom";
import {Input} from 'baseui/input';

const LoginForm = () => {
    const inputsData = [
      {label : 'Name',     type : 'text'},
      {label : 'Lastname', type : 'email'},
      {label : 'Email',    type : 'email'},
      {label : 'Phone',    type : 'number'},
      {label : 'Password', type : 'password'},
    ];

    return (
        <form action="" className={SignUpFormClasses['ts-sign-up-form-main']}>
          <div className={SignUpFormClasses['ts-sign-up-form-main-inner-box'] }>
            <div><SiGnuprivacyguard className={SignUpFormClasses['ts-sign-up-form-main-inner-lock-icon']}/></div>
            {inputsData && typeof inputsData != undefined ? 
                inputsData.map( (inp , index) => {
                  return (
                    <div key={index.toString()}>
                      <label className={SignUpFormClasses['ts-sign-up-form-main-inner-labels']}>
                        <div className={SignUpFormClasses['ts-sign-up-form-main-inner-labels-title']}>
                          <span>{inp.label}</span>
                        </div>
                        <div>
                          <Input type={inp.type} />
                        </div>
                      </label>
                    </div>
                  );
                })
            : ''
            }
            <div>
              <input type="submit" value="Sign Up" className={SignUpFormClasses['ts-sign-up-form-main-inner-sign-in-button']}/>
            </div>
            <div className={SignUpFormClasses['ts-sign-up-form-main-inner-sign-up-button-box']}>
              <NavLink to="/login" className={SignUpFormClasses['ts-sign-up-form-main-inner-sign-up-button']}>Login</NavLink>
            </div>
          </div>
        </form>
    )
}

export default LoginForm;