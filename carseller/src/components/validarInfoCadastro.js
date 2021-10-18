export default function validarInfoCadastro(values){
    let errors ={}
    if(!values.nome.trim()){
        errors.nome = 'É necessário informar o nome'
    }
    //CPF
    if(!values.cpf){
        errors.cpf = 'É necessário informar o celular'
    }
    //E-mail
    if(!values.email){
        errors.email = 'É necessário informar o e-mail'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Endereço de e-mail inválido'
    }
    // Senha
    if(!values.senha){
        errors.senha = 'É necessário informar a senha'
    } else if (values.senha.length < 6) {
        errors.senha = 'É necessário pelo menos 6 caracters'
    }
    // Confirmar senha
    if(!values.confirmSenha){
        errors.confirmSenha = 'É necessário confirmar a senha'
    } else if (values.confirmSenha !== values.senha){
        errors.confirmSenha = 'As senhas não correspondem'
    }
    // Pessoa Juridica
    // CNPJ
    if(!values.cnpj){
        errors.cnpj = 'É necessário informar o CNPJ'
    }
    // Rua, numero
    if(!values.ruaN){
        errors.ruaN = 'É necessário informar a rua'
    }

    //Bairro
    if(!values.bairro){
        errors.bairro = 'É necessário informar o bairro'
    }

     //Mensagem
     if(!values.mensagem){
        errors.mensagem = 'É necessário informar uma mensagem'
    }
    
    return errors;
}