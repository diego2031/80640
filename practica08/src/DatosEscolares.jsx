
function DatosEscolares() {
    return (
        <>
           <fieldset>
           <legend>Datos Escolares</legend>
           <label htmlFor="Carrera"> Carrera: </label>
           <input type="text" id ="Nombre" />
           <label htmlFor="Semestre">Semestre:</label>
           <input type="text" id="semestre"/>
           <label htmlFor="matricula">Matricula:</label>
           <input type="text" id="matricula"/>
           </fieldset>
            </>
        )
    
}

export default DatosEscolares