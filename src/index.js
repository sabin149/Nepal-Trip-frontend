import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./Global.css"
import reportWebVitals from './reportWebVitals';
import DataProvider from "./redux/store"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <DataProvider>
   <App />
   <ToastContainer/>
   </DataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
