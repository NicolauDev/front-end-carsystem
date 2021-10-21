import React from 'react'

function modalGaragem() {
    return (
        <div className="modalBakcground">
            <div className="modalContainer">
                <button>X</button>
                <div className="tittle">
                    <h1>Você prentender vende algum carro?</h1>
                </div>
                <div className="body">
                    <p>Caso sim ok, caso não, cancel</p>
                </div>
                <div className="footer">
                    <button>Sim</button>
                    <button>Não</button>
                </div>
            </div>
        </div>
    );
}

export default modalGaragem
