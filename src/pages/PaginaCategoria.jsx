import { useState, useEffect } from "react"
import ListaCategorias from '../componentes/ListaCategorias'
import ListaVideos from '../componentes/ListaVideos'
import { useParams, useNavigate, Routes, Route } from 'react-router-dom'
import { hexToRgba, rgbaToHexWithAlpha } from "../Utils/Utils";
import { CategoriaEncabezado, DescripcionCategoria, MainContainer, StyledCategoria, TituloCategoria } from "../UI";
import { styled } from "styled-components";


const InputColor = styled.input`
    position: absolute;
    right: 2rem;
    padding: .3rem;
    top: 50%;
    transform: translate(0, -50%);
`

const Div = styled(StyledCategoria)`
    padding: 0;
`;

const PaginaCategoria = ({ categorias, videos, actualizarColor, eliminarVideo, ...props }) => {
    //const { id } = useParams()
    const [categoria, setCategoria] = useState({});
    const { id = "0" } = useParams()
    const navigate = useNavigate()
    

    /*     useEffect(() => {
            buscar(`/categorias?id=${id}`, (data) => {
                setData(data[0] || {});
            }).catch(() => {
                navigate("/not-found");
            });
        }, [id, navigate]); */

    //----
     useEffect(() => { 
        const buscarCategoriaPorId = (id) => {
            return categorias.find((categoria) => categoria.id === id);
        };
        const categoriaEncontrada = buscarCategoriaPorId(id);
        if (categoriaEncontrada) {
            setCategoria(categoriaEncontrada);
        } else {
            setCategoria({});
            //navigate("/not-found");
        }
     }, [id, navigate, categorias]); 

    //----
    const colorEncabezado = categoria.colorPrimario ? categoria.colorPrimario : "#808080"
    const estiloNombre = { background: colorEncabezado };
    const obj = { backgroundColor: hexToRgba(colorEncabezado, 0.6) };
    const rgbaColor = hexToRgba(colorEncabezado, 0.6)
    const hexColorWithAlpha = rgbaToHexWithAlpha(rgbaColor);
    const estiloAlpha = { textShadow: `1px 1px 2px ${hexColorWithAlpha}` }

    return (

        <MainContainer className="MainContainer_P_C">

            <ListaCategorias
                actualizarColor={props.actualizarColor}
                categorias={categorias}
                nuevaCategoria={props.nuevaCategoria}
                cambiarMostrar={props.cambiarMostrar}
                eliminarCategoria={props.eliminarCategoria}
                mostrarFormCategorias={props.mostrarFormCategorias}
                mostrarFormVideos={props.mostrarFormVideos}
                actualizarVideos={props.actualizarVideos}
                cambiarMostrarVideos={props.cambiarMostrarVideos}
                setFormCatFalse={props.setFormCatFalse}
                setFormVidFalse={props.setFormVidFalse}

            />

            <StyledCategoria bgcolor={obj.backgroundColor} data-testid="categoria/videos en PaginaCategoria">
                {Object.keys(categoria).length > 0 ? (
                    <>
                        <CategoriaEncabezado style={estiloNombre}>

                            <InputColor
                                type="color"
                                className="input-color"
                                value={categoria.colorPrimario}
                                onChange={(evento) => {
                                    actualizarColor(evento.target.value, id);
                                }}
                            />

                            <TituloCategoria style={estiloAlpha} >
                                {categoria.nombre}
                            </TituloCategoria>
                            <DescripcionCategoria>{categoria.descripcion}</DescripcionCategoria>
                        </CategoriaEncabezado>


                        <Routes>  {/* /Reformular y eliminar ruta. pasar "videos" por props y filtrar el ListaVideos / */}
                            <Route path='/' element={<ListaVideos url={`/videos?id_categoria=${id}`}
                                colorPrimario={categoria.colorPrimario}
                                eliminarVideo={eliminarVideo}
                                mostrarFormVideos={props.mostrarFormVideos}
                                id={id}
                                videos={videos}
                            />}
                            />
                        </Routes>


                    </>

                ) : (

                    <Div>
                        <CategoriaEncabezado style={estiloNombre}>
                            <TituloCategoria style={estiloAlpha} >
                                {'Todos los Videos'}
                            </TituloCategoria>
                            <DescripcionCategoria>
                                {'asdasd asd asd asd '}
                            </DescripcionCategoria>
                        </CategoriaEncabezado>

                        {/* /Reformular y eliminar ruta. pasar "videos" por props y filtrar el ListaVideos / */}
                        <ListaVideos  
                            url="/videos" 
                            colorPrimario=""
                            eliminarVideo={eliminarVideo} 
                             videos={videos} 
                            mostrarFormVideos={props.mostrarFormVideos}
                        />

                    </Div>
                )

                }
            </StyledCategoria >

        </MainContainer>
    )
}

export default PaginaCategoria


