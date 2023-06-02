import { useState, useEffect, memo } from "react";
import { buscar } from "../api/api";
import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import { TituloVideo, TituloAutor, TituloCategoria } from "../UI";
import { amarillo } from "../UI/variables";
import { eliminarVideoApi } from "../api/api";

/* const VideoContainer = styled.div`
justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  &::after {
    content: "";
    flex: 1 1 auto;
  }
 
`;
 */
const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc((100% - 3rem) / 4), 1fr));
  gap: 1rem;
`;

const VideoItem = styled.div`
  position: relative;
  width: 100%;
  height: inherit;
  border: 2px solid;
  max-width: 324px;
  
`;

const SLink = styled(Link)`
  text-decoration: none;
`;

const DeleteIcon = styled(TiDelete)`
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: ${amarillo};
  font-size: 3.5rem;
`;

const VideoThumbnail = styled.img`
  width: 100%;
  position: relative;
`;

const VideoTextContainer = styled.div`
justify-content: space-between;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0;
  gap: 1rem;
  color: ${({theme}) => theme.text};
`;


const VideoList = ({ url, colorPrimario  }) => {
    const [videos, setData] = useState([]);

    useEffect(() => {
        buscar(url, setData);
    }, [url]); 
 
     /*
    const eliminarVideo = (event, id) => {
        event.stopPropagation();
        const videosActualizados = videos.filter((video) => video.id !== id);
        setData(videosActualizados);
        eliminarVideoApi(id);
    };
 */
    return (
        videos.length > 0 && (
            <VideoContainer className="VideoContainer">
                {videos.map((video) => {
                    const { id } = video;

                    return (
                        <VideoItem style={{ borderColor: colorPrimario }} key={id} className="VideoItem">

                          <TituloCategoria />

                            {/* <DeleteIcon onClick={(event) => eliminarVideo(event, id)} /> */}

                            <SLink to={`/videos/${id}`} >

                                {<VideoThumbnail src={video.thumbnail_url} alt={video.titulo} />}

                                <VideoTextContainer>
                                    <TituloVideo>{"- " + video.titulo}</TituloVideo>
                                    <TituloAutor>{"- " + video.author_name}</TituloAutor>
                                </VideoTextContainer>

                            </SLink>

                        </VideoItem>
                    );
                })}
            </VideoContainer>
        )
    );
};

export default memo(VideoList);
