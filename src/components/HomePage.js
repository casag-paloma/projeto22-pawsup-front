import styled from "styled-components";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function HomePage(){

    const URL = "http://localhost:5000";
    const [catList, setCatList] = useState([]);

    async function fecthData(){
        try {
            const cats = await axios.get(`${URL}/cats`);
            setCatList(cats.data);
        } catch (error) {
            console.log(error.message)
        };
    };
    
    useEffect(()=>{
        fecthData();
    }, []);

    function renderCats(){
        console.log(catList)
        return(
            <>
            {catList.map((e, index) => <Cats key={index} id={e.id} name={e.name} image={e.imageUrl}/>)}
            </>
        )
    }

    const toRenderCats = renderCats();
    return(
        <Container>
            <Header>
            <h1> Bem vindo ao Paws UP</h1>
            <h5> Escolha um aumiguinho e entre em contato com o abrigo para fazer sua audoção</h5>
            </Header>
            {toRenderCats}
            
        </Container>
    );
};

function Cats({id, name, image}){

return(
    <CatBox>
        <Link to={`/cats/${id}`} >
            <img src={`${image}`} alt={`${name}`}/>
            <div> ${name}</div>
        </Link>  
    </CatBox>
);
};


const Container = styled.div``
const Header = styled.div``
const CatBox = styled.div``
