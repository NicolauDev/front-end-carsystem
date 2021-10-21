import React from "react";
import { Link } from "react-router-dom";
import './Button.css';

function Button() {
    return (
        <Link to='entrar'>
            <button className='btn'>Entrar</button>
        </Link>
    );
}

export default Button;