import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function FormTextFields(props) {
    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return (

        <Box sx={{
            '& .MuiTextField-root': { m: 1, width: '100%', margin: 0, marginBottom: "2rem" },
        }} required >

            <div>
                <TextField required
                    fullWidth={true}
                    value={props.valor}
                    label={props.titulo}
                    type={type}
                    onInput={manejarCambio}

                    InputProps={{
                        style: {
                            fontSize: '1.8rem',
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            fontSize: '1.8rem',
                        },
                    }}

                    helperText={props.textoAyuda}
                    FormHelperTextProps={{
                        sx: {
                            fontSize: '1.5rem',
                        },
                    }}

                />
            </div>

        </Box>
    );
}