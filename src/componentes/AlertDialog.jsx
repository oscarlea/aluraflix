import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import { amarillo } from '../UI/variables';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';


export default function AlertDialog({ dialogTitle, dialogContent, onDelete, CancelStyles }) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleDelete = (event) => {
        setOpen(false);
        onDelete(event); // Llama a la función onDelete proporcionada desde el componente padre
    };

    return (
        <div>

            <Tooltip title={<Typography fontSize={12}>Eliminar</Typography>} placement="top" sx={{ fontSize: "2rem" }}> 
                <CancelSharpIcon
                    style={{ fontSize: "4rem", color: amarillo }}
                    sx={{ mr: 1, ...CancelStyles }}
                    onClick={handleClickOpen} />
            </Tooltip>

            <Dialog
                open={open}
                onClose={handleCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{ fontSize: "1.8rem" }} >
                    {dialogTitle}
                </DialogTitle>

                <DialogContent  >
                    <DialogContentText id="alert-dialog-description" style={{ fontSize: "1.5rem" }} >
                        {dialogContent}
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleDelete} style={{ fontSize: "1.2rem" }} >Eliminar</Button>
                    <Button onClick={handleCancel} style={{ fontSize: "1.2rem" }} autoFocus>
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}