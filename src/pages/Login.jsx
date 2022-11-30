import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/login.css'

const Login = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const [eyePassword, setEyePassword] = useState('password');

    const submit = (data) => {
        axios.post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
            .then(res => {
                console.log(res.data.data.token);
                navigate('/')
                localStorage.setItem('token', res.data.data.token)
            })
            .catch(error => {
                if (error.response.status === 404) {
                    alert('Credenciales incorrectas')
                } else {
                    console.log(error.response.data);
                }
            })
        console.log(data);
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
                <button type='submit'>LOGIN</button>
            </form>
        </div>
    );
};

export default Login;