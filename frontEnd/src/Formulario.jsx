import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Formulario (props) {
    const [Cargando, setCargando] = useState(false)
    const [datosFormulario, setDatosFormulario] = useState(
        {nombre: ''}
    )

    const insertar = async () => {
        try{
            //const response = await axios.post('http://localhost:4567/ruta2',datosFormulario)
            const response = await axios.get('http://localhost:4567/insertar',{params: datosFormulario})
            console.log(response.data)
            return response.data
        }catch (error){
            throw error
        }
    }
    const mostrar = async () => {
        try{
            const response = await axios.get('http://localhost:4567/mostrar',{params: datosFormulario})
            console.log(response.data)
            return response.data
        }catch (error){
            throw error
        }
    }
    const editar = async () => {
        try{
            const response = await axios.get('http://localhost:4567/editar',{params: datosFormulario})
            console.log(response.data)
            return response.data
        }catch (error){
            throw error
        }
    }
    const eliminar = async () => {
        try{
            const response = await axios.get('http://localhost:4567/eliminar',{params: datosFormulario})
            console.log(response.data)
            return response.data
        }catch (error){
            throw error
        }
    }

    const cambiosFormulario = (evento) => {
        console.log(evento.target)
        const {name, value} = evento.target
        setDatosFormulario ({
            ...datosFormulario,
            [name]: value
        })
    }

    return (
        <>
            <form>
            <h1>Saludos</h1>
                <Box m={5}>
                    <TextField label="Nombre:" variant="outlined" fullWidth onChange={cambiosFormulario} name="nombre" value={datosFormulario.nombre}></TextField>
                </Box>
                <Box m={5}>
                    <Button onClick={insertar} variant="contained" color="primary" fullWidth disabled={Cargando}>Insertar</Button>
                </Box>
                <Box m={5}>
                    <Button onClick={mostrar} variant="contained" color="primary" fullWidth disabled={Cargando}>Mostrar</Button>
                </Box>
                <Box m={5}>
                    <Button onClick={editar} variant="contained" color="primary" fullWidth disabled={Cargando}>Editar</Button>
                </Box>
                <Box m={5}>
                    <Button onClick={eliminar} variant="contained" color="primary" fullWidth disabled={Cargando}>Eliminar</Button>
                </Box>
            </form>
        </>
    ) 
}

export default Formulario;