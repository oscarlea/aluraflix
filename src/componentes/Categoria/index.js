import "./Categoria.css";
import Video from "../VideoDetalle/index.jsx";
import { hexToRgba } from "../../api/api";
import { Link } from 'react-router-dom';
import { StyledDescripcionCategoria } from "../../UI";


const Categoria = (props) => {
  // Destructuración
  const { colorPrimario, nombre, descripcion, id } = props.datos;
  const { videoList, eliminarVideo, actualizarColor } = props;
  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.6)
  };

  const estiloNombre = { background: colorPrimario };

  return videoList.length > 0 &&
    <div className="categoria" style={obj}>

      <div className="categoria__encabezado" style={estiloNombre}>
        <input
          type="color"
          className="input-color"
          value={colorPrimario}
          onChange={(evento) => {
            actualizarColor(evento.target.value, id);
          }}
        />
        <h1 style={{ textShadow: `1px 1px 2px ${hexToRgba(colorPrimario, 0.6)}` }} className="categoria__titulo">{nombre}</h1>
        <StyledDescripcionCategoria>{descripcion}</StyledDescripcionCategoria>
      </div>

 
{/*       <ListaVideos url={`/videos?id_categoria=${id}`} eliminarVideo={eliminarVideo} colorPrimario={colorPrimario}
      
      /> */}


        <div className="videos">
          {
            videoList.map((video) => (
              <Link to={`/videos/${video.id}`} key={video.id} className="video__link">
                <Video
                  datos={video}
                  colorPrimario={colorPrimario}
                  eliminarVideo={eliminarVideo}
                />
              </Link>
            ))}
        </div> 


    </div>

};

export default Categoria;

