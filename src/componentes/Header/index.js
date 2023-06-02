import SearchBar from "../SearchBar/SearchBar";
import { useNavigate  } from "react-router-dom";
import styled from "styled-components"
import { Logo } from "../../UI"
import { amarillo } from "../../UI/variables";
import MenuComponent from "../MenuComponent/MenuComponent";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center; 
    align-items: center; 
    background-color: ${({ theme }) => theme.body};
    width: 100%;
    max-width: 1440px;
    border-bottom: 2px solid #2a7ae4;
    padding: 2rem;
    box-sizing: border-box;
    gap: 2rem;
`

const Container = styled.div`
    background-color: ${amarillo};
    border-radius: 10px;
    display: flex;
    flex-grow: 5;
    position: relative;
    padding: 0 2rem;
`;

const LogoContainer = styled.div`
    flex-direction: 1;
    flex-grow: 1;
`;

function Header({ tema, toggleTheme, mostrarBotonAddCategoria, mostrarFormulario, cambiarMostrar, videos }) {
    const navigate = useNavigate();

    const heandleClick = () => {
        if (mostrarFormulario) {
            cambiarMostrar()
        }
        navigate ("/")
    }


    return (
        <HeaderContainer >

            <Container className="container">

                <LogoContainer className="logolink" >

                     <div onClick={heandleClick}> 
                        <Logo src="/img/header-negro.png" alt="AluraFlix" />
                     </div> 

                </LogoContainer>

                
                <SearchBar videos={videos} />

            </Container>

            <MenuComponent /* mostrarBotonAddCategoria={mostrarBotonAddCategoria}  */
                            mostrarFormulario={mostrarFormulario} 
                            cambiarMostrar={cambiarMostrar} 
                            tema={tema}
                            toggleTheme={toggleTheme}
                            />

        </HeaderContainer >
    );
}

export default Header;
