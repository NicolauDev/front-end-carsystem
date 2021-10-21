import React from "react";
import { useState } from "react";
import validarInfoCadastro from "./validarInfoCadastro";
import './FormPJ.css';

const FormCadastroPJ = () => {
    // const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validarInfoCadastro);
    return (
        <>
            <div className='form-container'>
                <div className='form-content-right'>
                    <form className='form' >
                        <h1>Garagem</h1>
                        <div className='form-inputs'>
                            <label htmlFor='nome'
                                className='form-label'>
                                Nome da Garagem:
                            </label>
                            <input
                                id='nome'
                                type='text'
                                name='nome'
                                className='form-input'
                                placeholder='Nome'
                            />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='cnpj'
                                className='form-label'>
                                CNPJ:
                            </label>
                            <input
                                id='cnpj'
                                type='text'
                                name='cnpj'
                                className='form-input'
                                placeholder='CNPJ'
                            />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='cep'
                                className='form-label'>
                                CEP:
                            </label>
                            <input
                                id='cep'
                                type='text'
                                name='cep'
                                className='form-input'
                                placeholder='CEP'
                            />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='cnpj'
                                className='form-label'>
                                Cidade:
                            </label>
                            <input
                                id='cidade'
                                type='text'
                                name='cidade'
                                className='form-input'
                                placeholder='Cidade'
                            />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='estado'
                                className='form-label'>
                                Estado:
                            </label>
                            <input
                                id='estado'
                                type='text'
                                name='estado'
                                className='form-input'
                                placeholder='Estado'
                            />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='rua'
                                className='form-label'>
                                Rua:
                            </label>
                            <input
                                id='rua'
                                type='text'
                                name='rua'
                                className='form-input'
                                placeholder='Rua'
                            />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='numero'
                                className='form-label'>
                                Número:
                            </label>
                            <input
                                id='numero'
                                type='text'
                                name='numero'
                                className='form-input'
                                placeholder='Número'
                            />
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='bairro'
                                className='form-label'>
                                Bairro:
                            </label>
                            <input
                                id='bairro'
                                type='text'
                                name='Bairro'
                                className='form-input'
                                placeholder='Bairro'
                            />
                        </div>
                        <button className='form-input-btn' type='submit' >
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormCadastroPJ;