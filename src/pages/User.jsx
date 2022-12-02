import React from 'react';
import '../assets/styles/user.css'
import userImage from '../assets/images/usersvg.svg'
import { Link, useNavigate } from 'react-router-dom';
const User = () => {
    const userName = localStorage.getItem('userName')
    const navigate = useNavigate()

    function logout(){
        localStorage.setItem('userName', '')
        localStorage.setItem('token', '')
        navigate('/')
    }


    return (
        <div className='user-interface'>
            <h1>Welcome!</h1>
            <h1>{userName}</h1>
            <div className='user-image'>
                <img src={userImage} alt="a random user image" />
            </div>
            <Link to='/purchases'>My purchases</Link>            
            <button type='button' onClick={() => logout()}>Logout</button>
        </div>
    );
};

export default User;