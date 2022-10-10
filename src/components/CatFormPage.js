import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import { useState,useContext } from "react";
import axios from "axios";
import Header from "./header/Header";
import UserContext from "../contexts/userContext";

export default function CatFormPage(){
    const URL = "http://localhost:5000";
    const {info} = useContext(UserContext);
    const token = info;
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    //const [age, setAge] = useState("");
    //const [genre, setGenre] = useState("");
    //const [description, setDescription] = useState("");

    function toRenderForm(){
        return(
            <>
            <FormBox> 
                <label> Nome do Animal:</label>
                <input type='text' value={name} placeholder="Pitucha" onChange={e=> setName(e.target.value) }/>
                <label>Url da Imagem do Animal:</label>
                <input type='text' value={imageUrl} placeholder="https://..." onChange={e=> setImageUrl(e.target.value) }/>
                <button onClick={e => submitData(e)}>Quero enviar os daoos do novo gato(a)</button>
            </FormBox>
            </>
        )
        
    }
    const form = toRenderForm();

    function submitData(e){
        e.preventDefault();

        const body={
            name,
            imageUrl
        };

        const promise = axios.post(`${URL}/cats`, body, config)
        promise.catch(handleFailure);
        promise.then(handleSucess)
    }

    function handleFailure(err){
        console.log(err);
        alert(`Houve um erro na seu formulário: ${err.response.data} `)
    };

    function handleSucess(){
        alert('Seu formulário foi entregue com sucesso! Seu gatinho já está no sistema');
        navigate('/user/cats');
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
