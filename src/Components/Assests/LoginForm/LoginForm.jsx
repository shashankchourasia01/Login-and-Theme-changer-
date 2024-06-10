import React from 'react';
// import './LoginForm.css';
import { FaUserGraduate, FaLock } from "react-icons/fa";
import useTheme from '../../../contexts/theme';

const LoginForm = () => {
    const { themeMode } = useTheme();

    return (
        <div className={`wrapper ${themeMode}`}>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                    <FaUserGraduate className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" /> Remember Me</label>
                    <a href="#">Forgot Password?</a>
                </div>

                <button type='submit'>Login</button>

                <div className="register-link">
                    <p>
                        Don't have an account? <a href="#">Register</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
