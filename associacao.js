let frm = document.querySelector("form")
let serie = document.getElementById("serie")
let paralelo = document.getElementById("paralelo")
let saida = document.getElementById("saida")

serie.addEventListener("click", (e) => {
    e.preventDefault()

    let valor1 = Number(document.getElementById("v1").value)
    let valor2 = Number(document.getElementById("v2").value)
    let valor3 = Number(document.getElementById("v3").value)

    let req = valor1 + valor2 + valor3

    saida.innerHTML = `A Resistência equivalente do Circuito em Série é ${req}Ω`

})
paralelo.addEventListener("click", (e) => {
    e.preventDefault()

    let valor1 = Number(document.getElementById("v1").value)
    let valor2 = Number(document.getElementById("v2").value)
    let valor3 = Number(document.getElementById("v3").value)

    let req = 1 / ((1 / valor1) + (1 / valor2) + (1 / valor3))

    saida.innerHTML = `A Resistência equivalente do Circuito em Paralelo é ${req.toFixed(3)}Ω`

})