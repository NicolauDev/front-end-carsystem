// import React from "react";
// import useForm from "./useForms";
// import validarInfoCadastroPF from "./validarInfoCadastroPF";
// import './Form.css'

// const FormCadastroPJ = (submitForm) => {
//     const{handleChange,values,handleSubmit,errors} = useForm(submitForm,validarInfoCadastroPF);

//     return(
//         <div className='form-content-right'>
//             <form className='form' onSubmit={handleSubmit}>
//                 <h1>Cadastre-se</h1>
//                 <div className='form-inputs'>
//                     <label htmlFor='nome' 
//                     className='form-label'>
//                         Nome: 
//                     </label>
//                     <input 
//                         id='nome'
//                         type='text' 
//                         name='nome' 
//                         className='form-input'
//                         placeholder='Nome'
//                         value={values.nome}
//                         onChange={handleChange}
//                     />   
//                     {errors.nome && <p>{errors.nome}</p>}
//                 </div>
//                 <div className='form-inputs'>
//                     <label htmlFor='cnpj' 
//                     className='form-label'>
//                         CNPJ: 
//                     </label>
//                     <input 
//                         id='cnpj'
//                         type='number' 
//                         name='cnpj' 
//                         className='form-input'
//                         placeholder='CNPJ'
//                         value={values.cnpj}
//                         onChange={handleChange}
//                     />   
//                     {errors.cnpj && <p>{errors.cnpj}</p>}
//                 </div>
//                 <div className='form-inputs'>
//                     <label htmlFor='email' 
//                     className='form-label'>
//                         E-mail: 
//                     </label>
//                     <input 
//                         id='email'
//                         type='email' 
//                         name='email' 
//                         className='form-input'
//                         placeholder='E-mail'
//                         value={values.email}
//                         onChange={handleChange}
//                     /> 
//                     {errors.email && <p>{errors.email}</p>}  
//                 </div>
//                 <div className='form-inputs'>
//                     <label htmlFor='confirmSenha' 
//                     className='form-label'>
//                         Rua/Número: 
//                     </label>
//                     <input 
//                         id='ruaN'
//                         type='text' 
//                         name='ruaN' 
//                         className='form-input'
//                         placeholder='Rua/Número'
//                         value={values.ruaN}
//                         onChange={handleChange}
//                     />   
//                     {errors.ruaN && <p>{errors.ruaN}</p>}
//                 </div>
//                 <div className='form-inputs'>
//                     <label htmlFor='confirmSenha' 
//                     className='form-label'>
//                         Bairro: 
//                     </label>
//                     <input 
//                         id='bairro'
//                         type='text' 
//                         name='bairro' 
//                         className='form-input'
//                         placeholder='Bairro'
//                         value={values.bairro}
//                         onChange={handleChange}
//                     />   
//                     {errors.bairro && <p>{errors.bairro}</p>}
//                 </div>
//                 <div className='form-inputs'>
//                     <label htmlFor='senha' 
//                     className='form-label'>
//                         Senha: 
//                     </label>
//                     <input 
//                         id='senha'
//                         type='password' 
//                         name='senha' 
//                         className='form-input'
//                         placeholder='Senha'
//                         value={values.senha}
//                         onChange={handleChange}
//                     /> 
//                     {errors.senha && <p>{errors.senha}</p>}
//                 </div>
//                 <div className='form-inputs'>
//                     <label htmlFor='confirmSenha' 
//                     className='form-label'>
//                         Confirmar Senha: 
//                     </label>
//                     <input 
//                         id='confirmSenha'
//                         type='password' 
//                         name='confirmSenha' 
//                         className='form-input'
//                         placeholder='Confirmar senha'
//                         value={values.confirmSenha}
//                         onChange={handleChange}
//                     />   
//                     {errors.confirmSenha && <p>{errors.confirmSenha}</p>}
//                 </div>
//                 <button className='form-input-btn' type='submit'>
//                     Cadastrar
//                 </button>
//                 <span className='form-input-login'>
//                     Já possui cadastro? <a href='#'>Clique aqui.</a>
//                 </span>
//             </form>
//         </div>
//     );
// };

// export default FormCadastroPJ;