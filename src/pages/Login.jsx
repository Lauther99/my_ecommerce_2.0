import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/login.css'
import { loginUserThunk } from '../store/slices/user.slice';

const Login = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const dispatch =  useDispatch();
    const [eyePassword, setEyePassword] = useState('password');

    const submit = (data) => {
        dispatch(loginUserThunk(data))
        .then(() => navigate('/'))
        
    }

    const togglePassword = () => {
        eyePassword === 'password' ? setEyePassword('text') : setEyePassword('password')
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit(submit)} className='login-form'>
                <h1>Welcome</h1>
                <div className='form-item'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Your e-mail'{...register('email')} required />
                </div>
                <div className='form-item'>
                    <label htmlFor="">Password</label>
                    <input type={eyePassword} placeholder='Your password' {...register('password')} required />
                    <i className="fa-solid fa-eye" onClick={() => togglePassword()}></i>
                </div>
                <button>LOGIN</button>
                <p>Don't have an account?, <Link to='/signup'>Sign Up</Link></p>
            </form>
        </div>
    );
};

export default Login;