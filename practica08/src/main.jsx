import React from 'react'
import ReactDOM from 'react-dom/client'
//import MyFieldSet from './myFieldSet.jsx'
//import App from './App.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <myFieldSet titulo="Datos personales" text1="Nombre" text2="password" />
    <input type="submit" value="Enviar datos"/>
    <formulario></formulario>
  </React.StrictMode>,
)
