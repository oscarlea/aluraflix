import { useState, useEffect } from "react"
import ListaCategorias from '../componentes/ListaCategorias'
import ListaVideos from '../componentes/ListaVideos'
import { useParams, useNavigate, Routes, Route } from 'react-router-dom'
import { hexToRgba } from "../Utils/Utils";
import { rgbaToHexWithAlpha } from "../Utils/Utils";
import { StyledCategoria, StyledDescripcionCategoria, StyledTituloCategoria } from "../UI";


const PaginaCategoria = ({ actualizarColor, eliminarVideo, categorias, agregarNuevaCategoria, botonAddCategoria, cambiarMostrar, mostrarFormulario }) => {

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

    const estiloNombre = { background: categoria.colorPrimario };
    const obj = { backgroundColor: hexToRgba(categoria.colorPrimario, 0.6) };

    const rgbaColor = hexToRgba(categoria.colorPrimario, 0.6)
    const hexColorWithAlpha = rgbaToHexWithAlpha(rgbaColor);
    const estiloAlpha = { textShadow: `1px 1px 2px ${hexColorWithAlpha}` }


    return (

        <main className="contenedor">

            <ListaCategorias
                actualizarColor={actualizarColor}
                categorias={categorias}
                agregarNuevaCategoria={agregarNuevaCategoria}
                botonAddCategoria={botonAddCategoria}
                cambiarMostrar={cambiarMostrar}
                mostrarFormulario={mostrarFormulario}

            />

            {Object.keys(categoria).length > 0 && (

                <StyledCategoria bgcolor={obj.backgroundColor} data-testid="categoria/videos en PaginaCategoria">

                    <div className="categoria__encabezado" style={estiloNombre}>
                        <input
                            type="color"
                            className="input-color"
                            value={categoria.colorPrimario}
                            onChange={(evento) => {
                                actualizarColor(evento.target.value, id);
                            }}
                        />
                        <StyledTituloCategoria style={estiloAlpha} >
                            {categoria.nombre}
                        </StyledTituloCategoria>
                        <StyledDescripcionCategoria>{categoria.descripcion}</StyledDescripcionCategoria>
                    </div>

                    <Routes>
                        <Route path='/' element={<ListaVideos url={`/videos?id_categoria=${id}`}
                            colorPrimario={categoria.colorPrimario}
                            eliminarVideo={eliminarVideo} />}
                        />
                    </Routes>

                </StyledCategoria >

            )}

        </main>
    )
}

export default PaginaCategoria


