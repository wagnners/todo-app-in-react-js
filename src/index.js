import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import './sass/styles.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
    palette: {
        primary: {
            main: "#70aa87",
        }
    }
});


root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);