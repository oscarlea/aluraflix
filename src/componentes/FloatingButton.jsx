import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
//import NavigationIcon from '@mui/icons-material/Navigation';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
//import CancelIcon from '@mui/icons-material/Cancel';
//import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
import '../UI/Mui.css'
import { VideoDataContext } from '../Context';
import { useContext } from 'react';
import { amarillo } from '../UI/variables';

export default function FloatingActionButton({ categoria, color, mostrarFormCategorias }) {

    // falta funcion para generar "categoria"
    const videoDataContext  = useContext(VideoDataContext)
    const eliminarCategoria = videoDataContext.eliminarCategoria

    
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

/*         '@media (max-width: 768px)': {
            fontSize: "1rem"
          },
 */
        ":hover": {
            backgroundColor: "#40423e",
            color: "white"
        },
    };



    return (
        <Box sx={{ '& > :not(style)': { m: 1, position: 'relative' } }}>

            <Link to={`/categoria/${categoria.id}`} key={categoria.id} >
                <Fab variant="extended" aria-label="add" size="large" sx={{ ...FabStyles }}>
                    {categoria.nombre}
                    {mostrarFormCategorias && <CircleIcon sx={{ mr: 1, ...CircleStyles }} />}
                    {mostrarFormCategorias && <CancelSharpIcon sx={{ mr: 1, ...CancelStyles }} onClick={(event) => {
                        event.stopPropagation();
                        event.preventDefault();
                        eliminarCategoria(event, categoria.id)
                    }} />}
                </Fab>
            </Link>

        </Box>
    );
}