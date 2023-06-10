import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CircleIcon from '@mui/icons-material/Circle';
import '../UI/Mui.css'
import { VideoDataContext } from '../Context';
import AlertDialog from './AlertDialog';

export function FloatingActionButton({ categoria, color, isFormCategoriasVisible , handleReloadVideos}) {  //dejalo así

    const { eliminarCategoria } = useContext(VideoDataContext);


    const CircleStyles = {
        position: 'relative',
        zIndex: 1,
        right: -19,
        fontSize: "4rem",
        color: "black"
    };

    const CancelStyles = {
        position: 'absolute',
        zIndex: 2,
        right: "5px",
        top: 0,
        bottom: 0,
        margin: "auto",
        fontSize: "4rem",
    };

    const FabStyles = {
        color: color,
        backgroundColor: categoria.colorPrimario,

        ":hover": {
            backgroundColor: "#40423e",
            color: "white"
        },

        '@media (max-width: 768px)': {
            height: "auto"
        },

    };


    return (
        <Box sx={{ '& > :not(style)': { m: 1, position: 'relative' } }}>

                <Link to={`/categoria/${categoria.id}`} key={categoria.id} onClick={handleReloadVideos} >

                    <Fab variant="extended" aria-label="add" size="large" sx={{ ...FabStyles }}>
                        {categoria.nombre}

                        {isFormCategoriasVisible &&
                            <Fragment >

                                <CircleIcon sx={{ mr: 1, ...CircleStyles }} />
                                <AlertDialog
                                    sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
                                    CancelStyles={CancelStyles}
                                    /* estilos={{ position: 'absolute', zIndex: 2, right: -3, top: 4 }}  */
                                    dialogTitle={"Eliminar Categoría ? "}
                                    dialogContent={categoria.nombre}
                                    onDelete={(event) => eliminarCategoria(event, categoria.id)}
                                />

                            </Fragment>
                        }

                    </Fab>
                </Link>

        </Box>
    );
}