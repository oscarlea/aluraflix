import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import './reset.css';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import FormularioVideos from './componentes/FormularioVideos';
import NoPage from './pages/noPage';
import PaginaVideoPlayer from './pages/PaginaVideoPlayer';
import PaginaCategoria from './pages/PaginaCategoria';
import GlobaStyle from './GlobalStyle';
import { temaClaro, temaOscuro } from './UI/temas';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VideoDataContext } from './Context';


const SToast = styled(ToastContainer)`
    font-size: 16px;
    `

function App() {
    
    const videoDataContext = useContext(VideoDataContext)
    const tema = videoDataContext.tema


    return (

            <ThemeProvider theme={tema ? temaClaro : temaOscuro}>

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

                    <Router>

                        <Header />

                        <Routes>
                            <Route path='*' element={<PaginaCategoria />} />
                            <Route path='/videos' element={<FormularioVideos />} />
                            <Route path='/videos/:id' element={<PaginaVideoPlayer />} />
                            <Route path='/categorias/*' element={<PaginaCategoria />} />
                            <Route path='/categoria/:id?/*' element={<PaginaCategoria />} />
                            <Route path='*' element={<NoPage />} />
                        </Routes>

                        <Footer />

                    </Router>

                </div>

            </ThemeProvider>

    );
}

export default App;
