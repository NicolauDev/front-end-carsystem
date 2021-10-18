import React from "react";
import { useState } from "react";
import useForm from "./useForms";
import validarInfoCadastro from "./validarInfoCadastro";
import './Form.css'
import Modal from './modal';
import "./modal.css";


const FormCadastro = (submitForm) => {
    const [openModal, setOpenModal] = useState(false)
    const{handleChange,values,handleSubmit,errors} = useForm(submitForm,validarInfoCadastro);
    

    return(
        <>
        
        <div className='form-content-right'>
        
            <form className='form' onSubmit={handleSubmit}>
            {openModal && <Modal closeModal={setOpenModal} />}
                <h1>Cadastre-se</h1>
                <div className='form-inputs'>
                    <label htmlFor='nome' 
                    className='form-label'>
                        Nome: 
                    </label>
                    <input 
                        id='nome'
                        type='text' 
                        name='nome' 
                        className='form-input'
                        placeholder='Nome'
                        value={values.nome}
                        onChange={handleChange}
                    />   
                    {errors.nome && <p>{errors.nome}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='celular' 
                    className='form-label'>
                        Celular: 
                    </label>
                    <input 
                        id='cpf'
                        type='number' 
                        name='cpf' 
                        className='form-input'
                        placeholder='Celular'
                        value={values.cpf}
                        onChange={handleChange}
                    />   
                    {errors.cpf && <p>{errors.cpf}</p>}
                </div> 
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
                        value={values.email}
                        onChange={handleChange}
                    /> 
                    {errors.email && <p>{errors.email}</p>}  
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
                        value={values.senha}
                        onChange={handleChange}
                    /> 
                    {errors.senha && <p>{errors.senha}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='confirmSenha' 
                    className='form-label'>
                        Confirmar Senha: 
                    </label>
                    <input 
                        id='confirmSenha'
                        type='password' 
                        name='confirmSenha' 
                        className='form-input'
                        placeholder='Confirmar senha'
                        value={values.confirmSenha}
                        onChange={handleChange}
                    />   
                    {errors.confirmSenha && <p>{errors.confirmSenha}</p>}
                </div>
                <button className='form-input-btn' type='submit' onClick={() => {
                                                   setOpenModal(true);
                                                   }} >
                    Cadastrar
                </button>
                
                <span className='form-input-login'>
                    Já possui cadastro? <a href='#'>Clique aqui.</a>
                </span>
               
            </form>
            
        </div>
        
        </>
    );
};

export default FormCadastro;