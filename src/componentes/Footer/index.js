//import "./Footer.css"
import Boton from "../Boton"
import styled from "styled-components"
import { fondoOscuro } from "../../UI/variables";
import { Logo, LogoContainer } from "../../UI"

const StyledFooter = styled.footer`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${fondoOscuro};
    border-top: 2px solid #2A7AE4;
    padding: 11px;
    box-sizing: border-box;
`
//---

function Footer(props) {

    return (

        <StyledFooter>
            <Boton titulo="Nuevo Video" onClick={props.cambiarMostrar} />
            <LogoContainer>
                <Logo src="/img/header-negro.png" alt='AluraFlix' />
            </LogoContainer>
        </StyledFooter>

    )

}

export default Footer