var nuevousuario = document.getElementById("nombre2")
var guardarnuevo = document.getElementById("continuar")
var nuevaconstraseña = document.getElementById("contraseña2")
var regresar = document.getElementById("regresar")


guardarnuevo.addEventListener("click", () =>{
    console.log(nuevousuario.value)
    console.log(nuevaconstraseña.value)
} )

regresar.addEventListener("click", () => {
    window.location.href = "proyectocajero2.html"
})
