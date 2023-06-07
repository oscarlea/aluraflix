import { React, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import PlayCircleSharpIcon from '@mui/icons-material/PlayCircleSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../UI/Mui.css'
import { VideoDataContext } from '../Context';
import { amarillo } from '../UI/variables';

export default function ActionAreaCard({ video, colorPrimario }) {

    const videoDataContext = useContext(VideoDataContext)
    const eliminarVideo = videoDataContext.eliminarVideo
    const mostrarFormVideos = videoDataContext.mostrarFormVideos

    const commonStyles = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1,

    };

    return (
        <Card sx={{ ...commonStyles, borderColor: colorPrimario }} style={{ margin: 0 }} >
            <CardActionArea  >

                <CardMedia
                    component="img"
                    height="241"
                    image={video.thumbnail_url}
                    alt={video.titulo}
                />

                <CardContent sx={{ height: 100, maxHeight: "100px" }} >
                    <Typography gutterBottom variant="h5" component="div">
                        {video.titulo}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {"- " + video.author_name}
                    </Typography>
                </CardContent>


                <CardActions  >

                    <Link to={`/videos/${video.id}`} >
                        {/*                         <IconButton aria-label="Play Video"
                            sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
                        >
                    </IconButton> */}
                        <PlayCircleSharpIcon style={{ fontSize: 40, color: amarillo }} />
                    </Link>


                    {mostrarFormVideos &&
                        /*      <IconButton variant="outlined" aria-label="Eliminar" onClick={(event) => eliminarVideo(event, video.id)}
                                 style={{ marginLeft: 'auto' }}
                                 sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
                             > */

                        <DeleteForeverIcon style={{ fontSize: 40, color: amarillo, marginLeft: 'auto' }} onClick={(event) => eliminarVideo(event, video.id)} />

                        /*         Eliminar */
                        /*  </IconButton> */
                    }

                </CardActions>

            </CardActionArea>
        </Card>
    );
}