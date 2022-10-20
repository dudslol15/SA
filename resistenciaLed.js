let frm = document.querySelector("form")
let calc = document.getElementById("calc")
let saida = document.getElementById("saida")

calc.addEventListener("click", (e) => {
    e.preventDefault()

    let tensaoFonte = Number(document.getElementById("tensaoFonte").value)
    let tensaoLed = Number(document.getElementById("tensaoLED").value)
    let corrente = Number(document.getElementById("corrente").value)

    let amper = corrente / 1000

    let resistencia = (tensaoFonte - tensaoLed) / amper
    saida.innerHTML = `A resistência do seu LED é de ${resistencia}Ω`

})