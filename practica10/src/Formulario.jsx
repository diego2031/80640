
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function Formulario (props) {
    const [Cargando, setCargando] = useState(false)
    const [datosFormulario, setDatosFormulario] = useState(
        {nombre: '',
        password: ''}
    )

    const hacerPeticion = async () => {
        try{
            const response = await axios.post('http://localhost:4567/ruta2',datosFormulario)
            console.log(response.data)
            return response.data
        }catch (error){
            throw error
        }
    }

    const procesarFormulario = async (evento) => {
        evento.preventDefault()
        console.log("datos recuperados del formulario", datosFormulario)
        setCargando(true)
        try {
            const response = await hacerPeticion()
            console.log(response.alumno)
            setCargando(false)
            //validar los datos del formulario contra los del backend
            if (datosFormulario.nombre == response.alumno) {
                console.log('Ok, el usuario existe')
            } else {
                console.log('Error, el usuario no existe')
            }
        } catch (error) {
            console.log('error:', error)
            setCargando(false)
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
            <form onSubmit={ procesarFormulario }>
            <h1>Inicio de sesión</h1>
                <Box m={5}>
                    <TextField label="Nombre:" variant="outlined" fullWidth onChange={cambiosFormulario} name="nombre" value={datosFormulario.nombre}></TextField>
                </Box>
                <Box m={5}>
                    <TextField label="Contraseña:" variant="outlined" type="password" fullWidth onChange={cambiosFormulario} name="password" value={datosFormulario.password}></TextField>
                </Box>
                <Box m={5}>
                    <Button variant="contained" type="submit" color="primary" fullWidth disabled={Cargando}>Iniciar Sesión</Button>
                </Box>
            </form>
        </>
    ) 
}

export default Formulario;