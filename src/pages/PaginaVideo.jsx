import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"
import ReactPlayer from "react-player";
import './PaginaVideo.css'

const PaginaVideo = ({ url }) => {
    const [video, setData] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        buscar(`/videos/${id}`, setData).catch(() => {
            navigate("/not-found")
        })
    }, [id, navigate])

    return (

        <div className='player-wrapper' >
            <div className="contenedor_video">
                <h3 className="video__titulo">{video.author_name + " : " + video.titulo }</h3>
            </div>
            <ReactPlayer
                url={video.videoUrl}
                config={{
                    youtube: {
                        playerVars: { disablekb: 0, controls: 2, fs: 1, modestbranding: 0, rel:0 }
                    }
                }}
                className='react-player'
                width='80%'
                height='80%'
                playing={true}
                muted={true}
            />

        </div>

    );
}

export default PaginaVideo