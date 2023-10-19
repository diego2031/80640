function DatosPersonales() {
    return(
        <>
        <fieldset>
           <legend>Datos Personales</legend>
           <label htmlFor="Nombre"> Nombre: </label>
           <input type="text" id ="Nombre" />
           <label htmlFor="Apellido Paterno">Apellido Paterno:</label>
           <input type="text" id="semestre"/>
           <label htmlFor="matricula">Matricula:</label>
           <input type="text" id="matricula"/>
           </fieldset>
        </>
    )
    
}
export default DatosPersonales