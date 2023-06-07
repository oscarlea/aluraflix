import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { Logo } from "../UI"
import { amarillo } from "../UI/variables";
import MenuComponent from "./MenuComponent";


const HeaderContainer = styled.header`
    display: flex;
    justify-content: center; 
    align-items: center; 
    background-color: ${({ theme }) => theme.body};
    width: 100%;
    max-width: 1440px;
    border-bottom: 2px solid #2a7ae4;
    padding: min(2rem, 2vw);
    box-sizing: border-box;
    gap: min(2rem, 2vw);
`

const Container = styled.div`
    background-color: ${amarillo};
    border-radius: 10px;
    display: flex;
    flex-grow: 5;
    position: relative;
    padding: 0 min(2rem, 2vw);
`;

const LogoContainer = styled.div`
    flex-direction: 1;
    flex-grow: 1;
`;

function Header() {

    const navigate = useNavigate();

    const heandleClick = () => {
        navigate("/")
    }


    return (
        <HeaderContainer >
            <Container className="container">
                <LogoContainer className="logolink" >
                    <div onClick={heandleClick}>
                        <Logo src="/img/header-negro.png" alt="AluraFlix" />
                    </div>
                </LogoContainer>
                <SearchBar />
            </Container>
            <MenuComponent />
        </HeaderContainer >
    );
}

export default Header;
