import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#59d75f',
      contrastText: '#f5f5f5'
      
    },
    secondary: {
      main: '#222222',
    },
  },
  typography: {
    h4: {
      fontWeight: 700, // or 'bold'
      fontSize: 30
    }
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 15,
          fontWeight: 600
        },
      },
    },
  }
});

export default theme;