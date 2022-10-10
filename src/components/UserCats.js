import axios from "axios";
import styled from "styled-components"
import {useNavigate} from "react-router-dom"
import { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/userContext";

export default function UserCats(){
    
    const URL = "http://localhost:5000";
    const {info} = useContext(UserContext);
    const token = info;
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
    
    console.log(info, config);
    const [catData, setCatData] = useState([]);
    const navigate = useNavigate();

    async function fecthData(){
        try {
            const cat = await axios.get(`${URL}/user/cats`, config);
            setCatData(cat.data);
        } catch (error) {
            console.log(error.response.statusText)
        };
    };
    
    useEffect(()=>{
        fecthData();
    }, []);

    function renderCat(){
        console.log(catData);
        return(
            <>
            {catData.map((e, index) => {
                return(
                    <CatBox> 
                        <img src={e.imageUrl} alt={e.name}/>
                    </CatBox>
                )
            })}  

            </>
        );
    }
    
    const catList = renderCat();
    
    return(
        <>
        <Title>Meus Gatos</Title>
        <button onClick={()=> navigate('/user/cats/new')}> Adicionar gatos </button>
        {catList}
        </>
    )
}

const CatBox = styled.div``
const Title = styled.div``