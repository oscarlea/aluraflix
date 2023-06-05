import { useState } from "react";
import { styled } from "styled-components";
import { toast } from "react-toastify";


const SInputColor = styled.input`
    position: absolute;
    right: 2rem;
    padding: .3rem;
    top: 50%;
    transform: translate(0, -50%);
`

const Button = styled.button`
    position: absolute;
    right: 2rem;
    bottom : 5px;
`
const InputColor = ({ id, actualizarColor, colorPrimario }) => {

    const [color, setColor] = useState(colorPrimario);
    const [tempColor, setTempColor] = useState(colorPrimario);

    const handleChange = (evento) => {
        setTempColor(evento.target.value);
    };

    const handleAceptar = () => {
        setColor(tempColor);
        actualizarColor(tempColor, id);

        toast.success("Color actualizado correctamente");
    };

    return (

        <div>
            <SInputColor
                type="color"
                className="input-color"
                value={tempColor}
                onChange={handleChange}
                
            />
            <Button onClick={handleAceptar}>Aceptar</Button>
        </div>
       
    )

}

export default InputColor;
