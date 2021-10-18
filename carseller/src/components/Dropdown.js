{/*// import React from 'react';
import React, {useState} from 'react';
import {cadastrarDropdown} from './NavItems';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown(){
    const [dropdown, setDropdown] = useState (false);
    return(
        <>
            <ul 
            className={dropdown ? 'cadastrar-submenu clicked':'cadastrar-submenu'} 
            onClick={() => setDropdown(!dropdown)}
            >
                {cadastrarDropdown.map((item) => {
                    return(
                        <li key={item.id}>
                            <Link 
                            to={item.path} 
                            className={item.cName} 
                            onClick={() => setDropdown(false)}
                            > 
                            {item.title}     
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Dropdown;*/}