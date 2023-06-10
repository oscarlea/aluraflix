import { Fragment, memo, useContext } from "react";
import styled from "styled-components";
import { amarillo } from "../UI/variables";
import ActionAreaCard from "./Card";
import { Box } from "@mui/material";
import { VideoDataContext } from "../Context";


const VideoContainer = styled(Box)`
    display: grid;
    grid-gap: 10px;
    justify-content: center;

    @media (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

//------------------------------------------------------------------------------------------//

const VideoList = ({ url, id, colorPrimario }) => {

    const {videos} = useContext(VideoDataContext)
    
    const filtroIdCategoria = id;

    /*     const [videosUrl, setVideos] = useState([]);
        useEffect(() => {
            buscar(url, setVideos);
        }, [url]); */

    return (
        videos.length > 0 && (
            <VideoContainer className="VideoContainer">
                {videos.map((video) => {
                    /* const { id } = video; */

                    if (filtroIdCategoria && video.id_categoria !== filtroIdCategoria) {
                        return null; // Si filtroIdCategoria está definido y el video no coincide, no se renderiza nada
                    }

                    return (
                        <Fragment key={video.id}>
                            <ActionAreaCard video={video}
                                colorPrimario={colorPrimario}
                                key={video.id}
                                amarillo={amarillo} >
                            </ActionAreaCard>
                        </Fragment>
                    );
                })}
            </VideoContainer>
        )
    );
};

export default memo(VideoList);
