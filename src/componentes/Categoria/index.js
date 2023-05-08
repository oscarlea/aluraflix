import "./Categoria.css";
import Video from "../Video";
import hexToRgba from 'hex-to-rgba';

const Categoria = (props) => {
    //Destructuracion
    const { colorPrimario, nombre, descripcion, id } = props.datos
    const { videoList, eliminarVideo, actualizarColor } = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloNombre = { background: colorPrimario }

    return <>
        {
            videoList.length > 0 &&
            <section className="contenedor" >

                <div className="categoria" style={obj}>
                    <input
                        type='color'
                        className="input-color"
                        value={colorPrimario}
                        onChange={(evento) => {
                            actualizarColor(evento.target.value, id)
                        }}
                    />
                    <h3 style={estiloNombre} >{nombre}</h3>
                    <h4>{descripcion}</h4>

                <div className="videos">
                    {
                        videoList.map((video, videoID) => <Video
                            datos={video}
                            key={videoID}
                            colorPrimario={colorPrimario}
                            eliminarVideo={eliminarVideo}
                        />)
                    }
                </div>

                </div>

            </section>
        }
    </>
}

export default Categoria