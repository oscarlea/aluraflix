import { useState } from 'react'
import { Link } from "react-router-dom"
import FormularioCategorias from './Formulario/formularioCategorias';
import { StyledCategoria } from "../UI";
import styled from "styled-components"
import { StyledTituloCategoria } from '../UI';


const StyledContenedorCategorias = styled.div`
    width: 100%;
    box-sizing: border-box;
`

const StyledListaCategorias = styled.ul`
display: flex;
justify-content: space-evenly;
padding: 2rem;
flex-wrap: wrap;
`
const StyledItemListaCategorias = styled.li`
/*     background-color: red;
    color: white; */
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

const ListaCategorias = ({ actualizarColor, categorias, agregarNuevaCategoria }) => {

    const [mostrarFormCategorias, setMostrar] = useState(false)
    const toggleMostrarFormulario = () => {  // Estado para mostrar/ocultar el formulario de categorías.
        setMostrar(!mostrarFormCategorias)
    }

    return (

        <StyledContenedorCategorias>

            <StyledListaCategorias>
                <button onClick={toggleMostrarFormulario}>Agregar Categoría</button>
                {
                    categorias.map(categoria => (
                        <StyledLinkCategoria to={`/categoria/${categoria.id}`} key={categoria.id}>
                            <ContenedorBurbujasCategorias>
                                <StyledItemListaCategorias style={{ background: categoria.colorPrimario }}>
                                    <StyledTituloCategoria>
                                        {categoria.nombre}
                                    </StyledTituloCategoria>
                                </StyledItemListaCategorias>
                            </ContenedorBurbujasCategorias>
                        </StyledLinkCategoria>
                    ))
                }

                {
                    mostrarFormCategorias && <FormularioCategorias actualizarColor={actualizarColor} agregarNuevaCategoria={agregarNuevaCategoria} />
                }
            </StyledListaCategorias >

        </StyledContenedorCategorias>
    )
}

export default ListaCategorias;
