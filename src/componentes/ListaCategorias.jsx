import { useNavigate } from "react-router-dom";
import FormularioCategorias from './Formulario/formularioCategorias';
import FormularioVideos from "./Formulario/FormularioVideos";
import styled from "styled-components";
import { Circulo, GoBackIcon } from "../UI";
import FloatingActionButton from "./FloatingButton";
import { useTheme } from 'styled-components';
import { amarillo } from "../UI/variables";

//import Container from "@mui/material/Container";
//import {  } from "react-toastify/dist/utils";
//import { Container } from "@mui/material";

/* 
const MContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;   
` */

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
    padding: 2rem;
`;
/* 
const Li = styled.li`
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 2rem;
    background-color: ${props => props.color};
    box-shadow: 1px 1px 4px black;
`;
 */
/* 
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
 */
/* 
const SLink = styled(Link)`
    text-decoration: none;
`;
 */
/* 
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
 */
const Box = styled.div`
    display: flex;
    justify-content: space-between;
`;
/* 
const BotonNombreCategoria = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 2.5rem;
  line-height: 2.2rem;
  font-weight: 500;
  white-space: normal;
  padding-right: ${props => props.padding};
`;
 */

//--------------------------------------------------------------------------------------------------------------------------//

const ListaCategoriasComponent = ({ categorias, mostrarFormCategorias, mostrarFormVideos, cambiarMostrar, cambiarMostrarVideos, ...props }) => {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleGoBack = () => {
        cambiarMostrar(false)
        cambiarMostrarVideos(false)
        props.setFormCatFalse()
        props.setFormVidFalse()
        navigate('/');
    };

    const catZero = {"id":"00",
    "nombre":"Todos",
    "colorPrimario":amarillo,
    "colorSecundario":"",
    "descripcion":""}


    return (
        <ContenedorCategorias className="ContenedorCategorias">

       {/*      <GoBackIcon onClick={handleGoBack} /> */}

            <Ul className="ListaCategorias">

            <FloatingActionButton categoria={catZero} color={theme.text} amarillo={amarillo} /> 
                        
                {categorias.map(categoria => (
                    <>

                        <FloatingActionButton categoria={categoria} 
                                                color={theme.text} 
                                                amarillo={amarillo} 
                                                mostrarFormCategorias={mostrarFormCategorias}
                                                eliminarCategoria={props.eliminarCategoria} 
                        > 
                        
                        </FloatingActionButton>

                       
{/* 
                        <Div key={categoria.id} className="Div" >

                            {mostrarFormCategorias && <DeleteIcon onClick={(event) => props.eliminarCategoria(event, categoria.id)} />}
                            {mostrarFormCategorias && <Circulo />}

                            <SLink to={`/categoria/${categoria.id}`} key={categoria.id} className="Link">

                                <ContenedorBurbujasCategorias className="burbuja">

                                    <Li color={categoria.colorPrimario}>

                                        <BotonNombreCategoria padding={mostrarFormCategorias ? "3rem" : "0"}>
                                            {categoria.nombre}
                                        </BotonNombreCategoria>

                                    </Li>

                                </ContenedorBurbujasCategorias>

                            </SLink>

                        </Div>
 */}
                    </>
                )
                )
                }

            </Ul>

            {mostrarFormVideos && (
                <>
                    <FormularioVideos
                        categorias={categorias.map((categoria) => ({
                            id: categoria.id,
                            nombre: categoria.nombre,
                        }))} actualizarVideos={props.actualizarVideos}
                        cambiarMostrarVideos={cambiarMostrarVideos}
                    />

                    <Box>
                        <GoBackIcon onClick={handleGoBack} />
                       

                    </Box>

                </>
            )
            }

            {mostrarFormCategorias && (
                <>
                    <FormularioCategorias
                        actualizarColor={props.actualizarColor}
                        cambiarMostrar={cambiarMostrar}
                        nuevaCategoria={props.nuevaCategoria}
                    />

                    <Box>
                        <GoBackIcon onClick={handleGoBack} />
                    </Box>
                </>
            )}

        </ContenedorCategorias>
    );
};

export default ListaCategoriasComponent;

