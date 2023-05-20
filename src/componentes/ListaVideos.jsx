import { useState, useEffect } from "react"
import { buscar } from "../api/api"
import { Link } from "react-router-dom"
import VideoDetalle from "./VideoDetalle"

const ListaVideos = ({ url, colorPrimario }) => {
    const [videos, setData] = useState([])

    useEffect(() => {
        buscar(url, setData)
    }, [url])


    console.log("colorPrimario..: ", colorPrimario)

    return (
        <div className="videos">
            {
                videos.map(video => {
                    const { id } = video;

                    return <Link to={`/videos/${id}`} key={id}>
                        <VideoDetalle
                            datos={video}
                            colorPrimario={'colorPrimario'}
                        />
                    </Link>
                })
            }
        </div>
    )
}

export default ListaVideos
