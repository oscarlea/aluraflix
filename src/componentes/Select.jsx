import React, { useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { VideoDataContext } from '../Context';


export default function SelectLabels({ actualizarIdCategoria, valor }) {

    const videoDataContext = useContext(VideoDataContext)
    const categorias = videoDataContext.categorias


    const handleChange = (event) => {
        actualizarIdCategoria(event.target.value)
    }

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 250, margin: 0, marginBottom: "1.8rem" }} required >
                <InputLabel id="" style={{ fontSize: '1.8rem' }} >
                    Categorías
                </InputLabel>
                <Select

                    labelId=""
                    id=""
                    value={valor}
                    label="id_categoria"
                    onChange={handleChange}
                    style={{ fontSize: '1.8rem' }}
                    size="large"
                >
                    {categorias.map((categoria) => {
                        return (
                            <MenuItem key={categoria.id} value={categoria.id} style={{ fontSize: '1.5rem' }}>{categoria.nombre}</MenuItem>
                        );
                    })}

                </Select>
                {/* <FormHelperText>With label + helper text</FormHelperText> */}
            </FormControl>
        </div>
    );
}
