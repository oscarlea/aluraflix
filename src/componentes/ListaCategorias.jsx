//import { useState } from 'react'
import { Link } from "react-router-dom"
import FormularioCategorias from './Formulario/formularioCategorias';
//import { StyledCategoria } from "../UI";
import styled from "styled-components"
import { StyledTituloCategoria } from '../UI';
import { MdAddCircle } from "react-icons/md"
import { amarillo } from '../UI/variables';
import { TiDelete } from "react-icons/ti";



const StyledContenedorCategorias = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

const StyledListaCategorias = styled.ul`
    display: flex;
    justify-content: space-evenly;
    padding: 2rem;
    flex-wrap: wrap;
`

const StyledItemListaCategorias = styled.li`
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 2rem;
`

const ContenedorBurbujasCategorias = styled.div`
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

const StyledLinkCategoria = styled(Link)`
    text-decoration: none;
`

const StyleMdAddCircle = styled(MdAddCircle)`
    color: ${amarillo};
    font-size: 5rem;
    align-self: end;
    margin: 2rem 5rem;
`

const StyledTiDelete = styled(TiDelete)`
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: ${amarillo};
    font-size: 4rem;
    z-index: 1;
`

const ListaCategorias = ({ actualizarColor, categorias, agregarNuevaCategoria, botonAddCategoria, cambiarMostrar, mostrarFormulario }) => {

    return (

        <StyledContenedorCategorias className='xzcxzc'>

            <StyledListaCategorias>

                {
                    categorias.map(categoria => (
                        <div style={{ position: "relative"} } >
                           { botonAddCategoria && <StyledTiDelete onClick={console.log(categoria.nombre)}    />}

                            <StyledLinkCategoria to={`/categoria/${categoria.id}`} key={categoria.id}>
                                <ContenedorBurbujasCategorias>
                                    <StyledItemListaCategorias style={{ background: categoria.colorPrimario }}>
                                        <StyledTituloCategoria>
                                            {categoria.nombre}
                                        </StyledTituloCategoria>
                                    </StyledItemListaCategorias>
                                </ContenedorBurbujasCategorias>
                            </StyledLinkCategoria>
                        </div>
                    ))
                }

                {
                    mostrarFormulario && <FormularioCategorias
                        actualizarColor={actualizarColor}
                        agregarNuevaCategoria={agregarNuevaCategoria}
                        cambiarMostrar={cambiarMostrar}
                        mostrarFormulario={mostrarFormulario}
                    />
                }
            </StyledListaCategorias >

            {botonAddCategoria && <StyleMdAddCircle onClick={cambiarMostrar} />}

        </StyledContenedorCategorias>
    )
}

export default ListaCategorias;
