import { useState, useEffect } from "react"
import ListaCategorias from '../componentes/ListaCategorias'
import ListaVideos from '../componentes/ListaVideos'
import { useParams, useNavigate, Routes, Route } from 'react-router-dom'
import { hexToRgba, rgbaToHexWithAlpha } from "../Utils/Utils";
import { CategoriaEncabezado, DescripcionCategoria, MainContainer, StyledCategoria, TituloCategoria } from "../UI";
import { styled } from "styled-components";
//import InputColor from "../componentes/InputColor/InputColor";




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

const PaginaCategoria = ({ actualizarColor, eliminarVideo, categorias, agregarNuevaCategoria, cambiarMostrar, mostrarFormulario, eliminarCategoria, videos }) => {

    const { id } = useParams()
    const [categoria, setCategoria] = useState({});
    const navigate = useNavigate()



    /*     useEffect(() => {
            buscar(`/categorias?id=${id}`, (data) => {
                setData(data[0] || {});
            }).catch(() => {
                navigate("/not-found");
            });
        }, [id, navigate]); */


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

    const colorEncabezado = categoria.colorPrimario ? categoria.colorPrimario : "#808080"
    const estiloNombre = { background: colorEncabezado };
    const obj = { backgroundColor: hexToRgba(colorEncabezado, 0.6) };
    const rgbaColor = hexToRgba(colorEncabezado, 0.6)
    const hexColorWithAlpha = rgbaToHexWithAlpha(rgbaColor);
    const estiloAlpha = { textShadow: `1px 1px 2px ${hexColorWithAlpha}` }

    return (

        <MainContainer className="MainContainer_P_C">

            <ListaCategorias
                actualizarColor={actualizarColor}
                categorias={categorias}
                agregarNuevaCategoria={agregarNuevaCategoria}
                /* botonAddCategoria={botonAddCategoria} */
                cambiarMostrar={cambiarMostrar}
                mostrarFormulario={mostrarFormulario}
                eliminarCategoria={eliminarCategoria}
            /* ocultarBotonAddCategoria={ocultarBotonAddCategoria} */
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

                        <Routes>
                            <Route path='/' element={<ListaVideos url={`/videos?id_categoria=${id}`}
                                colorPrimario={categoria.colorPrimario}
                                eliminarVideo={eliminarVideo}

                            /* actualizarVideos={actualizarVideos} */
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

                        <ListaVideos
                            url="/videos"
                            colorPrimario=""
                            eliminarVideo={eliminarVideo} videos={videos}
                        /* actualizarVideos={actualizarVideos} */
                        />
                    </Div>
                )

                }
            </StyledCategoria >

        </MainContainer>
    )
}

export default PaginaCategoria


