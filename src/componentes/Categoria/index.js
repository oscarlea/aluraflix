import "./Categoria.css";
import Video from "../Video/index.jsx";
import { hexToRgba } from "../../api/api";
import { Link } from 'react-router-dom';

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

            <div className="categoria__titulo" style={estiloNombre}>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id);
                    }}
                />
                <h3>{nombre}</h3>
                <h4>{descripcion}</h4>
            </div>

            <div className="videos">

                

            {
  videoList.map((video) => (
    <Link to={`/videos/${video.id}`} key={video.id}>
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
