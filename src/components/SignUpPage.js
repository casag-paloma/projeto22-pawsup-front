import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "./header/Header";

export default function SignUpPage(){
    const URL = "http://localhost:5000";
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    function toRenderForm(){
        return(
            <>
            <FormBox> 
                <label> Nome Completo:</label>
                <input type='text' value={name} placeholder="Abrigo Driven" onChange={e=> setName(e.target.value) }/>
                <label>Email:</label>
                <input type='text' value={email} placeholder="abrigodriven@gmail.com" onChange={e=> setEmail(e.target.value) }/>
                <label>Número de Telefone:</label>
                <input type='text' value={phoneNumber} placeholder=" 21 9XXXX-XXXX" onChange={e=> setPhoneNumber(e.target.value) }/>
                <label>Senha:</label>
                <input type='text' value={password} placeholder="Rua Driven, 55" onChange={e=> setPassword(e.target.value) }/>
                <button onClick={e => submitData(e)}>Quero me cadastradar</button>
            </FormBox>
            </>
        )
        
    }
    const form = toRenderForm();

    function submitData(e){
        e.preventDefault();

        const body={
            name,
            email,
            phoneNumber,
            password
        };

        const promise = axios.post(`${URL}/signup`, body)
        promise.catch(handleFailure);
        promise.then(handleSucess)
    }

    function handleFailure(err){
        console.log(err);
        alert(`Houve um erro na seu formulário: ${err.response.data} `)
    };

    function handleSucess(){
        alert('Seu cadastro foi feito com sucesso!');
        navigate('/signin');
    }
    return(
        <Container>
            <Header/>
            {form}
        </Container>
    );
};


const Container = styled.div``
const FormBox = styled.form``
