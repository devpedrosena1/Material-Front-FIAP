"use client";

import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  nome : string;
  sobrenome : string;
  email : string;
  senha : string;
  confsenha : string;
  cep : string;
  rua : string;
  numero : string;
  bairro : string;
  cidade : string;
  estado : string;
  ddd : string;
}

export default function Home() {

  const { register, handleSubmit, setFocus, setValue, watch, formState : { errors } } = useForm<FormValues>();

  const onSubmit : SubmitHandler<FormValues> = (data : any) =>{
    // console.log("Formulário submetido com sucesso!");
    console.log(data);
  }

  const senha = watch("senha");
  const cep = watch("cep");

  const buscarCEP = async (cep : string) =>{
    try{
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if(data.erro){
        alert("CEP não encontrado!");
      }
      else{
        setValue("rua", data.logradouro);
        setValue("bairro", data.bairro);
        setValue("cidade", data.localidade);
        setValue("estado", data.uf);
        setValue("ddd", data.ddd);
        setFocus("numero");
      }
    } catch(error){
      alert("Erro ao buscar endereço!" + error);
    }
  }
  useEffect(()=>{
    if(cep && cep.length === 8){
      buscarCEP(cep)
    }
  }, [cep])

  return (
    <>
      <h1>Trabalhando com Hook Forms</h1>

      <form onSubmit={ handleSubmit(onSubmit) }>
        <label>Nome: </label>
        <input {...register("nome", 
          { required : "Campo nome é de preenchimento obrigatório!", 
            minLength : { value : 3, message : "Mínimo de 3 caracteres"}
          }
        )} />
        { errors.nome && <span>{ errors.nome.message }</span> }
        <br/>
        <label>Sobrenome: </label>
        <input {...register("sobrenome", { required : true })} />
        { errors.sobrenome && <span> Campo sobrenome é de preenchimento obrigatório! </span> }
        <br/>

        <label>E-Mail: </label>
        <input {...register("email", 
          { 
            required : "Campo email é de preenchimento obrigatório!",
            pattern : { value : /\S+@\S+\.\S+/,
              message : "E-mail incorreto!"
            }
          }
        )} />
        { errors.email && <span> { errors.email.message} </span> }
        <br/>
        <label>Senha: </label>
        <input type="password"
        {
          ...register("senha",
            {
              required : "Campo senha é de preenchimento obrigatório!",
              minLength : { value : 6, message : "Mínimo de 6 caracteres"},              validate : value =>
                //value === "123456" ? "Senha incorreta!" : true 
                !/[A-Z]/.test(value) ? "Deve conter um caracter maiúsculo!" :
                !/[a-z]/.test(value) ? "Deve conter um caracter minúsculo!" :
                !/[0-9]/.test(value) ? "Deve conter um caracter numérico!" :
                !/[^A-Za-z0-9]/.test(value) ? "Deve conter um símbolo!" :
               true 
            }
          )
        } />
        { errors.senha && <span> { errors.senha.message} </span> }
        <br/>
        <label>Conf Senha: </label>
        <input type="password" {
          ...register("confsenha", {
            required : "Campo confirmação de senha é de preenchimento obrigatório!",
            validate : value => value === senha || "As senhas devem ser iguais!"
          }
        )}/>
        { errors.confsenha && <span> { errors.confsenha.message} </span> }
        <br/>
        <label>CEP:</label>
        <input {...register("cep",
          {
            required : "Campo CEP é de preenchimento obrigatório!",
              pattern : { value : /^[0-9]{8}$/, message : "CEP incorreto!"}
          }
        )} />
        { errors.cep && <span> { errors.cep.message} </span> }
        <br/>
        <label>Logradouro:</label>
        <input { ...register("rua") } readOnly />
        <br/>
        <label>Numero:</label>
        <input { ...register("numero") } />
        <br/>
        <label>Bairro:</label>
        <input { ...register("bairro") } readOnly />
        <br/>
        <label>Cidade:</label>
        <input { ...register("cidade") } readOnly/>
        <br/>
        <label>Estado:</label>
        <input { ...register("estado") } readOnly/>
        <br/>
        <label>DDD:</label>
        <input { ...register("ddd") } readOnly/>
        <br/>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}


