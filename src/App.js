import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './reset.css';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import FormularioVideos from './componentes/Formulario/FormularioVideos';
import NoPage from './pages/noPage';
import PaginaVideoPlayer from './pages/PaginaVideoPlayer';
import PaginaCategoria from './pages/PaginaCategoria';
import GlobaStyle from './GlobalStyle';
import { buscar, eliminarCategoriaApi, eliminarVideoApi, registrarCategoria } from './api/api';
import { temaClaro, temaOscuro } from './UI/temas';
import { ThemeProvider } from 'styled-components';
//import { ThemeProvider as ThemeProviderMui } from '@mui/material/styles';
import styled from 'styled-components';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { createTheme } from '@mui/material/styles';

/* 
const theme = createTheme({
    typography: {
        button: {
            fontSize: '1rem',
        },
        TextField: {
            MuiInputLabelRoot: {
                fontSize: '30px',
            },
        },
    },
});

 */

const SToast = styled(ToastContainer)`
font-size: 16px;
`


function App() {

    // Formulario Categorias
    const [mostrarFormCategorias, actualizarMostrar] = useState(false)
    const setFormCatFalse = () => { actualizarMostrar(false); };
    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormCategorias)
    }

    // Formulario Videos
    const [mostrarFormVideos, setShowVideos] = useState(false)
    const setFormVidFalse = () => { setShowVideos(false); };
    const cambiarMostrarVideos = () => {
        setShowVideos(!mostrarFormVideos)
    }

    //--- Manejo de Categorias
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        buscar(`/categorias`, setCategorias)
    }, [])

    //--- Manejo de videos
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        buscar(`/videos`, setVideos);
    }, []);

    const actualizarVideos = (nuevoVideo) => {
        setVideos([...videos, nuevoVideo]);
    };


    //--- manejo de temas claro/oscuro
    const [tema, setTema] = useState(() => {
        const temaGuardado = localStorage.getItem('tema');
        return temaGuardado ? JSON.parse(temaGuardado) : true; // Por defecto, tema claro
    });

    const toggleTheme = () => {
        const nuevoTema = !tema;
        setTema(nuevoTema);
        localStorage.setItem('tema', JSON.stringify(nuevoTema));
    };

    //--- eliminar Categoria
    const eliminarCategoria = (event, id) => {
        event.stopPropagation();
        const categoriasActualizadas = categorias.filter((categoria) => categoria.id !== id);
        setCategorias(categoriasActualizadas);
        eliminarCategoriaApi(id);
    };

    //--- eliminar Video
    const eliminarVideo = (event, id) => {
        event.stopPropagation();
        const videosActualizados = videos.filter((video) => video.id !== id);
        setVideos(videosActualizados);
        eliminarVideoApi(id);
    };

    //---nueva Categoria
    const nuevaCategoria = (valores) => {
        registrarCategoria(valores);
        setCategorias([...categorias, valores]);
    };

    //Actualizar color de la categoria
    const actualizarColor = (color, id) => {
        const categoriasActualizadas = categorias.map((categoria) => {
            if (categoria.id === id) {
                categoria.colorPrimario = color
            }
            return categoria
        })
        setCategorias(categoriasActualizadas)
    }

    //---
    const categoriaProps = {
        actualizarColor,
        categorias,
        nuevaCategoria,
        cambiarMostrar,
        cambiarMostrarVideos,
        mostrarFormCategorias,
        mostrarFormVideos,
        eliminarCategoria,
        eliminarVideo,
        videos,
        actualizarVideos,
        setFormCatFalse,
        setFormVidFalse
    }


    return (

        <ThemeProvider theme={tema ? temaClaro : temaOscuro}>

{/*             <ThemeProviderMui theme={theme} > */}
            {/* <ThemeProviderMui  >                 */}

                <div className="App">
                    <SToast
                        position="top-center"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme={tema ? "light" : "dark"}
                    />
                    <GlobaStyle />

{/*                     console.log(theme) */}

                    <Router>
                        <Header tema={tema} toggleTheme={toggleTheme}
                            /* mostrarFormCategorias={mostrarFormCategorias}  */
                            videos={videos}
                            cambiarMostrar={cambiarMostrar}
                            cambiarMostrarVideos={cambiarMostrarVideos}
                            mostrarFormCategorias={mostrarFormCategorias}
                            mostrarFormVideos={mostrarFormVideos}

                        />
                        <Routes>
                            <Route path='*' element={<PaginaCategoria {...categoriaProps} />} />

                            <Route path='/videos' element={<FormularioVideos
                                categorias={categorias.map((categoria) => ({
                                    id: categoria.id,
                                    nombre: categoria.nombre,
                                }))} actualizarVideos={actualizarVideos}

                            />} />
                            <Route path='/videos/:id' element={<PaginaVideoPlayer />} />
                            <Route path='/categorias/*' element={<PaginaCategoria {...categoriaProps} />} />
                            <Route path='/categoria/:id?/*' element={<PaginaCategoria {...categoriaProps} />} />
                            <Route path='*' element={<NoPage />} />
                        </Routes>

                        <Footer cambiarMostrar={cambiarMostrar} />

                    </Router>

                </div>

            {/* </ThemeProviderMui> */}

        </ThemeProvider>
    );
}

export default App;
