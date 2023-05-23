import { useState, useEffect } from "react"
import ListaCategorias from '../componentes/ListaCategorias'
import ListaVideos from '../componentes/ListaVideos'
import { useParams, useNavigate, Routes, Route } from 'react-router-dom'
import { buscar } from '../api/api'
import { hexToRgba } from "../api/api";
import {rgbaToHexWithAlpha} from '../api/api'


const PaginaCategoria = ({ actualizarColor, eliminarVideo, registrarCategoria }) => {

    const { id } = useParams()
    const [categoria, setData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        buscar(`/categorias?id=${id}`, (data) => {
            setData(data[0] || {});
        }).catch(() => {
            navigate("/not-found");
        });
    }, [id, navigate]);

    const estiloNombre = { background: categoria.colorPrimario };
    const obj = {         backgroundColor: hexToRgba(categoria.colorPrimario, 0.6)     };

    const rgbaColor  = hexToRgba(categoria.colorPrimario, 0.6)
    const hexColorWithAlpha = rgbaToHexWithAlpha(rgbaColor);
    const estiloAlpha = { textShadow: `1px 1px 2px ${hexColorWithAlpha}` }
    
    return (

        <main className="contenedor">

            <ListaCategorias actualizarColor={actualizarColor} />

            {Object.keys(categoria).length > 0 && (

                <div className="categoria" style={obj}>

                    <div className="categoria__encabezado" style={estiloNombre}>
                        <input
                            type="color"
                            className="input-color"
                            value={categoria.colorPrimario}
                            onChange={(evento) => {
                                
                                actualizarColor(evento.target.value, id);
                            }}
                        />
                        <h1 style= {estiloAlpha} className="categoria__titulo">{categoria.nombre + 'jljjkl'}</h1>
                        <h2 className="categoria__subtitulo">{categoria.descripcion}</h2>
                    </div>

                    <Routes>
                        <Route path='/' element={<ListaVideos url={`/videos?id_categoria=${id}`}
                            colorPrimario={categoria.colorPrimario}
                            eliminarVideo={eliminarVideo} />}
                        />
                    </Routes>

                </div>

            )}

        </main>
    )
}

export default PaginaCategoria


