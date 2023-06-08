import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Tooltip } from '@mui/material';
import PlayCircleSharpIcon from '@mui/icons-material/PlayCircleSharp';
import '../UI/Mui.css'
import { VideoDataContext } from '../Context';
import { amarillo } from '../UI/variables';
import AlertDialog from './AlertDialog';


export default function ActionAreaCard({ video, colorPrimario }) {

    const videoDataContext = useContext(VideoDataContext)
    const eliminarVideo = videoDataContext.eliminarVideo
    const isFormVideosVisible = videoDataContext.isFormVideosVisible

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

                <CardActions sx={{ justifyContent: "space-between" }} >
                    <Link to={`/videos/${video.id}`} >
                        <Tooltip title={<Typography fontSize={12}>Ver</Typography>} placement="top" sx={{ fontSize: 20 }}>
                            <PlayCircleSharpIcon style={{ fontSize: 40, color: amarillo }} />
                        </Tooltip>
                    </Link>

                    {isFormVideosVisible &&
                        <AlertDialog
                            sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
                            dialogTitle={"Eliminar Video ? "}
                            dialogContent={video.titulo}
                            onDelete={(event) => eliminarVideo(event, video.id)} />
                    }
                </CardActions>

            </CardActionArea>
        </Card>
    );
}