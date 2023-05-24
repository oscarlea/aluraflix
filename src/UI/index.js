import styled from "styled-components"
import { textoClaro } from "./variables";


export const LogoContainer = styled.div`
    background-color: #f5c518;
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
//StyledCategoria.displayName = 'categoria';  // instalar plugin


