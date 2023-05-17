import "./Video.css";
import { TiDelete } from "react-icons/ti"

const Video = (props) => {
    const { id, titulo, thumbnail_url} = props.datos;

    const { colorPrimario, eliminarVideo } = props;


    const handleClick = () => {

        console.log("props.datos..: ", props.datos)
    };
 
     return (

        <div className="video" onClick={handleClick} style={{ borderColor: colorPrimario }}   >

            <TiDelete className="eliminar" onClick={(event) => eliminarVideo(event, id)} />

            {<img src={thumbnail_url} alt={titulo} />}

            <div className="titulo" >
                <span> {titulo} </span>
            </div>

        </div>

    ); 

}

export default Video