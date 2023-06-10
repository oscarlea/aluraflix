import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import styled from "styled-components"
import { Logo } from "../UI"
import { amarillo } from "../UI/variables";
import MenuComponent from "./MenuComponent";
import logoImagen from '../assets/header_n.png'

const SHeader = styled.header`
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
    
    @media (max-width: 768px) {
        flex-direction: column;
    }  
`

const Container = styled.div`
    background-color: ${amarillo};
    border-radius: 5px;
    display: flex;
    flex-grow: 5;
    position: relative;
    padding: 0 min(2rem, 2vw);
    height: 50px;
    width: 100%;

`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

     flex-grow: 1; 
`;

function Header() {

    const navigate = useNavigate();
    const heandleClick = () => {
        navigate("/")
    }

    return (
        <SHeader >
            <Container className="container">
                <LogoContainer className="logolink" >
                    <div onClick={heandleClick}   >
                        <Logo src={logoImagen} alt="AluraFlix" />
                    </div>
                </LogoContainer>
                <SearchBar />
            </Container>
            <MenuComponent />
        </SHeader >
    );
}

export default Header;
