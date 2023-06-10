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
import { SimpleSlider } from './componentes/SimpleSlider';


const SToast = styled(ToastContainer)`
    font-size: 1.8rem;
    `

const Div = styled.div`
    background-color: ${({ theme }) => theme.body};
    padding: 3rem 0;
`


function App() {

    const { tema } = useContext(VideoDataContext)

    

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

                    
                    <Div>
                        <SimpleSlider initialSlide={1} />
                    </Div>
                    <hr />

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
