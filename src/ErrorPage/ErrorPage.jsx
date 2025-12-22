import React from 'react';
import errorimage from '../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div>
        <h3><img src={errorimage} alt="" /></h3>
        </div>
    );
};

export default ErrorPage;