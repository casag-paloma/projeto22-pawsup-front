import styled from "styled-components";
import {useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FormPage(){
    const {catId} = useParams();
    const URL = "http://localhost:5000";
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState("");

    function toRenderForm(){
        return(
            <>
            <FormBox> 
                <label> Nome Completo:</label>
                <input type='text' value={fullName} placeholder="Maria da Silva" onChange={e=> setFullName(e.target.value) }/>
                <label>Email:</label>
                <input type='text' value={email} placeholder="maria@gmail.com" onChange={e=> setEmail(e.target.value) }/>
                <label>Número de Telefone:</label>
                <input type='text' value={phoneNumber} placeholder=" 21 9XXXX-XXXX" onChange={e=> setPhoneNumber(e.target.value) }/>
                <label>Idade:</label>
                <input type='number' value={age} placeholder="20" onChange={e=> setAge(e.target.value) }/>
                <label>Endereço:</label>
                <input type='text' value={address} placeholder="Rua Driven, 55" onChange={e=> setAddress(e.target.value) }/>
                <button onClick={e => submitData(e)}>Quero enviar meus dados para o abrigo responsável</button>
            </FormBox>
            </>
        )
        
    }
    const form = toRenderForm();

    function submitData(e){
        e.preventDefault();

        const body={
            applicantFullName: fullName,
            applicantEmail: email,
            applicantPhoneNumber: phoneNumber,
            applicantAge: age,
            applicantAddress: address
        };

        const promise = axios.post(`${URL}/forms/${catId}`, body)
        promise.catch(handleFailure);
        promise.then(handleSucess)
    }

    function handleFailure(err){
        console.log(err);
        alert(`Houve um erro na seu formulário: ${err.response.data} `)
    };

    function handleSucess(){
        alert('Seu formulário foi entregue com sucesso! O abrigo em questão entrará em contato pelo whatsapp em breve');
        navigate('/');
    }
    return(
        <Container>
            {form}
        </Container>
    );
};


const Container = styled.div``
const FormBox = styled.form``
