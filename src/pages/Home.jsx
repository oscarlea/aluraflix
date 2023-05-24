import Categoria from "../componentes/Categoria/Categoria.css";
import Formulario from "../componentes/Formulario/Formulario.js";
import ListaCategorias from "../componentes/ListaCategorias.jsx"
import ListaVideos from "../componentes/ListaVideos.jsx";
import { hexToRgba } from "../Utils/Utils";
import { rgbaToHexWithAlpha } from "../Utils/Utils";
import { StyledDescripcionCategoria, StyledTituloCategoria , StyledCategoria} from "../UI";

const Home = ({ categorias, videoList, eliminarVideo, actualizarColor, mostrarFormulario, agregarNuevoVideo, agregarNuevaCategoria }) => {

  const categoria = {
    colorPrimario: "#ff0000",
    nombre: "Todos Los video",
    descripcion: " kkj jh kjhk has dsad a dsadsad sa"
  };

  const obj = { backgroundColor: hexToRgba(categoria.colorPrimario, 0.6) };
  const estiloNombre = { background: categoria.colorPrimario };

  const rgbaColor = hexToRgba(categoria.colorPrimario, 0.6)
  const hexColorWithAlpha = rgbaToHexWithAlpha(rgbaColor);
  const estiloAlpha = { textShadow: `1px 1px 2px ${hexColorWithAlpha}` }


  return (

    <main className="contenedor">

      <ListaCategorias categorias={categorias} agregarNuevaCategoria={agregarNuevaCategoria} />

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

      <StyledCategoria bgcolor={obj.backgroundColor} data-testid="categorias/videos en Home">
        <div className="categoria__encabezado" style={estiloNombre}>
          <StyledTituloCategoria style={estiloAlpha} >
            {categoria.nombre}
          </StyledTituloCategoria>
          <StyledDescripcionCategoria>
            {categoria.descripcion}
          </StyledDescripcionCategoria>
        </div>

        <ListaVideos url={"/videos"}
          eliminarVideo={eliminarVideo}
          actualizarColor={actualizarColor}
          colorPrimario={categoria.colorPrimario}
        />

      </StyledCategoria>

    </main>

  )
}

export default Home
