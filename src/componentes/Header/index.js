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

function Header({ videos, ...props }) {
    const navigate = useNavigate();

    const heandleClick = () => {
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
                            tema={props.tema}
                            toggleTheme={props.toggleTheme}
                            cambiarMostrar={props.cambiarMostrar} 
                            cambiarMostrarVideos={props.cambiarMostrarVideos}
                            mostrarFormVideos={props.mostrarFormVideos}
                            mostrarFormCategorias={props.mostrarFormCategorias} 
                            videos={videos}
                            />

        </HeaderContainer >
    );
}

export default Header;
