import { useState, useContext } from "react";
//import { v4 as uuidv4 } from "uuid";
import { Form, FormContainer, TituloFormulario } from "../UI";
import styled from "@emotion/styled";
import Button from '@mui/material/Button';
import FormTextFields from "./TextField";
import { VideoDataContext } from "../Context";


const Div = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: min(2rem 2vw) 0;
`

const FormularioCategorias = () => {

    const videoDataContext = useContext(VideoDataContext)
    const nuevaCategoria = videoDataContext.nuevaCategoria

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [colorPrimario, setColorPrimario] = useState("#7d7d7d");


    return (
        <FormContainer className="FormContainer">


            <Form onSubmit={(e) => {
                e.preventDefault()
                nuevaCategoria(e, { nombre, descripcion, colorPrimario })
                setNombre(""); 
                setDescripcion(""); 
                setColorPrimario("#7d7d7d");
            }}>
 
                <TituloFormulario>Nueva Categoría</TituloFormulario>

                <FormTextFields
                    titulo="Nombre de la categoría"
                    required
                    valor={nombre}
                    actualizarValor={setNombre}
                />

                <FormTextFields
                    titulo="Descripción de la categoría"
                    required
                    valor={descripcion}
                    actualizarValor={setDescripcion}
                />

                <FormTextFields
                    titulo="Color"
                    required
                    valor={colorPrimario}
                    actualizarValor={setColorPrimario}
                    type="color"
                />

                <Div className="button-container">
                    <Button variant="contained" type="submit" size="large" style={{ fontSize: "1.5rem" }}  >Registrar</Button>
                </Div>

            </Form>
        
        </FormContainer>
    );
};

export default FormularioCategorias;
