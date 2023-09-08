var leornado = window.document.getElementById("leornado")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var setaesquerda =  window.document.getElementById("seta-esquerda")
var setadireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    leornado.style = "display:none"
    bruna.style = "display:flex"
    setaesquerda.style = "display:flex; margin-top:55px"
    setadireita.style = "display:none"
}

function RolarParaEsquerda() {
    leornado.style = "display:flex"
    bruna.style = "display:none"
    setaesquerda.style = "display:none"
    setadireita.style = "display:flex"
}