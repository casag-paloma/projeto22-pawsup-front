import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import Header from "./header/Header";
import UserContext from "../contexts/userContext";

export default function SignInPage(){
    const URL = "http://localhost:5000";
    const {setInfo} = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function toRenderForm(){
        return(
            <>
            <FormBox> 
                <label>Email:</label>
                <input type='text' value={email} placeholder="abrigodriven@gmail.com" onChange={e=> setEmail(e.target.value) }/>
                <label>Senha:</label>
                <input type='text' value={password} placeholder="Rua Driven, 55" onChange={e=> setPassword(e.target.value) }/>
                <button onClick={e => submitData(e)}>Quero logar</button>
            </FormBox>
            </>
        )
        
    }
    const form = toRenderForm();

    function submitData(e){
        e.preventDefault();

        const body={
            email,
            password
        };

        const promise = axios.post(`${URL}/signin`, body)
        promise.catch(handleFailure);
        promise.then(handleSucess)
    }

    function handleFailure(err){
        console.log(err);
        alert(`Houve um erro na seu formulário: ${err.response.data} `)
    };

    function handleSucess(res){
        const data = res.data;
        setInfo(data);
        navigate('/');
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
