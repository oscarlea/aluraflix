import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Form, FormContainer, TituloFormulario } from "../../UI";
import { getVideoInfo, registrarVideo } from '../../api/api';
import { toast } from "react-toastify";
import SelectLabels from "../Select";
import FormTextFields from "../TextField";
import { styled } from "styled-components";
import Button from "@mui/material/Button";


const Div = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0;
`

const FormularioVideos = ({ categorias, actualizarVideos, cambiarMostrarVideos }) => {

    const navigate = useNavigate();
    const formRef = useRef(null);

    const [id_categoria, actualizarIdCategoria] = useState("");
    const [videoUrl, actualizarVideoUrl] = useState("");

    const nuevoVideo = async (e) => {
        e.preventDefault();
        const datosAEnviar = {
            id: uuidv4(),
            id_categoria,
            videoUrl,
            videoID: getVideoId(videoUrl),
            titulo: "",
            thumbnail_url: "",
            author_name: "",
        };
        try {
            const videoInfo = await getVideoInfo(videoUrl);
            datosAEnviar.titulo = videoInfo.title;
            datosAEnviar.thumbnail_url = videoInfo.thumbnail_url;
            datosAEnviar.author_name = videoInfo.author_name;
            await registrarVideo(datosAEnviar);
            actualizarVideos(datosAEnviar)
            /* formRef.current.reset(); */
            actualizarIdCategoria(""); 
            actualizarVideoUrl(""); 
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

            <Form onSubmit={nuevoVideo} ref={formRef}>

                <TituloFormulario>Nuevo Video</TituloFormulario>

                <SelectLabels
                    valor={id_categoria}
                    actualizarIdCategoria={actualizarIdCategoria}
                    categorias={categorias}
                />

                <FormTextFields
                    titulo="URL del Video"
                    placeholder="URL del Video"
                    required
                    valor={videoUrl}
                    actualizarValor={actualizarVideoUrl}
                    textoAyuda="Ejemplo : https://www.youtube.com/watch?v=R9uaBxgCkyA&pp=ygUFYWx1cmE%3D"
                />

                <Div className="button-container">
                    <Button variant="contained" type="submit" size="large" style={{ fontSize: "1.5rem" }} >Registrar</Button>
                </Div>

            </Form>

        </FormContainer>
    );
}

export default FormularioVideos;
