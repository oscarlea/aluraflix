//import "./Footer.css"
//import Boton from "../Boton"
import styled from "styled-components"
import { Logo, LogoContainer } from "../../UI"

const FooterContainer = styled.footer`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.body};
    border-top: 2px solid #2A7AE4;
    padding: 2rem;
    box-sizing: border-box;
`
//---

function Footer(props) {

    return (

        <FooterContainer>
            {/* <Boton titulo="Nuevo Video" onClick={props.cambiarMostrar} /> */}
            <LogoContainer>
                <Logo src="/img/header-negro.png" alt='AluraFlix' />
            </LogoContainer>
        </FooterContainer>

    )

}

export default Footer