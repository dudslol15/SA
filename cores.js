let frm = document.querySelector("form")
let calc = document.getElementById("calc")
let saida = document.getElementById("saida")

calc.addEventListener("click", (e) => {
    e.preventDefault()

    let faixa1 = document.getElementById("faixa1").value
    let faixa2 = document.getElementById("faixa2").value
    let faixa3 = document.getElementById("faixa3").value
    let faixa4 = document.getElementById("faixa4").value

    //Faixa 1
    if (faixa1 === "marrom") {
        var f1 = String(1)
      }
      if (faixa1 === "vermelho") {
        var f1 = String(2)
      }
      if (faixa1 === "laranja") {
        var f1 = String(3)
      }
      if (faixa1 === "amarelo") {
        var f1 = String(4)
      }
      if (faixa1 === "verde") {
        var f1 = String(5)
      }
      if (faixa1 === "azul") {
        var f1 = String(6)
      }
      if (faixa1 === "roxo") {
        var f1 = String(7)
      }
      if (faixa1 === "cinza") {
        var f1 = String(8)
      }
      if (faixa1 === "branco") {
        var f1 = String(9)
        }

    //Faixa 2
      if (faixa2 === "preto"){
        var f2 = 0
      }
      if (faixa2 === "marrom") {
        var f2 = 1
      }
      if (faixa2 === "vermelho") {
        var f2 = 2
      }
      if (faixa2 === "laranja") {
        var f2 = 3
      }
      if (faixa2 === "amarelo") {
        var f2 = 4
      }
      if (faixa2 === "verde") {
        var f2 = 5
      }
      if (faixa2 === "azul") {
        var f2 = 6
      }
      if (faixa2 === "roxo") {
        var f2 = 7
      }
      if (faixa2 === "cinza") {
        var f2 = 8
      }
      if (faixa2 === "branco") {
        var f2 = 9
      }

    //Faixa 3
      if (faixa3 === "preto") {
        var f3 = 1
      }
      if (faixa3 === "marrom") {
        var f3 = 10
      }
      if (faixa3 === "vermelho") {
        var f3 = 100
      }
      if (faixa3 === "laranja") {
        var f3 = 1000
      }
      if (faixa3 === "amarelo") {
        var f3 = 10000
      }
      if (faixa3 === "verde") {
        var f3 = 100000
      }
      if (faixa3 === "azul") {
        var f3 = 1000000
      }
      if (faixa3 === "roxo") {
        var f3 = 10000000
      }
      if (faixa3 === "dourado") {
        var f3 = 0.10
      }
      if (faixa3 === "prateado") {
        var f3 = 0.01
      }

    //Faixa 4
      if (faixa4 === "marrom") {
        var f4 = "Ω Mais ou menos 1%"
      }
      if (faixa4 === "vermelho") {
        var f4 = "Ω Mais ou menos 2%"
      }
      if (faixa4 === "verde") {
        var f4 = "Ω Mais ou menos 0,5%"
      }
      if (faixa4 === "azul") {
        var f4 = "Ω Mais ou menos 0,25%"
      }
      if (faixa4 === "roxo") {
        var f4 = "Ω Mais ou menos 0,01"
      }
      if (faixa4 === "cinza") {
        var f4 = "Ω Mais ou menos 0,05"
      }
      if (faixa4 === "dourado") {
        var f4 = "Ω Mais ou menos 5%"
      }
      if (faixa4 === "prateado") {
        var f4 = "Ω Mais ou menos 10%"
      }
      if (faixa4 === "") {
        var f4 = "Ω Mais ou menos 20%"
      }
       
      let resistor = (f1 + f2) * f3 + f4
       
      saida.innerHTML = `${resistor}`
})