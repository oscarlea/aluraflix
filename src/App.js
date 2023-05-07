/* import logo from './logo.svg'; */
import './App.css'; 
import { useState } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario/Formulario';
import Categoria from './componentes/Categoria';
import Footer from './componentes/Footer';


function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [videoList, actualizarVideos] = useState([{
    categoria: "Data Science",
    titulo: "Titulo 1",
    descripcion: "Descripcion 1",
    videoUrl : "https://youtu.be/xD3MIKd_9qY",
    videoID: "xD3MIKd_9qY"
  },
  {
    categoria: "Front End",
    titulo: "Titulo 2",
    descripcion: "Descripcion 2",
    videoUrl : "https://youtu.be/veEqYQlfNx8",
    videoID: "veEqYQlfNx8"
  },
  {
    categoria: "Front End",
    titulo: "Titulo 3",
    descripcion: "Descripcion 3",
    videoUrl : "https://youtu.be/em_Vh7ZGrnw",
    videoID: "em_Vh7ZGrnw"
  },
  {
    categoria: "UX y Diseño",
    titulo: "Titulo 4",
    descripcion: "Descripcion 4",
    videoUrl: "https://youtu.be/jy0IgvV42es",
    videoID: "jy0IgvV42es"
  },
  {
    categoria: "UX y Diseño",
    titulo: "5 simple tips to making responsive layouts the easy way",
    descripcion: "Descripcion 4",
    videoUrl: "https://youtu.be/VQraviuwbzU",
    videoID: "VQraviuwbzU"
  },
  {
    categoria: "UX y Diseño",
    titulo: "Curso de React [2023]: De cero hasta crear tus primeros componentes con estado",
    descripcion: "Descripcion sdf sdf sdfs df sdfs df sdfsdf",
    videoUrl: "https://youtu.be/7iobxzd_2wY",
    videoID: "7iobxzd_2wY"
  },
  {
    categoria:"Back End",
  descripcion:"sd fsdf",
  titulo:"s dfsfs",
  videoUrl: "https://youtu.be/PhdEaEYwlHw",
  videoID:"PhdEaEYwlHw"
}
  
])

const [categorias, actualizarCategorias] = useState([
  {
    nombre: "Back End",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9",
    descripcion: "Todos los video que estoy usando para estudiar Back End."
  },
  {
    nombre: "Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF",
    descripcion: "Todos los video que estoy usando para estudiar Front End "
  },
  {
    nombre: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2",
    descripcion: "Cosas de React y Python que vengo aprendiendo"
  },
  {
    nombre: "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8",
    descripcion: "Yoquese"
  },
  {
    nombre: "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5",
    descripcion: "Herramientas y técnicas que estudio sobre UX y Design"
  }
])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarVideo = (video) => {
    console.log("Nuevo video", video)
    //Spread operator
    actualizarVideos([...videoList, video])
    /* actualizarMostrar(true); */
  }

    //Eliminar Video
    const eliminarVideo = (event, videoID) => {
      event.stopPropagation();
      console.log("Eliminar video", videoID)
    }


    //Actualizar color de la categoria
    const actualizarColor = (color, nombre) => {
      console.log("Actualizar: ", color, nombre)
      const categoriasActualizadas = categorias.map((categoria) => {
        if (categoria.nombre === nombre) {
          categoria.colorPrimario = color
        }
  
        return categoria
      })
  
      actualizarCategorias(categoriasActualizadas)
    }


  return (
    <div className="App">
   
      <Header cambiarMostrar={cambiarMostrar}  />

      {
        mostrarFormulario && <Formulario
          categorias={categorias.map((categoria) => categoria.nombre)}
          registrarVideo={registrarVideo}
        />
      }

      {
        categorias.map((categoria) => <Categoria
          datos={categoria}
          key={categoria.nombre}
          videoList={videoList.filter(video => video.categoria === categoria.nombre)}
          eliminarVideo={eliminarVideo}
          actualizarColor={actualizarColor}
        />
        )
      }

      <Footer cambiarMostrar={cambiarMostrar} />      

    </div>
  );
}

export default App;
