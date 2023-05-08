import React, { useState } from "react";
import "./Video.css";
import { TiDelete } from "react-icons/ti"

const Video = (props) => {
    const { id, videoID, titulo} = props.datos;
    const { colorPrimario, eliminarVideo } = props;

    const [isPlaying, setIsPlaying] = useState(false);
    const [mostrarImg, actualizarMostrarImg] = useState(true);

    const handleClick = () => {
        actualizarMostrarImg(false);
        setIsPlaying(true);
    };
 
     return (

        <div className="video" onClick={handleClick} style={{ borderColor: colorPrimario }}   >

            <TiDelete className="eliminar" onClick={(event) => eliminarVideo(event, id)} />

            {mostrarImg && <img src={`https://img.youtube.com/vi/${videoID}/mqdefault.jpg`} alt={titulo} />}

            {isPlaying && (

                <iframe
                    id={videoID}
                    title="YouTube video player"
                     width="100%"
                    height="100%" 
                    src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
                    allowFullScreen
                ></iframe>
            )}
        </div>

    ); 

}

export default Video