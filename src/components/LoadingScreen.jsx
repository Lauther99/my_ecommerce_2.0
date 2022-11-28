import React from 'react';
import '../assets/styles/loadingScreen.css'

const LoadingScreen = () => {
    return (
        <div className='loading-screen-div'>
            <div className="spinner">
                <div className="outer">
                    <div className="inner tl"></div>
                    <div className="inner tr"></div>
                    <div className="inner br"></div>
                    <div className="inner bl"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;