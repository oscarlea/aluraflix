import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate, Routes, Route } from 'react-router-dom'
import ListaCategorias from '../componentes/ListaCategorias'
import ListaVideos from '../componentes/ListaVideos'
import { hexToRgba, rgbaToHexWithAlpha } from "../Utils/Utils";
import { CategoriaEncabezado, DescripcionCategoria, MainContainer, StyledCategoria, TituloCategoria } from "../UI";
import { styled } from "styled-components";
import { VideoDataContext } from "../Context";


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

const PaginaCategoria = () => {

    const videoDataContext = useContext(VideoDataContext);
    const categorias = videoDataContext.categorias;
    const actualizarColor = videoDataContext.actualizarColor

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

            <ListaCategorias />

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
                                id={id}
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
                                {'asdasd asd asd asd '}    {/* <-- indicar cant de videos uy cant categorias */}
                            </DescripcionCategoria>
                        </CategoriaEncabezado>

                        {/* /Reformular y eliminar ruta. pasar "videos" por props y filtrar el ListaVideos / */}
                        <ListaVideos
                            url="/videos"
                            colorPrimario=""
                        />

                    </Div>
                )

                }
            </StyledCategoria >

        </MainContainer>
    )
}

export default PaginaCategoria


