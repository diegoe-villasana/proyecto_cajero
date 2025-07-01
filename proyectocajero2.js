var crear = document.getElementById("crear")
var log = document.getElementById("entrar")
var nuevousuriooriginal = document.getElementById("usuariooficial")
var nuevacontraseñaoriginal = document.getElementById("contraseñaoficial")
alert("tu usuario debe ser tu numero de tarjeta, y contraseña debe ser mayor a una longitud de 8")
string1 = new String(nuevousuriooriginal)

crear.addEventListener("click", () => {
    window.location.href = "proyectocajero.html"
    console.log(lista)
})


log.addEventListener("click", () =>{
    if(nuevacontraseñaoriginal.value.length > 8 && nuevousuriooriginal != Number)
    alert("esta contraseña es muy larga")
    else{
        window.location.href = "proyectocajero4.html"
    }
})
