
let Horas,Inicio, Entrada, Tipo, Placa, Propietario, Modelo

let formulario = document.getElementById('form2')



formulario.addEventListener ('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})


function LeerDatos() {
    Horas = document.getElementById('Horas').value
    Inicio = document.getElementById('Inicio').value
    Entrada = document.getElementById('Entrada').value
    Tipo = document.getElementById('Tipo').value
    Placa = document.getElementById('Placa').value
    Propietario = document.getElementById('Propietario').value
    Modelo = document.getElementById('Modelo').value

    ValidarData(Horas,Inicio, Entrada, Tipo, Placa, Propietario, Modelo)
   
}

function ValidarData(Horas,Inicio, Entrada, Tipo, Placa, Propietario, Modelo) {
    if (Horas.length==0 || Inicio.length==0 || Entrada.length==0 || Tipo.length==0 || Placa.length==0 || Propietario.length==0 || Modelo.length==0) {
    swal.fire({
        title: 'Oops...',
        text: 'Complete los campos faltantes',
        icon: 'error',
        confirmButtonText: 'OK',
        iconColor: 'red'
        })
    }
    else GuardarLocalStorage(Horas,Inicio, Entrada, Tipo, Placa, Propietario, Modelo)
}

function GuardarLocalStorage(Horas,Inicio, Entrada, Tipo, Placa, Propietario, Modelo) {
    localStorage.setItem('Horas',Horas)
    localStorage.setItem('Inicio',Inicio)
    localStorage.setItem('Entrada',Entrada)
    localStorage.setItem('Tipo',Tipo)
    localStorage.setItem('Placa',Placa)
    localStorage.setItem('Propietario',Propietario)
    localStorage.setItem('Modelo',Modelo)
}

function ListarData() {
    let HorasUsu = localStorage.getItem('Horas')
    let InicioUsu = localStorage.getItem('Inicio')
    let EntradaUsu = localStorage.getItem('Entrada')
    let TipoUsu = localStorage.getItem('Tipo')
    let PlacaUsu = localStorage.getItem('Placa')
    let PropietarioUsu = localStorage.getItem('Propietario')
    let ModeloUsu = localStorage.getItem('Modelo')
}


function GuardarLocalStorage(Horas,Inicio, Entrada, Tipo, Placa, Propietario, Modelo) {
    localStorage.setItem('Horas',Horas)
    localStorage.setItem('Inicio',Inicio)
    localStorage.setItem('Entrada',Entrada)
    localStorage.setItem('Tipo',Tipo)
    localStorage.setItem('Placa',Placa)
    localStorage.setItem('Propietario',Propietario)
    localStorage.setItem('Modelo',Modelo)
    ListarData ()
}