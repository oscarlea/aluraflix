import { Link, useNavigate, useLocation } from "react-router-dom";
import FormularioCategorias from './Formulario/formularioCategorias';
import styled from "styled-components";
import { Circulo, DeleteIcon, GoBackIcon } from "../UI";
import Container from "@mui/material/Container";
//import {  } from "react-toastify/dist/utils";



const CContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

const ContenedorCategorias = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const Li = styled.li`
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 2rem;
    background-color: ${props => props.color};
    box-shadow: 1px 1px 4px black;
`;

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
`;

const SLink = styled(Link)`
    text-decoration: none;
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Box = styled.div`
    display: flex;
    justify-content: space-between;
`;

const BotonNombreCategoria = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 2.5rem;
  line-height: 2.2rem;
  font-weight: 500;
  white-space: normal;
  padding-right: ${props => props.padding};
`;



const ListaCategoriasComponent = ({ actualizarColor, categorias, agregarNuevaCategoria, cambiarMostrar, mostrarFormulario, eliminarCategoria }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoBack = () => {
        if (mostrarFormulario) { cambiarMostrar() }
        navigate('/');
    };

    /*     useEffect(() => {
            console.log('mostrarFormulario:', mostrarFormulario);
        }, [mostrarFormulario]);
     */
    const isHomePage = location.pathname === '/';

    return (
        <ContenedorCategorias className="ContenedorCategorias">

                
            <Ul className="ListaCategorias">

                    {categorias.map(categoria => (


                        <Div key={categoria.id}>

                            {mostrarFormulario && <DeleteIcon onClick={(event) => eliminarCategoria(event, categoria.id)} />}
                            {mostrarFormulario && <Circulo />}

                            <SLink to={`/categoria/${categoria.id}`} key={categoria.id} className="Link">

                                <ContenedorBurbujasCategorias className="burbuja">

                                    <Li color={categoria.colorPrimario}>

                                        <BotonNombreCategoria padding={mostrarFormulario ? "3rem" : "0"}>
                                            {categoria.nombre}
                                        </BotonNombreCategoria>

                                    </Li>

                                </ContenedorBurbujasCategorias>

                            </SLink>

                        </Div>
                    )
                    )
                    }



                {mostrarFormulario && (
                    


                <FormularioCategorias
                    actualizarColor={actualizarColor}
                    agregarNuevaCategoria={agregarNuevaCategoria}
                    cambiarMostrar={cambiarMostrar}
                    mostrarFormulario={mostrarFormulario}
                    />
          
                )}


            </Ul>
                    

            <Box>
                {!isHomePage && <GoBackIcon onClick={handleGoBack} />}
                {/* {botonAddCategoria && <AddIcon onClick={cambiarMostrar} />} */}
            </Box>

        </ContenedorCategorias>
    );
};

export default ListaCategoriasComponent;
