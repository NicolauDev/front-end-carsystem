import React, {useState} from "react";
import FormCadastro from './FormCadastro';
import FormSuccess from "./FormSuccess";
import './Form.css';

const Form = () => {
    const [isSubmitted,setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                 {!isSubmitted ? (
                <FormCadastro submitForm={submitForm}/> 
                ) : (
                <FormSuccess />
                )}
            </div>  
        </>
    );
};

export default Form;