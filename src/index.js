import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChakraProvider,extendTheme,ColorModeScript} from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      100: '#171923', //bg color
      200: '#9F7AEA', //text accent color
      300: '#f1f1f1', //text color, muted text color: #ffffff @ 30%
      400: '#242734' //card color
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
  <ColorModeScript initialColorMode = {theme.config.initialColorMode}/>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

