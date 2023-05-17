import Categoria from "../componentes/Categoria/index.js";
import Formulario from "../componentes/Formulario/Formulario.js";

const Home = ({ categorias, videoList, eliminarVideo, actualizarColor, mostrarFormulario, registrarCategoria, registrarVideo }) => {


  return (

    <main className="contenedor">

      {
        mostrarFormulario && <Formulario
          categorias={categorias.map((categoria) => categoria.nombre)}
          registrarVideo={registrarVideo}
          registrarCategoria={registrarCategoria}
        />
      }

      {
        categorias.map((categoria) => <Categoria
          datos={categoria}
          key={categoria.id}
          videoList={videoList.filter(video => video.id_categoria === categoria.id)}
          eliminarVideo={eliminarVideo}
          actualizarColor={actualizarColor}
        />
        )
      }

    </main>

  )
}

export default Home
