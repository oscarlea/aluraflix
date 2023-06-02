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
import { buscar, eliminarCategoriaApi } from './api/api';
import { temaClaro, temaOscuro } from './UI/temas';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider as ThemeProviderMui } from '@mui/material/styles';
import Button from '@mui/material/Button';

import MuiTheme from './UI/MuiTheme';






const SToast = styled(ToastContainer)`
font-size: 16px;
`


function App() {
    // Formulario Categorias
    const [mostrarFormulario, actualizarMostrar] = useState(false)
    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario)
    }

    //--- Manejo de Categorias
    const [categorias, actualizarCategorias] = useState([]);
    useEffect(() => {
        buscar(`/categorias`, actualizarCategorias)
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
        // Obtener el tema del localStorage al cargar el componente
        const temaGuardado = localStorage.getItem('tema');
        return temaGuardado ? JSON.parse(temaGuardado) : true; // Por defecto, tema claro
    });

    const toggleTheme = () => {
        const nuevoTema = !tema;
        setTema(nuevoTema);
        // Guardar el tema en el localStorage
        localStorage.setItem('tema', JSON.stringify(nuevoTema));
    };

    //---
    const eliminarCategoria = (event, id) => {
        event.stopPropagation();
        const categoriasActualizadas = categorias.filter((categoria) => categoria.id !== id);
        actualizarCategorias(categoriasActualizadas);
        eliminarCategoriaApi(id);
    };

    //---
    const agregarNuevaCategoria = (categoria) => {
        actualizarCategorias([...categorias, categoria]);
    };

    //Actualizar color de la categoria
    const actualizarColor = (color, id) => {
        const categoriasActualizadas = categorias.map((categoria) => {
            if (categoria.id === id) {
                categoria.colorPrimario = color
            }
            return categoria
        })
        actualizarCategorias(categoriasActualizadas)
        //editarCategoria(`/categorias/${id}`, categoriasActualizadas[id - 1])
    }

    //---
    const categoriaProps = {
        actualizarColor,
        categorias,
        agregarNuevaCategoria,
        /* botonAddCategoria, */
        cambiarMostrar,
        mostrarFormulario,
        eliminarCategoria,
        videos
        /* actualizarVideos */
        /* ocultarBotonAddCategoria */
    }


    return (

        <ThemeProvider theme={tema ? temaClaro : temaOscuro}>
            {/* <ThemeProviderMui theme={MuiTheme}> */}

             {/*    <Button>font-size</Button> */}

                <div className="App">
                    <SToast
                        position="top-center"
                        autoClose={5000}
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

                    <Router>
                        <Header tema={tema} toggleTheme={toggleTheme} mostrarFormulario={mostrarFormulario} cambiarMostrar={cambiarMostrar} videos={videos} />
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
