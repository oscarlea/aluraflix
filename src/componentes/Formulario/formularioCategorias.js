import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Campo from "../Campo";
import Boton from "../Boton";
import { Form, TituloCategoria, FormContainer } from "../../UI";
import { registrarCategoria } from "../../api/api";
//import styled from "@emotion/styled";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';


/* const MuiContainer = styled(Container)`
    display: flex;
    justify-content: center;
` */



const FormularioCategorias = ({ agregarNuevaCategoria, cambiarMostrar }) => {

    const [nombreF, actualizarNombre] = useState("");
    const [color, actualizarColor] = useState("#7d7d7d");
    const [descripcionF, actualizarDescripcionC] = useState("");

    const nuevaCategoria = async (e) => {
        e.preventDefault();
        const id = uuidv4();
        const nombre = nombreF;
        const descripcion = descripcionF;
        const colorPrimario = color;
        const datosAEnviar = {
            id,
            nombre,
            descripcion,
            colorPrimario,
        };
        registrarCategoria(datosAEnviar);
        agregarNuevaCategoria(datosAEnviar);
        cambiarMostrar();
    };

    return (

        <Container component={"div"} maxWidth="lg" style={{ display: "flex", justifyContent: "center" }} >

            {/* <FormContainer className="FormContainer"> */}

            <Form onSubmit={nuevaCategoria}>

                <Typography variant="h3" align="center">
                    Nueva Categoria
                </Typography>

                <TituloCategoria>Nueva Categoria</TituloCategoria>
{/*                 
                <Campo
                    titulo="Nombre"
                    placeholder="Nombre de la categoría"
                    required
                    valor={nombreF}
                    actualizarValor={actualizarNombre}
                />

                <Campo
                    titulo="Descripción"
                    placeholder="Ingresar descripción"
                    required
                    valor={descripcionF}
                    actualizarValor={actualizarDescripcionC}
                />
 */}


                <TextField
                    id="Nombre"
                    label="Nombre de la categoría"
                    variant="outlined"
                    required
                    defaultValue=""
                    autoFocus
                    valor={nombreF}
                    //actualizarValor={actualizarNombre}
                    fullWidth={true}
                    margin="normal"
                    value={nombreF}
                    onChange={(e) => {
                        console.log(e.target.value)
                    }}
                />


                <TextField
                    id="descripcion"
                    label="Descripción de la categoría"
                    variant="outlined"
                    required
                    defaultValue=""
                    valor={descripcionF}
                    //actualizarValor={actualizarNombre}
                    fullWidth={true}
                    margin="normal"
                />



                <Campo
                    titulo="Color"
                    placeholder="Ingresar color hexadecimal"
                    required
                    valor={color}
                    defaultValue={color}
                    actualizarValor={actualizarColor}
                    type="color"
                />

                <div className="button-container">
                    <Boton titulo="Guardar" />

                    <Button variant="contained" fontSize="20px" >Registrar</Button>
                </div>
            </Form>

            {/* </FormContainer> */}

        </Container>

    );
};

export default FormularioCategorias;
