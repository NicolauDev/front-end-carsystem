import React from "react";
import { Link } from "react-router-dom";
import './Button.css';

function ButtonContato(){
    return(
        <Link to='contato'>
            <button className='btn'>Contato</button>
        </Link>
    );
}

export default ButtonContato;