import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { amarillo } from "../UI/variables";
import BotonTema from "./BotonTema";
import { FormatoHeader } from "../UI";
import { VideoDataContext } from "../Context";
import { useContext } from "react";
 
// ...

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    background-color: red;
    border-radius: 10px;
    height: 50px;
    padding: 3rem 0;
`;

const Ul = styled.ul`
    /* gap: min(2rem, 2vw); */
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const Li = styled.li`
    padding: min(2rem, 2vw);;
`

const SLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 400;
    line-height: normal;
    transition: color .25s ease;

    &:hover {
    color: ${amarillo};
  }  
`;


const MenuComponent = () => {

    const videoDataContext = useContext(VideoDataContext)
    const toggleTheme = videoDataContext.toggleTheme
    const cambiarMostrar = videoDataContext.cambiarMostrar
    const cambiarMostrarVideos = videoDataContext.cambiarMostrarVideos
    const tema = videoDataContext.tema

    return (

        <NavContainer>
            <Ul>

                <Li>
                    <SLink to="/categorias" onClick={cambiarMostrar}>
                        Categorias
                    </SLink>
                </Li>

                <Li>
                    <FormatoHeader onClick={cambiarMostrarVideos}>
                        Videos
                    </FormatoHeader>
                </Li>

                
                    <BotonTema tema={tema} toggleTheme={toggleTheme} />
                

            </Ul>
        </NavContainer>

    );
};

export default MenuComponent;
