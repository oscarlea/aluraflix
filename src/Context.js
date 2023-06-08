import React, { createContext, useState, useEffect } from 'react';
import { buscar, eliminarCategoriaApi, eliminarVideoApi, registrarCategoria, fetchData } from './api/api';

export const VideoDataContext = createContext();

const VideoDataContextProvider = ({ children }) => {

    //---------------------------------------------------------------- Categorías
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        buscar('/categorias', setCategorias);
    }, []);

    // Formulario Categorias
    const [isFormCategoriasVisible, setFormCategoriasVisible ] = useState(false)
        const toggleFormCategorias  = () => {
        setFormCategoriasVisible (!isFormCategoriasVisible)
    }

    //----------------------------------------------------------------- Videos
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        buscar('/videos', setVideos);
    }, []);

    const [isFormVideosVisible, setFormVideosVisible] = useState(false)
        const toggleFormVideos = () => {
        setFormVideosVisible(!isFormVideosVisible)
    }

    // Eliminar categoría
    const eliminarCategoria = (event, id) => {
        event.stopPropagation();
        const categoriasActualizadas = categorias.filter((categoria) => categoria.id !== id);
        setCategorias(categoriasActualizadas);
        eliminarCategoriaApi(id);
    };

    // Eliminar video
    const eliminarVideo = (event, id) => {
        event.stopPropagation();
        const videosActualizados = videos.filter((video) => video.id !== id);
        setVideos(videosActualizados);
        eliminarVideoApi(id);
    };

    // Nueva categoría
    const nuevaCategoria = async (e, valores) => {
        valores.id = await registrarCategoria(valores);
        setCategorias([...categorias, valores]);
    };

    // Actualizar color de categoría
    const actualizarColor = (color, id) => {
        const categoriasActualizadas = categorias.map((categoria) => {
            if (categoria.id === id) {
                categoria.colorPrimario = color;
            }
            return categoria;
        });
        setCategorias(categoriasActualizadas);
    };

    // Actualizar videos
    const actualizarVideos = (nuevoVideo) => {
        setVideos([...videos, nuevoVideo]);
    };

    //----------------------------------------------------------------- manejo de temas claro/oscuro
    const [tema, setTema] = useState(() => {
        const temaGuardado = localStorage.getItem('tema');
        return temaGuardado ? JSON.parse(temaGuardado) : true; // Por defecto, tema claro
    });

    const toggleTheme = () => {
        const nuevoTema = !tema;
        setTema(nuevoTema);
        localStorage.setItem('tema', JSON.stringify(nuevoTema));
    };


    // Otros estados y funciones necesarios

    return (
        <VideoDataContext.Provider
            value={{
                categorias,
                videos,
                isFormCategoriasVisible, isFormVideosVisible,
                toggleFormCategorias , toggleFormVideos,
                setFormCategoriasVisible, setFormVideosVisible,
                eliminarCategoria, eliminarVideo,
                nuevaCategoria,
                actualizarColor,
                actualizarVideos,
                fetchData,
                tema, setTema,
                toggleTheme,
                setVideos
                // Otros estados y funciones necesarios
            }}
        >
            {children}
        </VideoDataContext.Provider>
    );
};

export default VideoDataContextProvider;
