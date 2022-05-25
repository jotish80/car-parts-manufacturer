import React from 'react';
import error from '../../assets/images/ErrorPage404-04.jpg';

const NotFound = () => {

    const myStyle = {
        backgroundImage:
            `url(${error})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        opacity: '0.8'  
    };

    return (
        <div style={myStyle} >
             
        </div>
    );
};

export default NotFound;