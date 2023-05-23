import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './reset.css';
import './App.css';
import Header from './componentes/Header';
//import Formulario from './componentes/Formulario/Formulario';
import Footer from './componentes/Footer';
import Cosa from './pages/cosa'
import Home from './pages/Home';
import { buscar } from './api/api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoPage from './pages/noPage';
import PaginaCategoria from './pages/PaginaCategoria';
import PaginaVideo from './pages/PaginaVideo';

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

/*   const agregarNuevaCategoria = (categoria) => {
    actualizarCategorias([...categorias, categoria]);
  }; */


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

  const registrarCategoria = (nuevaCategoria) => {
    actualizarCategorias([...categorias, { ...nuevaCategoria, id: uuidv4() }])
  }

  //---

  const loremIpsum = require('lorem-ipsum').loremIpsum;

  const generateLoremIpsum = (paragraphs, lowerBound, upperBound) => {
    const text = loremIpsum({
      count: paragraphs,
      format: 'plain',
      paragraphLowerBound: lowerBound,
      paragraphUpperBound: upperBound
    });
    return text;
  };
  //console.log(generateLoremIpsum(1, 3, 7));

  //---

  return (
    <div className="App">

      <Router>
        <Header cambiarMostrar={cambiarMostrar} />
        <Routes>
          <Route path='/' element={<Home
            categorias={categorias}
            videoList={videoList}
            eliminarVideo={eliminarVideo}
            actualizarColor={actualizarColor}
            mostrarFormulario={mostrarFormulario}
            /* registrarCategoria={registrarCategoria} */
            agregarNuevoVideo={agregarNuevoVideo}
          />} />
          <Route path='/videos' element={<PaginaVideo />} />
          <Route path='/videos/:id' element={<PaginaVideo />} />
          <Route path='/categorias' element={<PaginaCategoria actualizarColor={actualizarColor}  />} />
          <Route path='/categoria/:id?/*' element={<PaginaCategoria   eliminarVideo={eliminarVideo} actualizarColor={actualizarColor} />} />
          <Route path='*' element={<NoPage />} />
        </Routes>

        <Footer cambiarMostrar={cambiarMostrar} />

      </Router>

    </div>
  );
}

export default App;
