import Categoria from "../componentes/Categoria/Categoria.css";
import Formulario from "../componentes/Formulario/Formulario.js";
import ListaCategorias from "../componentes/ListaCategorias.jsx"
import ListaVideos from "../componentes/ListaVideos.jsx";
import { hexToRgba } from "../api/api.js";
import {rgbaToHexWithAlpha} from "../api/api.js";

const Home = ({ categorias, videoList, eliminarVideo, actualizarColor, mostrarFormulario, agregarNuevoVideo }) => {

  const categoria = {
    colorPrimario: "#ff0000",
    nombre: "Todos Los video",
    descripcion: " kkj jh kjhk has dsad a dsadsad sa"
  };

  const obj = { backgroundColor: hexToRgba(categoria.colorPrimario, 0.6) };
  const estiloNombre = { background: categoria.colorPrimario };

  const rgbaColor  = hexToRgba(categoria.colorPrimario, 0.6)
  const hexColorWithAlpha = rgbaToHexWithAlpha(rgbaColor);
  const estiloAlpha = { textShadow: `1px 1px 2px ${hexColorWithAlpha}` }


  return (

    <main className="contenedor">

      <ListaCategorias />

      {
        mostrarFormulario && <Formulario
          categorias={categorias.map((categoria) => ({
            id: categoria.id,
            nombre: categoria.nombre,
          }))}
          agregarNuevoVideo={agregarNuevoVideo}
        /* registrarCategoria={registrarCategoria} */
        />
      }

      <div className="categoria" style={obj} >
        <div className="categoria__encabezado" style={estiloNombre}>
          <h1 style={ estiloAlpha } className="categoria__titulo">{categoria.nombre}</h1>
          <h2 className="categoria__subtitulo">{categoria.descripcion}</h2>
        </div>

        <ListaVideos url={"/videos"}
          eliminarVideo={eliminarVideo}
          actualizarColor={actualizarColor}
          colorPrimario={categoria.colorPrimario}
        />

      </div>

    </main>

  )
}

export default Home
