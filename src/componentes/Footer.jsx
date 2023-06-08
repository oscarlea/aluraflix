import styled from "styled-components"
import { Logo, LogoContainer } from "../UI"

const FooterContainer = styled.footer`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.body};
    border-top: 2px solid #2A7AE4;
    padding: min(2rem, 2vw);
    box-sizing: border-box;
`
//---

function Footer(props) {

    return (

        <FooterContainer>
            <LogoContainer>
                <Logo src="/img/header-negro.png" alt='AluraFlix' />
            </LogoContainer>
        </FooterContainer>

    )

}

export default Footer