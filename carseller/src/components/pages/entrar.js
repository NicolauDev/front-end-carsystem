import React from "react";
import './entrar.css'

const entrar = () => {
    return(
        <>
            <div className='form-container'>
               <div className='form-content-right'>
                    <form className='form'>
                        <div className='form-inputs'>
                                    <label htmlFor='email' 
                                    className='form-label'>
                                        E-mail: 
                                    </label>
                                    <input 
                                        id='email'
                                        type='email' 
                                        name='email' 
                                        className='form-input'
                                        placeholder='E-mail'
                                    />   
                        </div>
                        <div className='form-inputs'>
                                    <label htmlFor='senha' 
                                    className='form-label'>
                                        Senha: 
                                    </label>
                                    <input 
                                        id='senha'
                                        type='password' 
                                        name='senha' 
                                        className='form-input'
                                        placeholder='Senha'
                                    />   
                        </div>
                        <button className='form-input-btn' type='submit'>
                            Entrar
                        </button>
                        <span className='form-input-login-esqueceuSenha'>
                            <a href='#'>Esqueceu a senha.</a>
                        </span>
                        <span className='form-input-login-cadastrar'>
                            <a href='#'>Cadastre-se.</a>
                        </span>
                    </form>
                </div>
            </div>
        </>
    );
};
export default entrar;