import './App.css';

import { createTheme, ThemeProvider } from '@mui/material';

import FirstContent from './components/firstContent/FirstContent';
import SecondContent from './components/secondContent/SecondContent';
import ThirdContent from './components/thirdContent/ThirdContent';

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

function Divider() {
  return (
    <svg
      className="divider"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
      height="75"
      width="100%"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 100 L50 0 L100 100 Z" fill="#173a5e" stroke="#173a5e"></path>
    </svg>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <FirstContent />
        <SecondContent />
        <Divider />
        <ThirdContent />
      </div>
    </ThemeProvider>
  );
}
