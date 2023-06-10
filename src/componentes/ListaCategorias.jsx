import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormularioCategorias from './formularioCategorias';
import FormularioVideos from "./FormularioVideos";
import styled from "styled-components";
import { GoBackIcon } from "../UI";
import { useTheme } from 'styled-components';
import { amarillo } from "../UI/variables";
import { VideoDataContext } from "../Context";
import { FloatingActionButton } from "./FloatingButton";



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

    const { categorias, 
        isFormCategoriasVisible, 
        isFormVideosVisible,
        toggleFormCategorias, 
        toggleFormVideos, 
        setFormCategoriasVisible,
        setFormVideosVisible, 
        fetchData, 
        setVideos
    } = useContext(VideoDataContext);

    const navigate = useNavigate();
    const theme = useTheme();

    const handleReloadVideos = (event) => {
        //console.log("click")
        fetchData("", setVideos);
      };
            
    const handleGoBack = () => {
        setFormCategoriasVisible(false)
        setFormVideosVisible(false)
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

                <FloatingActionButton categoria={catZero} color={theme.text} handleReloadVideos={handleReloadVideos} />

                {categorias.map(categoria => (
                    <Fragment key={categoria.id}>
                        <FloatingActionButton
                            categoria={categoria}
                            color={theme.text}
                            isFormCategoriasVisible={isFormCategoriasVisible}
                        >
                        </FloatingActionButton>
                    </Fragment>
                ))}

            </Ul>

            {isFormVideosVisible && (
                <>
                    <FormularioVideos
                        categorias={categorias.map((categoria) => ({
                            id: categoria.id,
                            nombre: categoria.nombre,
                        }))}
                        toggleFormVideos={toggleFormVideos}
                    />

                    <Box>
                        <GoBackIcon onClick={handleGoBack} />
                    </Box>
                </>
            )
            }

            {isFormCategoriasVisible && (
                <>
                    <FormularioCategorias
                        toggleFormCategorias={toggleFormCategorias}
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
