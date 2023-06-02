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
    text-decoration: none;
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


const MenuComponent = ({ tema, toggleTheme, cambiarMostrar }) => {


    return (

        <NavContainer>
            <Ul>

                <li>
                    <SLink to="/categorias" onClick={cambiarMostrar}>
                        Categorias
                    </SLink>
                </li>

                <li>
                    <SLink to="/videos">
                        Videos
                    </SLink>
                </li>

                <BotonTema tema={tema} toggleTheme={toggleTheme} />

            </Ul>
        </NavContainer>

    );
};

export default MenuComponent;
