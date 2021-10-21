import {useState,useEffect} from 'react';

const useForm = (callback, validarInfoCadastro) => {
    const [values,setValues] = useState({
        nome: '',
        cpf:'',
        email: '',
        senha:'',
        confirmSenha:'',
        cnpj:'',
        rua:'',
        bairro:'',
        mensagem: ''
    });
    const [errors,setErrors] = useState({});
    const [isSubmitting,setIsSubmitting] = useState(false);

    const handleChange = e => {
        const{name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validarInfoCadastro(values));
        setIsSubmitting(true);
    };

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
          }
        },
        [errors]
      );

    return {handleChange, handleSubmit, values, errors};
};

export default useForm;