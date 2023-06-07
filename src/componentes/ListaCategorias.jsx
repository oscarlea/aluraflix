import { useNavigate } from "react-router-dom";
import FormularioCategorias from './formularioCategorias';
import FormularioVideos from "./FormularioVideos";
import styled from "styled-components";
import { GoBackIcon } from "../UI";
import FloatingActionButton from "./FloatingButton";
import { useTheme } from 'styled-components';
import { amarillo } from "../UI/variables";
import { Fragment } from "react";


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
    padding: min(2rem, 2vw);
    gap: min(2rem, 2vw);
`;

const Box = styled.div`
    display: flex;
    justify-content: space-between;
`;

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

    const catZero = {
        "id": "00",
        "nombre": "Todos",
        "colorPrimario": amarillo,
        "colorSecundario": "",
        "descripcion": ""
    }


    return (
        <ContenedorCategorias className="ContenedorCategorias">

            <Ul className="ListaCategorias">

                <FloatingActionButton categoria={catZero} color={theme.text} amarillo={amarillo} />

                {categorias.map(categoria => (
                    <Fragment key={categoria.id}>
                        <FloatingActionButton categoria={categoria}
                            color={theme.text}
                            amarillo={amarillo}
                            mostrarFormCategorias={mostrarFormCategorias}
                            eliminarCategoria={props.eliminarCategoria}
                        >
                        </FloatingActionButton>
                    </Fragment>
                ))}

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

