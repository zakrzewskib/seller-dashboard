import './App.css';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import { CssBaseline } from '@mui/material';

function App() {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#7E57C2',
      },
      background: {
        default: '#424242',
      },
      cardBackground: '#616161',
      fontColor: '#fff',
    },
    // typography: {
    //   allVariants: {
    //     color: '#fff',
    //   },
    // },
  });

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: '#FEAC34',
      },
      background: {
        default: '#fff',
      },
      cardBackground: '#bdbdbd',
      fontColor: '#212121',
    },
  });

  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard theme={theme} />
    </ThemeProvider>
  );
}

export default App;
