import styled from "styled-components";
import {useNavigate} from "react-router-dom";

export default function UserArea(){
    const navigate = useNavigate();
    return(
        <Container>
            <MyCatsBox onClick={()=> navigate('/user/cats')}> Meus Gatos</MyCatsBox>
            <MyFormsBox onClick={()=> navigate('/user/forms')}> Meus Formulários</MyFormsBox>
        </Container>
    );
};

const Container = styled.div``;
const MyCatsBox = styled.div``;
const MyFormsBox = styled.div``;