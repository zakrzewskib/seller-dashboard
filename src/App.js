import './App.css';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import { CssBaseline, FormControlLabel, Switch } from '@mui/material';

function App() {
  const darkTheme = createTheme({
    name: 'darkTheme',
    palette: {
      primary: {
        main: '#7E57C2',
      },
      notActive: {
        main: '#616161',
      },
      background: {
        default: '#424242',
      },
      cardBackground: '#616161',
      fontColor: '#fff',
      lightGrey: '#BDBDBD',
    },
    // typography: {
    //   allVariants: {
    //     color: '#fff',
    //   },
    // },

    overrides: {
      overrides: {
        Switch: {
          // Switch should look different
        },
      },
    },
  });

  const lightTheme = createTheme({
    name: 'lightTheme',
    palette: {
      primary: {
        main: '#FEAC34',
      },
      background: {
        default: '#fff',
      },
      notActive: {
        main: '#616161',
      },
      cardBackground: '#bdbdbd',
      fontColor: '#212121',
    },
  });

  const [theme, setTheme] = useState(darkTheme);
  const [checked, setChecked] = useState(true);

  const [key, setKey] = useState(1);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    const theme = checked ? lightTheme : darkTheme;
    setTheme(theme);

    setKey(Math.random());
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormControlLabel
        control={
          <Switch
            onChange={handleChange}
            checked={checked}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label="Switch theme"
      />
      <Dashboard theme={theme} keyToMountAgain={key} />
    </ThemeProvider>
  );
}

export default App;
