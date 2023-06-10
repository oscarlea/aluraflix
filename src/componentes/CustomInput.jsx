import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

export function CustomInputBase({ searchTerm, handleChange, tipo, handleSearch }) {

    const handleClear = () => {
        handleChange({ target: { value: '' } }); 
    };

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
        >

            <InputBase
                sx={{ ml: 1, flex: 1, fontSize: "2rem" }}
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search google maps' }}
                value={searchTerm}
                onChange={handleChange}
            />

            <IconButton onClick={handleClear} sx={{ p: '10px', padding: "0 !important" }} aria-label="directions">
                <ClearIcon style={{ fontSize: "3rem" }} />
            </IconButton>

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            <IconButton onClick={handleSearch} type="button" sx={{ p: '10px', padding: "0 !important" }} aria-label="search">
                <SearchIcon style={{ fontSize: "3rem" }} />
            </IconButton>

        </Paper>
    );
}