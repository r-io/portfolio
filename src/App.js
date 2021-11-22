import './App.css';

import { createTheme, ThemeProvider } from '@mui/material';

import FirstContent from './components/firstContent/FirstContent';
import SecondContent from './components/secondContent/SecondContent';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#173a5e',
    },
    secondary: {
      main: '#0288d1',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <FirstContent />
        <SecondContent />
      </div>
    </ThemeProvider>
  );
}
