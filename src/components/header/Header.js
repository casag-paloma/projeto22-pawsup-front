import { useContext, useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/userContext";

export default function Header(){
    const logo = "https://tinyurl.com/paws-up-logo";
    const navigate = useNavigate();
    const {info} = useContext(UserContext);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(()=>{
        if(info.length > 0) setIsLogged(true)
    }, [])
    return(
        <HeaderStyle>
            {isLogged? <div> Área do Usuário</div>: 
            <div></div>}
            <Logo to={'/'}>
            <img src={logo} alt="Paws Up Logo"/>
            <h1>Paws Up</h1> 
            </Logo>

            <LoginButon onClick={()=> navigate('/signin')}></LoginButon>
            <SignUpButon  onClick={()=> navigate('/signup')}></SignUpButon>


        </HeaderStyle>
    )
};

const HeaderStyle = styled.div``
const Logo = styled(Link)``
const LoginButon = styled.button``
const SignUpButon = styled.button``
