import { React } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import PlayCircleSharpIcon from '@mui/icons-material/PlayCircleSharp';


export default function ActionAreaCard({ video, colorPrimario, eliminarVideo, mostrarFormVideos, amarillo }) {

    const commonStyles = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1,
        width: '321',
        height: '241',
    };


    return (
        <Card sx={{ maxWidth: 345, ...commonStyles, borderColor: colorPrimario }}  >
            {/* <CardActionArea component={Link} to={`/videos/${video.id}`}  > */}
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

                    <Link to={`/videos/${video.id}`}>
                        <IconButton aria-label="Play Video" 
                        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
                          >
                            <PlayCircleSharpIcon style={{ fontSize: 40, color: amarillo }} />
                            Ver
                        </IconButton>
                    </Link>

                    {mostrarFormVideos && <IconButton aria-label="Eliminar" onClick={(event) => eliminarVideo(event, video.id)}
                                            style={{ marginLeft: 'auto' }}
                                            sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
                    >
                        <CancelSharpIcon style={{ fontSize: 40, color: amarillo }} />
                        Eliminar
                    </IconButton>
                    }



                </CardActions>



            </CardActionArea>
        </Card>
    );
}