import styled from "styled-components";
import {useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./header/Header";

export default function CatPage(){
    const {catId} = useParams();
    console.log(catId);
    const URL = "http://localhost:5000";
    const [catData, setCatData] = useState([]);
    const navigate = useNavigate();

    async function fecthData(){
        try {
            const cat = await axios.get(`${URL}/cats/${catId}`);
            setCatData(cat.data);
        } catch (error) {
            console.log(error.message)
        };
    };
    
    useEffect(()=>{
        fecthData();
    }, []);

    function renderCat(){
        console.log(catData);
        return(
            <>
            <CatBox> 
                <img src={catData.imageUrl} alt={catData.name}/>
            </CatBox>
            </>
        )
        
    }
    const toRenderCat = renderCat();

    function goToFormFunction(catId){
        navigate(`/forms/${catId}`)
    }
    return(
        <Container>
            <Header/>
            {toRenderCat}
            <button onClick={()=> goToFormFunction(catData.id)}> Tenho interesse</button>
        </Container>
    );
};


const Container = styled.div``
const CatBox = styled.div``
