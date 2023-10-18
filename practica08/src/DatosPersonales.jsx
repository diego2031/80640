function DatosPersonales() {
    return(
        <>
        <fieldset>
       <legend>Datos Personales</legend>
       <label htmlFor="Nombre"> Nombre: </label>
       <input type="text" id ="Nombre" />
       <label htmlFor={text2}>{text2}</label>
       <input type="text" id={text2}/>
       </fieldset>
        </>
    )
    
}
export default DatosPersonales