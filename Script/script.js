let Nombre,Correo,Mensaje

let formulario = document.getElementById('form')



formulario.addEventListener ('submit', (e)=>{
    e.preventDefault ()
    LeerDatos ()
})


function LeerDatos() {
    Nombre = document.getElementById('Nombre').value
    Correo = document.getElementById('Correo').value
    Mensaje = document.getElementById('textarea').value
    ValidarData(Nombre,Correo,Mensaje)
    GuardarLocalStorage(Nombre,Correo,Mensaje)
}

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
    localStorage.setItem('textarea',Mensaje)
}

function ListarData() {
    let NombreUsu = localStorage.getItem('Nombre')
    let CorreoUsu = localStorage.getItem('Correo')
    let MensajeUsu = localStorage.getItem('textarea')
}


function GuardarLocalStorage(Nombre,Correo,Mensaje) {
    localStorage.setItem('Nombre',Nombre)
    localStorage.setItem('Correo',Correo)
    localStorage.setItem('Mensaje',Mensaje)
    ListarData ()
}



