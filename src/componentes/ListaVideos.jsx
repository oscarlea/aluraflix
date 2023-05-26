import { useState, useEffect, memo } from "react"
import { buscar } from "../api/api"
import { Link } from "react-router-dom"
import { TiDelete } from "react-icons/ti"
import styled from "styled-components"
import { StyledTituloVideo, StyledTituloAutor } from "../UI"
import { amarillo } from "../UI/variables"
import { eliminarVideoApi } from "../api/api"


const StyledBoxVideos = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;    
`

const StyledBoxVideo = styled.div`
    position: relative;
    width: 100%;
    height: inherit; 
    border: 2px solid;
    max-width: 324px;
`

const StyledLinkRoute = styled(Link)`
    text-decoration: none;    
`

const StyleTiDelete = styled(TiDelete)`
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: ${amarillo};
    font-size: 3.5rem;
`

const StyledThumbnailVideo = styled.img`
    width: 100%;
    position: relative;    
`

const StyledBoxTextosVideo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 0;
    gap: 1rem;
`


const ListaVideos = ({ url, colorPrimario }) => {

    const [videos, setData] = useState([])

    useEffect(() => {
        buscar(url, setData)
    }, [url])


    const eliminarVideo = (event, id) => {
        event.stopPropagation();
        const videosActualizados = videos.filter((video) => video.id !== id)
        setData(videosActualizados)
        eliminarVideoApi(id)
    }


    return (
        videos.length > 0 &&

        <StyledBoxVideos>
            {
                videos.map(video => {
                    const { id } = video;

                    return (
                        <StyledBoxVideo style={{ borderColor: colorPrimario }} key={id}>
                            <StyleTiDelete onClick={(event) => eliminarVideo(event, id)} />

                            <StyledLinkRoute to={`/videos/${id}`} className="video__link">

                                {<StyledThumbnailVideo src={video.thumbnail_url} alt={video.titulo} />}

                                <StyledBoxTextosVideo>
                                    <StyledTituloVideo>{"- " + video.titulo}</StyledTituloVideo>
                                    <StyledTituloAutor>{"- " + video.author_name}</StyledTituloAutor>
                                </StyledBoxTextosVideo>

                            </StyledLinkRoute>

                        </StyledBoxVideo>
                    );
                })
            }
        </StyledBoxVideos>

    )
}

export default memo(ListaVideos)


