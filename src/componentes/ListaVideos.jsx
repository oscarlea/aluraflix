import { useState, useEffect } from "react"
import { buscar } from "../api/api"
import { Link } from "react-router-dom"
import VideoDetalle from "./VideoDetalle"

const ListaVideos = ({ url, colorPrimario, eliminarVideo }) => {
    const [videos, setData] = useState([])

    useEffect(() => {
        buscar(url, setData)
    }, [url])   

    return (
        videos.length > 0 &&

                <div className="videos">
                    {
                        videos.map(video => {
                            const { id } = video;

                            return <Link to={`/videos/${id}`} key={id} className="video__link">
                                <VideoDetalle
                                    datos={video}
                                    colorPrimario={colorPrimario} 
                                    eliminarVideo={eliminarVideo}
                                />
                            </Link>
                        })
                    }
                </div>

    )
}

export default ListaVideos


