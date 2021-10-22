import React from 'react'
import { useState } from 'react';
import "./modal.css"
import { Link } from 'react-router-dom'


function Modal({ closeModal }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function meuEvento() {

        alert('Usuário cadastrado com sucesso!')
        closeModal(false);

    }
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
                        <p> Você deseja se cadastrar como:</p>
                    </div>
                    <div className="footer">
                        <button onClick={ meuEvento} id="cancelBtn">Padrão</button>
                        <Link className="btn-g" to="/FormCadastroPJ">Garagem</Link>
                        <Link className="btn-pessoaf" to="/FormCadastroPF">Pessoa Física</Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Modal
