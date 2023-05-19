import "./Video.css";
import { TiDelete } from "react-icons/ti"

const Video = (props) => {
    const { id, titulo, thumbnail_url, author_name } = props.datos;
    const { colorPrimario, eliminarVideo } = props;

    const handleClick = () => {
//        console.log("props.datos..: ", props.datos)
    };

    return (

        <div className="video" onClick={handleClick} style={{ borderColor: colorPrimario }}   >

            <TiDelete className="eliminar" onClick={(event) => eliminarVideo(event, id)} />

            {<img src={thumbnail_url} alt={titulo} />}

            <div className="titulo" >
                <h3 className="video__titulo"> {"- " + titulo} </h3>
                <h3 className="video__autor"> {"- " + author_name} </h3>
            </div>

        </div>

    );

}

export default Video