import "./VideoDetalle.css";
import { TiDelete } from "react-icons/ti"
import styled from "styled-components"
import { StyledTituloAutor, StyledTituloVideo } from "../../UI";

const StyledBoxVideo = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border: 2px solid;
    /*     box-sizing: border-box; */
    max-width: 324px;
    /* max-height: 200px; */
`

const StyleTiDelete = styled(TiDelete)`
    position: absolute;
    right: -15px;
    top: -15px;
    color: black;
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


const VideoDetalle = (props) => {
    const { id, titulo, thumbnail_url, author_name } = props.datos;
    const { colorPrimario, eliminarVideo } = props;

    const handleClick = () => {

    };


    return (

        <div className="video" onClick={handleClick} style={{ borderColor: colorPrimario }}   >

            <StyleTiDelete onClick={(event) => eliminarVideo(event, id)} />

            {<StyledThumbnailVideo src={thumbnail_url} alt={titulo} />}

            <StyledBoxTextosVideo>
                <StyledTituloVideo> {"- " + titulo} </StyledTituloVideo>
                <StyledTituloAutor> {"- " + author_name} </StyledTituloAutor>
            </StyledBoxTextosVideo>

        </div>

    );

}

export default VideoDetalle