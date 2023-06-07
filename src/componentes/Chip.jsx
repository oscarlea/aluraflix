import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../UI/Mui.css'
import { amarillo } from '../UI/variables';

export default function ClickableAndDeletableChips({categoria}) {
    console.log(categoria)
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip sx={{m: 1, color:"#000000", bgcolor:categoria.colorPrimario, fontSize:"40" }} style={{fontSize:"40"}}
        label={categoria.nombre}
        onClick={handleClick}
        onDelete={handleDelete}
        size="large"
        icon={<DeleteForeverIcon style={{ fontSize: 40, color: amarillo, marginLeft: 'auto' }} />}
      />

    </Stack>
  );
}