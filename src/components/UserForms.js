import axios from "axios";
import styled from "styled-components"
import { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/userContext";

export default function UserForms(){
    
    const URL = "http://localhost:5000";
    const {info} = useContext(UserContext);
    const  token = info;
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
    const [formsData, setFormsData] = useState([]);

    async function fecthData(){
        try {
            const forms = await axios.get(`${URL}/forms`, config);
            const validForms = (forms.data).filter((e, index) => e.form.length > 0);
            const allForm = [];
            validForms.forEach(cat => 
                cat.forEach(e => allForm.push(e))
            );
            console.log(allForm);
            setFormsData(validForms);
        } catch (error) {
            console.log(error.response.statusText)
        };
    };
    
    useEffect(()=>{
        fecthData();
    }, []);

    function renderCat(){
        console.log(formsData);
        

        if(formsData.length > 0)
        return(
            <>
            {formsData.forEach((cat, index) => console.log(cat.form, index))}
            </>

            //{formsData.forEach((e,index) => console.log(e))
               // (cat,index) => cat.map(
               //     (e, index) =>  
               //         <Form key={index} catName ={e.cat.name} applicantFullName ={e.applicantFullName} applicantEmail = {e.applicantEmail} applicantPhoneNumber = {e.applicantPhoneNumber} applicantAge = {e.applicantAge} applicantAddress = {e.applicantAddress}/>
            //}
        )
        else return<></>
    }
    
    const formList = renderCat();
    
    return(
        <>
        <Title>Meus Formulários</Title>
        {formList}
        </>
    )
}

function Forms({forms}){

    return(
        <>
        {forms.map((e, index) => console.log(index, e))}
        </>
    )
}

function Form({catName, applicantFullName, applicantEmail, applicantPhoneNumber, applicantAge, applicantAddress}) {
    return(
        <FormBox> 
            <h1>{applicantFullName} </h1>
        </FormBox>
    )
}

const FormBox = styled.div``
const Title = styled.div``