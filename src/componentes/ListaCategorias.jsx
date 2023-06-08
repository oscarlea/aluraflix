import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormularioCategorias from './formularioCategorias';
import FormularioVideos from "./FormularioVideos";
import styled from "styled-components";
import { GoBackIcon } from "../UI";
import FloatingActionButton from "./FloatingButton";
import { useTheme } from 'styled-components';
import { amarillo } from "../UI/variables";
import { VideoDataContext } from "../Context";


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

const ListaCategoriasComponent = () => {

    const videoDataContext = useContext(VideoDataContext);
    const categorias = videoDataContext.categorias;
    const mostrarFormCategorias = videoDataContext.mostrarFormCategorias
    const mostrarFormVideos = videoDataContext.mostrarFormVideos
    const cambiarMostrar = videoDataContext.cambiarMostrar
    const cambiarMostrarVideos = videoDataContext.cambiarMostrarVideos
    const actualizarMostrar = videoDataContext.actualizarMostrar
    const setShowVideos = videoDataContext.setShowVideos
    

    const navigate = useNavigate();
    const theme = useTheme();

    const handleGoBack = () => {
        cambiarMostrar(false)
        cambiarMostrarVideos(false)
        actualizarMostrar(false)
        setShowVideos(false)
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
                        }))} 
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
                        cambiarMostrar={cambiarMostrar}
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
