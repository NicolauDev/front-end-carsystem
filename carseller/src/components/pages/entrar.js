import React from "react";
import './entrar.css'

const entrar = () => {
    return(
        <>
            <form className='form-container-entrar'>
                <form className='form-entrar'>
                    <div className='form-inputs-entrar'>
                                <label htmlFor='email' 
                                className='form-label'>
                                    E-mail: 
                                </label>
                                <input 
                                    id='email'
                                    type='email' 
                                    name='email' 
                                    className='form-input-entrar'
                                    placeholder='E-mail'
                                />   
                    </div>
                    <div className='form-inputs-entrar'>
                                <label htmlFor='senha' 
                                className='form-label'>
                                    Senha: 
                                </label>
                                <input 
                                    id='senha'
                                    type='password' 
                                    name='senha' 
                                    className='form-input-entrar'
                                    placeholder='Senha'
                                />   
                    </div>
                    <button className='form-input-btn-entrar' type='submit'>
                        Entrar
                    </button>
                    <span className='form-input-login-esqueceuSenha'>
                        <a href='#'>Esqueceu a senha.</a>
                    </span>
                    <span className='form-input-login-cadastrar'>
                        <a href='#'>Cadastre-se.</a>
                    </span>
                </form>
            </form>
        </>
    );
};
export default entrar;