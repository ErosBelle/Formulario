function LeerDatos() {
    Nombre = document.getElementById('Nombre').value
    Correo = document.getElementById('Correo').value
    Mensaje = document.getElementById('Mensaje').value
    ValidarData(Nombre,Correo,Mensaje)
    GuardarLocalStorage(Nombre,Correo,Mensaje)
}

formulario.addEventListener ('submit', (e)=>{
    e.preventDefault ()
    LeerDatos ()
})

function ValidarData( Nombre,Correo,Mensaje) {
    if (Nombre.length==0 || Correo.length==0 || Mensaje.length==0) {
        Swal.fire({
            title: 'Error',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool',
            iconColor: 'purple'
        })
    }
}

function GuardarLocalStorage(Nombre,Correo,Mensaje) {
    localStorage.setItem('Nombre',Nombre)
    localStorage.setItem('Correo',Correo)
    localStorage.setItem('Mensaje',Mensaje)
}

function ListarData() {
    let NombreUsu = localStorage.getItem('Nombre')
    let CorreoUsu = localStorage.getItem('Correo')
    let MensajeUsu = localStorage.getItem('Mensaje')
}


function GuardarLocalStorage(Nombre,Correo,Mensaje) {
    localStorage.setItem('Nombre',Nombre)
    localStorage.setItem('Correo',Correo)
    localStorage.setItem('Mensaje',Mensaje)
    ListarData ()
}



