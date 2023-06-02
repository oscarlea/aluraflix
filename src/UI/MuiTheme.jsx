import   createTheme  from '@mui/system/createTheme';
//import   ThemeProvider  from '@mui/system/ThemeProvider';
//import   Box  from '@mui/system/Box';



const MuiTheme = createTheme({
    typography: {
        fontFamily: 'Roboto',
        fontSize: 12,
        button: {
            fontSize: '2rem',
            fontStyle: 'italic',
        },

    },

    palette: {
        background: {
            paper: '#fff',
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        },
        action: {
            active: '#001E3C',
        },
        success: {
            dark: '#009688',
        },

    },



});


export default MuiTheme