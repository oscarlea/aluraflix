import styled from "styled-components"
import { textoClaro, amarillo } from "./variables";


export const LogoContainer = styled.div`
    background-color: ${amarillo};
    border-radius: 10px;
`;

export const Logo = styled.img`
    width: 169px;
    height: 40px;
    margin: 10px;
`;

export const StyledTituloVideo = styled.h3`
    color: ${textoClaro};
    font-size: 1.6rem;
    line-height: 2.2rem;
    font-weight: 500;
    overflow: hidden;
    max-height: 4.4rem;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: normal;
    text-decoration: none;
`

export const StyledTituloAutor = styled.h3`
    color: ${textoClaro};
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 400;
    text-decoration: none;
`

export const StyledTituloCategoria = styled.h3`
    color: ${textoClaro};
    font-size: 2.5rem;
    line-height: 2.2rem;
    font-weight: 500;
    white-space: normal;
`

export const StyledDescripcionCategoria = styled.h2`
    color: ${textoClaro};
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 400;
`

export const StyledCategoria = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	padding: 1rem;
	gap: 1rem;
	background-color: ${props => props.bgcolor};
`

export const StyledboxFormulario = styled.section`
    display: flex;
    justify-content: space-evenly;

    width: 100%;
    max-width: 1440px;
    background-color: #000;
   
    flex-wrap: wrap;
    /* margin: 80px 50px; */
    box-sizing: border-box;
    padding: 2rem 1rem;
`

export const StyledForm = styled.form`
    width: 50%;
    padding: 11px;
    padding-bottom: 30px;
`


//StyledCategoria.displayName = 'categoria';  // instalar plugin


