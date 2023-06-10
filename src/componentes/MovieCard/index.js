import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const CardInfo = styled(CardContent)(({theme}) => ({
    '&:last-child': {
        paddingBottom: theme.spacing(2),
      }
  }));

const MovieCard = ({ movie }) => {
    return (
        <Card sx={{ maxWidth: 300, position: "relative" }}>
            <Box sx={{ position: 'relative'}}>
                <CardMedia
                    component="img"
                    height="241"
                    image={movie.thumbnail_url}
                    alt={movie.titulo}/>
            </Box>

            <CardInfo>
                <Typography variant="h6" gutterBottom component="div">
                    {movie.titulo}
                </Typography>

{/*                 <Typography mb={0} variant="subtitle1" gutterBottom component="div">
                    {movie.autor}
                </Typography> */}
            </CardInfo>
        </Card>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        thumbnail_url: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        releaseDate: PropTypes.string
    }).isRequired,
}

export default MovieCard;