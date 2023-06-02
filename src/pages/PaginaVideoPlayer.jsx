import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"
import ReactPlayer from "react-player";
import styled from "styled-components"
import { TituloVideo } from "../UI";
import { fondoOscuro } from "../UI/variables";

const PlayerWrapper = styled.main`
    width: 100%;
    height: 0;
    padding-top:  56.25%;         
    background: ${fondoOscuro};
    position: relative;
`
const StyledReactPlayer = styled(ReactPlayer)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
`
const StyledVideoContainer = styled.div`
    padding: 2rem;
    position: absolute;
    top: 0;
    text-align: center;
    left: 0;
    right: 0;
`


const PaginaVideoPlayer = ({ url }) => {
    const [video, setData] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        buscar(`/videos/${id}`, setData).catch(() => {
            navigate("/not-found")
        })
    }, [id, navigate])

    return (

        <PlayerWrapper>
            <StyledVideoContainer>
                <TituloVideo>
                    {video.author_name + " : " + video.titulo}
                </TituloVideo>
            </StyledVideoContainer>
            <StyledReactPlayer
                url={video.videoUrl}
                config={{
                    youtube: {
                        playerVars: { disablekb: 0, controls: 2, fs: 1, modestbranding: 0, rel: 0 }
                    }
                }}
                className='react-player'
                width='80%'
                height='80%'
                playing={true}
                muted={true}
            />

        </PlayerWrapper>

    );
}

export default PaginaVideoPlayer