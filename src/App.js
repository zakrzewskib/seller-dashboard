import './App.css';

import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';

function App() {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: deepPurple[400],
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: '#FEAC34',
      },
    },
  });

  const [theme, setTheme] = useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Change theme</Button>
    </ThemeProvider>
  );
}

export default App;
