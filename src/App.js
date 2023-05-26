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
import PaginaVideoPlayer from './pages/PaginaVideoPlayer';
import GlobaStyle from './GlobalStyle';
import FormularioVideos from './componentes/Formulario/FormularioVideos';

function App() {
  // Formulario Categorias
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  // Boton agregar categoria
  const [botonAddCategoria, setAddCategoria] = useState(false);
  const cambiarMostrarBotonAddCategoria = () => { setAddCategoria(!botonAddCategoria); };  //toggle
  const MostrarBotonAddCategoria = () => { setAddCategoria(true); };
  //const ocultarBotonAddCategoria = () => { setAddCategoria(false); };
  //---

  // bd.json
  const [categorias, actualizarCategorias] = useState([]);
  /* const [videoList, actualizarVideos] = useState([]);  */

  useEffect(() => {
    buscar(`/categorias`, actualizarCategorias)
  }, [])

  /*   useEffect(() => {
      buscar(`/videos`, actualizarVideos)
    }, [])
   */

/*      const agregarNuevoVideo = (video) => {
      actualizarVideos([...videoList, video]);
    };
    */
  const agregarNuevaCategoria = (categoria) => {
    actualizarCategorias([...categorias, categoria]);
  };

  /*   //Eliminar Video
    const eliminarVideo = (id) => {
      //event.stopPropagation();
      console.log("id..: ", id)
      const videosActualizados = videoList.filter((videoList) => videoList.id !== id)
      actualizarVideos(videosActualizados)
    }
   */
  //Actualizar color de la categoria
  const actualizarColor = (color, id) => {
    const categoriasActualizadas = categorias.map((categoria) => {
      if (categoria.id === id) {
        categoria.colorPrimario = color
        console.log("list ", id, color)
      }

      return categoria
    })
    actualizarCategorias(categoriasActualizadas)
  }

  const propsHome = {
    categorias: categorias,
    actualizarColor: actualizarColor,
    mostrarFormulario: mostrarFormulario,
    agregarNuevaCategoria: agregarNuevaCategoria
  };


  return (

    <div className="App">
      <GlobaStyle />

      <Router>
        <Header cambiarMostrar={cambiarMostrar} MostrarBotonAddCategoria={MostrarBotonAddCategoria} cambiarMostrarBotonAddCategoria={cambiarMostrarBotonAddCategoria} />
        <Routes>
          <Route path="/" element={<Home {...propsHome} />} />
          <Route path='/videos' element={<FormularioVideos 
              categorias={categorias.map((categoria) => ({
                id: categoria.id,
                nombre: categoria.nombre,
              }))}
/*               agregarNuevoVideo={agregarNuevoVideo} */
              />} 
              /> 
          <Route path='/videos/:id' element={<PaginaVideoPlayer />} />
          <Route path='/categorias/*' element={<PaginaCategoria
            actualizarColor={actualizarColor}
            categorias={categorias}
            agregarNuevaCategoria={agregarNuevaCategoria}
            botonAddCategoria={botonAddCategoria}
            cambiarMostrar={cambiarMostrar}
            mostrarFormulario={mostrarFormulario}

          />} />
          <Route path='/categoria/:id?/*' element={<PaginaCategoria
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
