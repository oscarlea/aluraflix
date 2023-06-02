import styled from "styled-components"
import { textoClaro, amarillo, fondoOscuro } from "./variables";
import { MdAddCircle, MdArrowCircleLeft, MdFiberManualRecord } from "react-icons/md";
import { TiDelete } from "react-icons/ti";



export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    max-width: 1440px;
    padding: 2rem;
    gap: 2rem;
    background-color: ${({ theme }) => theme.body};
`

export const LogoContainer = styled.div`
    background-color: ${amarillo};
    border-radius: 10px;
`;

export const Logo = styled.img`
    width: 169px;
    height: 40px;
    margin: 10px;
`;

export const TituloVideo = styled.h3`
/*     color: ${textoClaro}; */
    color: ${({ theme }) => theme.text};
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

export const TituloAutor = styled.h3`
    color: ${({ theme }) => theme.text};
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 400;
    text-decoration: none;
`

export const TituloCategoria = styled.h3`
    color: ${({ theme }) => theme.text};
    font-size: 2.5rem;
    line-height: 2.2rem;
    font-weight: 500;
    white-space: normal;
`

export const DescripcionCategoria = styled.h2`
    color: ${({ theme }) => theme.text};
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 400;
`

export const StyledCategoria = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	padding: 2rem;
	gap: 2rem;
	background-color: ${props => props.bgcolor};
`

export const CategoriaEncabezado = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;
    box-sizing: border-box;
    position: relative;
`

export const FormContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    max-width: 1440px;
    background-color: ${({ theme }) => theme.body};
   
    flex-wrap: wrap;
    /* margin: 80px 50px; */
    box-sizing: border-box;
    padding: 2rem 1rem;
`

export const Form = styled.form`
    width: 50%;
    padding-bottom: 30px;
    background-color: #e1dbdb;
    padding: 2rem;
    box-shadow: 1px 1px 2px gray;
`

export const GoBackIcon = styled(MdArrowCircleLeft)`
    color: ${amarillo};
    font-size: 5rem;
    align-self: start;
    margin: 2rem 5rem;
`;

export const Circulo = styled(MdFiberManualRecord)`
    position: absolute; 
    right: 7px; 
    color: black;
    font-size: 5rem;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
`;

export const AddIcon = styled(MdAddCircle)`
    color: ${amarillo};
    font-size: 5rem;
    align-self: end;
    margin: 2rem 5rem;
`;

export const DeleteIcon = styled(TiDelete)`
position: absolute; 
right: 7px; 
color: ${amarillo};
font-size: 5rem;
z-index: 2;
top: 50%;
transform: translateY(-50%);
`;

export const FormatoHeader = styled.h1`
/*     text-decoration: none;
    color: #fff;
    background-color: transparent;
    border: none;
    cursor: pointer; */
    font-size: 2rem;
    font-weight: 400;
    line-height: normal;
    transition: color .25s ease;

    &:hover {
    color: ${amarillo};
  }  
`;


//StyledCategoria.displayName = 'categoria';  // instalar plugin


