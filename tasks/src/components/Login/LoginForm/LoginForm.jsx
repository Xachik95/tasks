import LoginFormClasses from './LoginForm.module.css';
import { BsFillShieldLockFill } from 'react-icons/bs';
import {NavLink} from "react-router-dom"; 
import { Input } from 'baseui/input';

const LoginForm = () => {

  const inputsData = [
    {label : 'User Name',     type : 'text'},
    {label : 'Password', type : 'password'},
  ];

    return (
        <form action="" className={LoginFormClasses['ts-login-form-main']}>
          <div className={LoginFormClasses['ts-login-form-main-inner-box'] }>
              <div><BsFillShieldLockFill className={LoginFormClasses['ts-login-form-main-inner-lock-icon']}/></div>
                {inputsData && typeof inputsData != undefined ? 
                  inputsData.map( (inp , index) => {
                    return (
                      <div key={index.toString()}>
                        <label className={LoginFormClasses['ts-login-form-main-inner-labels']}>
                          <div className={LoginFormClasses['ts-login-form-main-inner-labels-title']}>
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
                <input type="submit" value="Sign In" className={LoginFormClasses['ts-login-form-main-inner-sign-in-button']}/>
              </div>
              <div className={LoginFormClasses['ts-login-form-main-inner-sign-up-button-box']}>
                <NavLink to="/sign-up" className={LoginFormClasses['ts-login-form-main-inner-sign-up-button']}>Sign Up</NavLink>
              </div>
          </div>
        </form>
    )
}

export default LoginForm;