import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import styled from "styled-components";
import { Form, FormContainer, GoBackIcon, TituloCategoria } from "../../UI";
import { getVideoInfo, registrarVideo } from '../../api/api';
import { toast } from "react-toastify";

const SLink = styled(Link)`
    align-self: flex-start;
`

const VideoForm = ({ categorias, actualizarVideos }) => {

    const navigate = useNavigate();

    const [id_categoria, actualizarIdCategoria] = useState("");
    const [videoUrl, actualizarVideoUrl] = useState("");

    const nuevoVideo = async (e) => {
        e.preventDefault();
        const videoID = getVideoId(videoUrl);
        const id = uuidv4();
        const datosAEnviar = {
            id,
            id_categoria,
            titulo: "",
            videoUrl,
            thumbnail_url: "",
            author_name: "",
            videoID
        };
        try {
            const videoInfo = await getVideoInfo(videoUrl); 
            datosAEnviar.titulo = videoInfo.title;
            datosAEnviar.thumbnail_url = videoInfo.thumbnail_url;
            datosAEnviar.author_name = videoInfo.author_name;
            await registrarVideo(datosAEnviar);
            actualizarVideos(datosAEnviar)
            navigate('/');
        } catch (error) {
            toast.error(error.message);
            navigate('/');
        }
    };

    const getVideoId = (url) => {
        const match = url.match(/youtube\.com\/watch\?v=(\w+)/);
        return match ? match[1] : "";
    };

    return (
        <FormContainer className="FormContainer">
            <Form onSubmit={nuevoVideo} >
                <TituloCategoria>Nuevo Video</TituloCategoria>
                <ListaOpciones
                    valor={id_categoria}
                    actualizarIdCategoria={actualizarIdCategoria}
                    categorias={categorias}
                />
                <Campo
                    titulo="URL del Video"
                    placeholder="URL del Video"
                    required
                    valor={videoUrl}
                    actualizarValor={actualizarVideoUrl}
                />
                <div className="button-container">
                    <Boton titulo="Guardar" />
                </div>
            </Form>

            <SLink to="/" >
                <GoBackIcon />
            </SLink>
            
        </FormContainer>
    );
}

export default VideoForm;
