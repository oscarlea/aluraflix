import styled from "styled-components"
import { amarillo } from "./variables";
import { MdArrowCircleLeft } from "react-icons/md";


export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    max-width: 1440px;
    padding: min(2rem, 2vw);
    gap: min(2rem, 2vw);
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

    @media (max-width: 768px) {
        width: 70%;
        height: 70%;
    }  

`;

export const TituloVideo = styled.h3`
    color: ${({ theme }) => theme.text};
    font-size: 2.5rem;
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

export const TituloFormulario = styled.h3`
    color: ${({ theme }) => theme.textForm};
    line-height: 2.2rem;
    white-space: normal;
    text-align: center;
    font-size: 3.5rem;
    padding: 3rem;
    font-weight: 300;

    @media (max-width: 768px) {
        width: 100%;
        padding: 1rem;
        font-size: 2.5rem;
        font-weight: 400;
    }
`

export const StyledCategoria = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	padding: min(2rem, 2vw);
	gap: min(2rem, 2vw);
	background-color: ${props => props.bgcolor};
    border-radius: 4px;
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
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    background-color: ${({ theme }) => theme.body};
    box-sizing: border-box;
    padding: 5rem 0;

    @media (max-width: 768px) {
        width: 100%;
        padding: 2rem 0;
    }
`

export const Form = styled.form`
    width: 50%;
    padding-bottom: 30px;
    background-color: #e1dbdb;
    padding: 2rem ;
    box-shadow: 1px 1px 2px gray;
    
    @media (max-width: 768px) {
        width: 100%;
        padding: 0.5rem;
    }
`

export const GoBackIcon = styled(MdArrowCircleLeft)`
    color: ${amarillo};
    font-size: 5rem;
    align-self: start;
    margin: 2rem 5rem;
`;

/* 
export const Circulo = styled(MdFiberManualRecord)`
    position: absolute; 
    right: 7px; 
    color: black;
    font-size: 5rem;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
`;
 */
/* 
export const AddIcon = styled(MdAddCircle)`
    color: ${amarillo};
    font-size: 5rem;
    align-self: end;
    margin: 2rem 5rem;
`;
 */
/* export const DeleteIcon = styled(TiDelete)`
position: absolute; 
right: 7px;  
color: ${amarillo};
font-size: 5rem;
z-index: 2;
top: 50%;
transform: translateY(-50%);
margin-left: 2rem;
`;
 */
export const FormatoHeader = styled.h1`
    cursor: pointer;
    font-size: 2rem;
    font-weight: 400;
    line-height: normal;
    transition: color .25s ease;

    &:hover {
    color: ${amarillo};
  }  
`;
