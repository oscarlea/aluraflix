import { Link } from "react-router-dom";
import styled from "styled-components"
import { fondoOscuro } from "../../UI/variables";
import { Logo, LogoContainer } from "../../UI"

const StiledHeader = styled.header`
    display: flex;
    justify-content: center; 
    align-items: center; 
    background-color: ${fondoOscuro};
    width: 100%;
    max-width: 1440px;
    border-bottom: 2px solid #2a7ae4;
    padding: 1rem;
    box-sizing: border-box;
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
const StyledLink = styled(Link)`
    margin-left: 20px;
    color: #fff;
    text-decoration: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: normal;
    transition: color .25s ease;

    &:hover {
    color: #f5c518;
    /* font-weight: 600; */
  }

`;

function Header(props) {
    return (
        <StiledHeader>

            <div>
                <StyledLink to="/" >
                    <LogoContainer >
                        <Logo src="/img/header-negro.png" alt="AluraFlix" />
                    </LogoContainer>
                </StyledLink>
            </div>

            <div>
                <Nav>
                    <Ul >
                        <li>
                            <StyledLink to="/categorias" >
                                Categorias
                            </StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/videos" >
                                Videos
                            </StyledLink>
                        </li>

                        <li>
                            <button onClick={props.cambiarMostrar}>
                                Nuevo Video
                            </button>
                        </li>

                    </Ul>
                </Nav>
            </div>

        </StiledHeader>
    );
}

export default Header;
