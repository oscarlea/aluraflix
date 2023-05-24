import { useState, useEffect } from 'react';
import './reset.css';
import './App.css';
import Header from './componentes/Header';
//import Formulario from './componentes/Formulario/Formulario';
import Footer from './componentes/Footer';
import Home from './pages/Home';
import { buscar } from './api/api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoPage from './pages/noPage';
import PaginaCategoria from './pages/PaginaCategoria';
import PaginaVideo from './pages/PaginaVideo';
import GlobaStyle from './GlobalStyle';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [categorias, actualizarCategorias] = useState([]);
  const [videoList, actualizarVideos] = useState([]);

  useEffect(() => {
    buscar(`/categorias`, actualizarCategorias)
  }, [])

  useEffect(() => {
    buscar(`/videos`, actualizarVideos)
  }, [])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const agregarNuevoVideo = (video) => {
    actualizarVideos([...videoList, video]);
  };

   const agregarNuevaCategoria = (categoria) => {                 
    actualizarCategorias([...categorias, categoria]);
  }; 


  //Eliminar Video
  const eliminarVideo = (event, id) => {
    event.stopPropagation();
    const videosActualizados = videoList.filter((videoList) => videoList.id !== id)
    actualizarVideos(videosActualizados)
  }

  //Actualizar color de la categoria
  const actualizarColor = (color, id) => {
    const categoriasActualizadas = categorias.map((categoria) => {
      if (categoria.id === id) {
        categoria.colorPrimario = color
        console.log("list " , id,  color  )
      }

      return categoria
    })
    actualizarCategorias(categoriasActualizadas)
  }

/*   const registrarCategoria = (nuevaCategoria) => {
    actualizarCategorias([...categorias, { ...nuevaCategoria, id: uuidv4() }])
  } */

  return (
    
    <div className="App">
      <GlobaStyle />

      <Router>
        <Header cambiarMostrar={cambiarMostrar} />
        <Routes>
          <Route path='/' element={<Home
            categorias={categorias}
            videoList={videoList}
            eliminarVideo={eliminarVideo}
            actualizarColor={actualizarColor}
            mostrarFormulario={mostrarFormulario}
            agregarNuevoVideo={agregarNuevoVideo}
            agregarNuevaCategoria={agregarNuevaCategoria}   
          />} />
          <Route path='/videos' element={<PaginaVideo />} />
          <Route path='/videos/:id' element={<PaginaVideo />} />
          <Route path='/categorias/*' element={<PaginaCategoria 
              actualizarColor={actualizarColor}
              categorias={categorias}
              agregarNuevaCategoria={agregarNuevaCategoria}
                />} />
          <Route path='/categoria/:id?/*' element={<PaginaCategoria   
              eliminarVideo={eliminarVideo} 
              actualizarColor={actualizarColor}
              categorias={categorias}
              agregarNuevaCategoria={agregarNuevaCategoria}
               />} />
          <Route path='*' element={<NoPage />} />
        </Routes>

        <Footer cambiarMostrar={cambiarMostrar} />

      </Router>

    </div>
  );
}

export default App;
