import React from 'react';
import './Headers.css'

const Headers = () => {
    return (
        <div>
            <h1>React Rest Countries Example</h1>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/country">Country</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Headers;