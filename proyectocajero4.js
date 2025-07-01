alert("dale click otra vez cuando insertes cantidades en el buscador")
var quinientos = document.getElementById("500")
var mil = document.getElementById("1000")
var milquinientos = document.getElementById("1500")
var dosmil = document.getElementById("2000")
var otro = document.getElementById("exacto")
var total = 0
var restas = document.getElementById("restar")
var totalnumber = document.getElementById("tutotal")
var finales = document.getElementById("finalizar")

totaloficial = 0
let x = Math.floor(Math.random() * 6000)
console.log(x)


quinientos.addEventListener("click", () =>{
    totaloficial = totaloficial + 500
    console.log(totaloficial)
})
mil.addEventListener("click", () =>{
    totaloficial = totaloficial + 1000
    console.log(totaloficial)
})
milquinientos.addEventListener("click", () =>{
    totaloficial = totaloficial + 1500
    console.log(totaloficial)
})
dosmil.addEventListener("click", () =>{
    totaloficial = totaloficial + 2000
    console.log(totaloficial)
})

restas.addEventListener("click", () => {
    totaloficial = totaloficial - restas.value
    console.log(totaloficial)
})
otro.addEventListener("click", () => {
    totaloficial = totaloficial + Number(otro.value)
    console.log(totaloficial)
})

totalnumber.addEventListener("click", () => {
    if (x < totaloficial) {
        alert("no tienes esos fondos, tus fondos son: " + x +"y estas sacando " + totaloficial )
    } else {
        alert(totaloficial)
    }
})
finales.addEventListener("click", () => {
    if (x < totaloficial) {
        alert("no tienes esos fondos, tus fondos son: " + x +"y estas sacando " + totaloficial )
    } else {
        alert("has sacado: " + totaloficial)
        window.location.href="proyectocajero5.html"
    }
})


