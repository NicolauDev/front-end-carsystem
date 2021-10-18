import React from "react";
import './contato.css';
import { SocialIcon } from 'react-social-icons';


const contato = () => {
    return(
        <>
        
        <form className='form-container-Cadastro'>
            <form className='form-Cadastro'>
                <div className='form-inputs-Contato'>
                            <label htmlFor='nome' 
                            className='form-label'>
                                Nome: 
                            </label>
                            <input 
                                id='nome'
                                type='text' 
                                name='nome' 
                                className='form-input-Contato'
                                placeholder='Nome'
                            />   
                </div>
                <div className='form-inputs-Contato'>
                    <label htmlFor='email' 
                    className='form-label'>
                        E-mail: 
                    </label>
                    <input 
                        id='email'
                        type='email' 
                        name='email' 
                        className='form-input-Contato'
                        placeholder='E-mail'
                    />   
                </div>
                <div className='form-inputs-Contato'>
                    <label htmlFor='telefone' 
                    className='form-label'>
                        Telefone (somente números): 
                    </label>
                    <input 
                        id='telefone'
                        type='number' 
                        name='telefone' 
                        className='form-input-Contato'
                        placeholder='Telefone'
                    />   
                </div>
                <div className='form-inputs-Contato'>
                    <label htmlFor='mensagem' 
                    className='form-label'>
                        Mensagem: 
                    </label>
                    <input 
                        id='mensagem'
                        type='text' 
                        name='mensagem' 
                        className='form-input-Contato-mensagem'
                        placeholder='Mensagem'
                    />   
                </div>
                <button className='form-input-btn-contato' type='submit'>
                    Enviar
                </button>
            </form>
            
        </form>
        <form className='form-dados'>
            <div className='form-text-dados'>
                
                <label className='Dados'>Dados</label>
                <label className='telefone'>-(99) 9999-9999</label>
                <label className='email'>-contato@carsystem.com</label>
                <label className='city'>-Taquaritinga - SP</label>
                <label className='redes'>Redes Sociais</label>
                <SocialIcon className='icon-facebook' url="https://facebook.com/jaketrent"/>
                <SocialIcon className='icon-instagram' url="https://instagram.com/jaketrent"/>
                <SocialIcon className='icon-twitter' url="https://whatsapp.com/jaketrent"/>
            </div>
        </form>
        
        </>
    );  
};
export default contato;