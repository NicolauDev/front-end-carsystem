import React from 'react'

function modalGaragem() {
    return  <div className="modalBackground"> 
             <div className="modalContainer">
                 <button> X </button>
             <div className="tittle">
                 <h1>Cadastro</h1>
             </div>
             <div className="body">
                 <p>
                     Você irá vender como garagem?
                 </p>
             </div>
             <div className="footer">
                 <button>Não</button>
                 <button>Sim</button>
             </div>
            </div>
            </div>
    
}

export default modalGaragem
