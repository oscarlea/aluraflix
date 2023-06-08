import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { buscar } from "../api/api"
import ReactPlayer from "react-player";
import styled from "styled-components"
import { GoBackIcon  } from "../UI";


const PlayerWrapper = styled.main`
    width: 80%;
    height: 0;
    /* padding: 3rem; */
    padding-top:  56.25% ;
    background: ${({ theme }) => theme.body};
    position: relative;

    @media (max-width: 1023px) {
        width: 100%;
    }  
`
const StyledReactPlayer = styled(ReactPlayer)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
`
/* const StyledVideoContainer = styled.div`
    padding: 2rem;
    position: absolute;
    top: 0;
    text-align: center;
    left: 0;
    right: 0;

      @media (max-width: 1023px) {
        display: none;
    }  
`
 */
const Div = styled.div`
    position: relative;
    max-width: 1440px;
    width: 100%;
    padding: 3rem;
    display: flex; 
    justify-content: center;
    background-color: ${({ theme }) => theme.body}; 

    @media (max-width: 1023px) {
        padding: 0;
    }  

`

//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----//----


const PaginaVideoPlayer = ({ url }) => {
    const [video, setData] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        buscar(`/videos/${id}`, setData).catch(() => {
            navigate("/not-found")
        })
    }, [id, navigate])


    const goBack = () => {
        navigate(-1); 
    };

    return (
        <Div >



             <GoBackIcon onClick={goBack} style={{ position: "absolute", bottom: "50%", left: "0" }} />

            <PlayerWrapper className="PlayerWrapper"> 

{/*             <StyledVideoContainer className="StyledVideoContainer" >

                <TituloVideo className="TituloVideo">
                    {video.author_name + " : " + video.titulo}
                </TituloVideo>

            </StyledVideoContainer>
*/}

                 <StyledReactPlayer
                    url={video.videoUrl}
                    config={{
                        youtube: {
                            playerVars: { disablekb: 0, controls: 2, fs: 1, modestbranding: 0, rel: 0 }
                        }
                    }}
                    className='react-player'
                    width='100%'
                    height='100%'
                    playing={true}
                    muted={true}
                />

            </PlayerWrapper> 
        </Div>
    );
}

export default PaginaVideoPlayer