let Nombre,Correo,Mensaje

let formulario = document.getElementById('form')



formulario.addEventListener ('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})


function LeerDatos() {
    Nombre = document.getElementById('Nombre').value
    Correo = document.getElementById('Correo').value
    Mensaje = document.getElementById('textarea').value
    ValidarData(Nombre,Correo,Mensaje)
   
}

function ValidarData( Nombre,Correo,Mensaje) {
    if (Nombre.length==0 || Correo.length==0 || Mensaje.length==0) {
    swal.fire({
        title: 'Oops...',
        text: 'Complete los campos faltantes',
        icon: 'error',
        confirmButtonText: 'Cool',
        iconColor: 'red'
        })
    }
    else GuardarLocalStorage(Nombre,Correo,Mensaje)
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



