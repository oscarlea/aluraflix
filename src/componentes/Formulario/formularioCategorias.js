import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, FormContainer, TituloFormulario } from "../../UI";
import styled from "@emotion/styled";
import Button from '@mui/material/Button';
//import Container from "@mui/material/Container";
import '../../UI/Mui.css'
import FormTextFields from "../TextField";


const Div = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0;
`

const FormularioCategorias = ({ cambiarMostrar, nuevaCategoria }) => {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [colorPrimario, setColorPrimario] = useState("#7d7d7d");


    return (

        <FormContainer className="FormContainer">

            <Form onSubmit={(e) => {
                e.preventDefault()
                nuevaCategoria({ id: uuidv4(), nombre, descripcion, colorPrimario })

                setNombre(""); 
                setDescripcion(""); 
                setColorPrimario("7d7d7d");
/*                 cambiarMostrar();                */
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
