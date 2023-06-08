import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CircleIcon from '@mui/icons-material/Circle';
import '../UI/Mui.css'
import { VideoDataContext } from '../Context';
import AlertDialog from './AlertDialog';

export default function FloatingActionButton({ categoria, color, isFormCategoriasVisible }) {

    // falta funcion para generar "categoria"
    const videoDataContext = useContext(VideoDataContext)
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
        top: 4,
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

                    {isFormCategoriasVisible &&
                        <CircleIcon sx={{ mr: 1, ...CircleStyles }} />}

                    {isFormCategoriasVisible &&
                        <AlertDialog
                            sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
                            CancelStyles={CancelStyles}
                            estilos={{ position: 'absolute', zIndex: 2, right: -3, top: 4 }}
                            dialogTitle={"Eliminar Categoría ? "}
                            dialogContent={categoria.nombre}
                            onDelete={(event) => eliminarCategoria(event, categoria.id)}
                        />}

                </Fab>
            </Link>

        </Box>
    );
}