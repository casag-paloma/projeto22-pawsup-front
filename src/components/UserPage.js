import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom";
import Header from "./header/Header";
import UserCats from "./UserCats";
import UserForms from "./UserForms";


export default function UserPage(){
    //options podem ser cats or forms
    const {options} = useParams();
    const [isACatsPage, setIsACatsPage] = useState(true);
    console.log(options, isACatsPage)

    function checkOptionPage(){
        if(options === 'forms') {
            setIsACatsPage(false);
        };
        if(options === 'cats') {
            setIsACatsPage(true);
        }


    }
    useEffect(()=>{
        checkOptionPage();
    }, [])


    return (
        <>
        <Header/>
        {isACatsPage? <UserCats/> : <UserForms/>}
        </>
    )
}