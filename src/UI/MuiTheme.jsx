import   createTheme  from '@mui/system/createTheme';
//import   ThemeProvider  from '@mui/system/ThemeProvider';
//import   Box  from '@mui/system/Box';



const MuiTheme = createTheme({
/*     typography: {
        fontFamily: 'Roboto',
        fontSize: 12,

        TextField: {
            fontSize: '2rem',
        },
    }, */
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "1em",
            },
        },
    },



});


export default MuiTheme