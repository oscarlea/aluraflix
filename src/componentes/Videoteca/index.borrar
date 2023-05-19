import { useState, useEffect } from "react"
import "./Videoteca.css"
import { buscar } from '../../api/api'
import { Link } from "react-router-dom"

const Videoteca = ({ url }) => {

    console.log(url)

    const [videosX, setVideos] = useState([])

    useEffect(() => {
        buscar(url, setVideos)
    }, [url])

    return (
        <section className="videos">
            {
                videosX.map(video => {
                    const { id, categoria, titulo, thumbnail_url } = video;
                    return <Link to={`/videos/${id}`} className={`video__card video-card--${categoria}`}>

                        <img src={thumbnail_url} alt="sadd" />

                        <h3 className="video-card__title">
                            {titulo}
                        </h3>

                    </Link>
                })
            }
            
            <h2>Titulo Videoteca</h2>

        </section>
    )
}

export default Videoteca
