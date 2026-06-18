let score =
Number(
sessionStorage.getItem("score")
) || 0

let erros =
10 - score

let porcentagem =
Math.round(
(score / 10) * 100
)

document
.getElementById("acertos")
.textContent = score

document
.getElementById("erros")
.textContent = erros

document
.getElementById("percentual")
.textContent =
`${porcentagem}%`

document
.querySelector(".circle")
.style.setProperty(
"--progress",
`${porcentagem * 3.6}deg`
)

const resultado =
document.getElementById(
"resultado"
)

if(score >= 8){

    resultado.textContent =
    "Você escapou da ilha!"

}
else if(score >= 5){

    resultado.textContent =
    "⚠️ Sobreviveu por pouco!"

}
else{

    resultado.textContent =
    "Foi devorado pelos dinossauros!"
}

function jogarNovamente(){

    sessionStorage.removeItem(
    "score"
    )

    window.location.href =
    "/html/home.html"
}