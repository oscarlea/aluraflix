import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { buscar } from "../api/api";
import ReactPlayer from "react-player";
import './Video.css'

const Video = () => {
    const [video, setVideo] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        buscar(`/videos/${id}`, setVideo).catch(() => {
            navigate("/not-found");
        });
    }, [id, navigate]);
    
    return (

        <div className='player-wrapper'  >
            <h2>{video.titulo}</h2>
            <ReactPlayer
                url={video.videoUrl}
                className='react-player'
                 width='80%'
                height='80%' 
                controls
            />
        </div>
        
    );
};

export default Video;
