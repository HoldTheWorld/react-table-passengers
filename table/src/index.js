import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PassengersContextProvider } from './context/passengersContext' 


ReactDOM.render(
  <React.StrictMode>
    <PassengersContextProvider>
      <App />
    </PassengersContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

