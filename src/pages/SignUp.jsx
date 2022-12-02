import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUserThunk, signUpThunk } from '../store/slices/user.slice';
import '../assets/styles/signup.css'

const SignUp = () => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const submit = (data) => {
        dispatch(signUpThunk(data))
            .then(() => {
                const newUserData = {
                    email: data.email,
                    password: data.password
                }
                dispatch(loginUserThunk(newUserData))
                    .then(() => navigate('/'))
            })
    }

    return (
        <div onSubmit={handleSubmit(submit)} className='sign-up-container'>
            <form action="" className='sign-up-form'>
                <h2>Sign up</h2>
                <label>Email</label>
                <input type="text" className='form-item' {...register('email')} required />
                <label>First Name</label>
                <input type="text" className='form-item' {...register('firstName')} required />
                <label>Last Name</label>
                <input type="text" className='form-item' {...register('lastName')} required />
                <label>Password</label>
                <input type="password" className='form-item' {...register('password')} required />
                <label>Phone (10 characters)</label>
                <input type="tel" className='form-item' {...register("phone", { required: true, maxLength: 10, minLength: 10 })} required />
                <button>Sign up</button>
                <p>Already have an account? <Link to='/login'>Log in</Link></p>
            </form>
        </div>
    );
};

export default SignUp;