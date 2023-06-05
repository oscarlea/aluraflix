import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { amarillo } from "../../UI/variables";
import BotonTema from "../BotonTema/BotonTema";
import { FormatoHeader } from "../../UI";



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
    gap: 2rem;
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
`;

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



const MenuComponent = ({ videos, tema, toggleTheme, cambiarMostrar, cambiarMostrarVideos, ...props }) => {

    return (

        <NavContainer>
            <Ul>

                <li>
                    <SLink to="/categorias" onClick={cambiarMostrar}>
                        Categorias
                    </SLink>
                </li>


                <li>
                    <FormatoHeader onClick={cambiarMostrarVideos}>
                        Videos
                    </FormatoHeader>
                </li>

                <BotonTema tema={tema} toggleTheme={toggleTheme} />

            </Ul>
        </NavContainer>

    );
};

export default MenuComponent;

/* 
if (mostrarFormVideos) {
    cambiarMostrarVideos();
}       */

/* 
if (mostrarFormCategorias) {
    cambiarMostrar();
}
if (mostrarFormVideos) {
    cambiarMostrarVideos();
}       */