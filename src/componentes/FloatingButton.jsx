import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
//import NavigationIcon from '@mui/icons-material/Navigation';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
//import CancelIcon from '@mui/icons-material/Cancel';
//import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';


export default function FloatingActionButton({ categoria, color, amarillo, mostrarFormCategorias, eliminarCategoria }) {




    const CircleStyles = {
        position: 'relative',
        zIndex: 1,
        right: -19,
        fontSize: 40,
        color: "black"
    };

    const CancelStyles = {
        position: 'absolute',
        zIndex: 2,
        right: -3,
        fontSize: 40,
        color: amarillo
    };

    const FabStyles = {
        color: color,
        backgroundColor: categoria.colorPrimario,
        fontSize: "2rem",
        ":hover": {
            backgroundColor: "#40423e",
            color: "white"
        }
    };

    return (
        <Box sx={{ '& > :not(style)': { m: 1, position: 'relative' } }}>


            <Link to={`/categoria/${categoria.id}`} key={categoria.id} >
                <Fab variant="extended" aria-label="add" sx={{ ...FabStyles }}>
                    {categoria.nombre}
                    {mostrarFormCategorias && <CircleIcon sx={{ mr: 1, ...CircleStyles }} />}
                    {mostrarFormCategorias && <CancelSharpIcon sx={{ mr: 1, ...CancelStyles }} onClick={(event) => {
                        /*                         console.log(event, categoria.id) */
                        event.stopPropagation();
                        event.preventDefault();
                        eliminarCategoria(event, categoria.id)

                    }} />}
                </Fab>
            </Link>


        </Box>
    );
}