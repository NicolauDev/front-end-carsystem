import React from 'react'
import { useState } from 'react';
import "./modal.css"
import modalGaragem from "./modalGaragem";


function modal({closeModal}) {
    const [] = useState(false)
    return (
        <>
        
                <div className="modalBackground">
                <div className="modalContainer">
                    <div className="tittleCloseBtn">
                        <button onClick={() => closeModal(false)}> X </button>
                    </div>
                    <div className="tittle">
                        <h1>Cadastro de usuario</h1>
                    </div>
                    <div className="body">
                    <p>Você pretende vender algum carro?</p>
                    </div>
                    <div className="footer">
                        <button onClick={() => closeModal(false)} id="cancelBtn">Não</button>
                        <button>Sim</button>
                    </div>
                </div> 
                <modalGaragem />
            </div>
            
            </>
    );  
};

export default modal
