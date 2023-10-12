const formulario = document.getElementById("formulario")
    const miFieldSet = (legend, txt1, txt2) => {
        return `
        <fieldset>
            <legend>${legend} </legend>
            <label for="01">${txt1}:</label>
            <input type="text" id="01">
            <label for="02">${txt2}</label>
            <input type="text" id="02">
        </fieldset>
        `
    }
formulario.innerHTML = miFieldSet("Info Personal","Nombre","Correo")
formulario.innerHTML = miFieldSet("Info Direccion","Direccion","Ciudad")