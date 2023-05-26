import { NavLink } from "react-router-dom";
import styled from "styled-components"
import { fondoOscuro  } from "../../UI/variables";
import { Logo, LogoContainer } from "../../UI"
import SearchBar from "../SearchBar/SearchBar";

const StiledHeader = styled.header`
    display: flex;
    justify-content: center; 
    align-items: center; 
    background-color: ${fondoOscuro};
    width: 100%;
    max-width: 1440px;
    border-bottom: 2px solid #2a7ae4;
    padding: 2rem;
    box-sizing: border-box;
    gap: 1rem;
`

const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
`
const Ul = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
`
const StyledItem = styled.div`
    margin-left: 20px;
    color: #fff;
    text-decoration: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: normal;
    transition: color .25s ease;

    &:hover {
    color: #f5c518;
    /* font-weight: 600; */
  }
`

const StyledBoxLogo = styled.div`
    flex-grow: 5;
    position: relative;
    
`;

const StyleBoxMenu = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    background-color: red;
    border-radius: 10px;
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
`



function Header({ cambiarMostrar, MostrarBotonAddCategoria, cambiarMostrarBotonAddCategoria }) {
    return (
        <StiledHeader>

            <StyledBoxLogo>

                <SearchBar className="ñlkl" />

                <StyledNavLink to="/" >
                    <LogoContainer >
                        <Logo src="/img/header-negro.png" alt="AluraFlix" />
                    </LogoContainer>
                </StyledNavLink>

            </StyledBoxLogo>

            <StyleBoxMenu>
                <Nav>
                    <Ul >
                        <li>
                            <StyledNavLink to="/categorias" onClick={MostrarBotonAddCategoria}>
                                <StyledItem>
                                    Categorias
                                </StyledItem>
                            </StyledNavLink>
                        </li>
                        <li>
                            <StyledNavLink to="/videos" >
                                <StyledItem>
                                    Videos
                                </StyledItem>
                            </StyledNavLink>
                        </li>

{/*                         <li>
                            <button onClick={cambiarMostrar}>
                                Nuevo Video
                            </button>
                        </li> */}

                    </Ul>
                </Nav>
            </StyleBoxMenu>

        </StiledHeader>
    );
}

export default Header;
