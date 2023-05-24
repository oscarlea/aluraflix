import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Formulario.css";
import Campo from "../Campo";
import Boton from "../Boton";

import { registrarCategoria } from "../../api/api";

const FormularioCategorias = ({ agregarNuevaCategoria }) => {

    const [nombreF, actualizarNombre] = useState("");
    const [color, actualizarColor] = useState("#353535");
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
    };

    return (
        <section className="formulario">
            <form onSubmit={nuevaCategoria}>
                <h2>Nueva Categoria</h2>
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
                </div>
            </form>
        </section>
    );
};

export default FormularioCategorias;
