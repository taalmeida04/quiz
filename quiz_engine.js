// Proteção
let user = JSON.parse(
    sessionStorage.getItem("user")
)

if(!user){
    window.location.href = "index.html"
}

// Pontuação salva
let score = Number(
    sessionStorage.getItem("score")
) || 0

let current = PAGE_START

// Elementos
const question =
document.getElementById("question")

const answers =
document.getElementById("answers")

const nextBtn =
document.getElementById("nextBtn")

const progress =
document.getElementById("progress")

const progressText =
document.getElementById("progressText")

const step =
document.getElementById("step")

let selectedAnswer = null

function loadQuestion(){

    const q = QUESTIONS[current]

   
    step.textContent =
    `Pergunta ${current + 1} de ${TOTAL}`

    question.textContent = q.q

    answers.innerHTML = ""

    const letters =
    ["A","B","C","D"]

    q.options.forEach((option,index)=>{

        answers.innerHTML += `
        <label class="option">
            <input
                type="radio"
                name="answer"
                value="${index}"
            >

            <span class="letter">
                ${letters[index]}
            </span>

            <span>
                ${option}
            </span>
        </label>
        `
    })

    document
    .querySelectorAll(
        'input[name="answer"]'
    )
    .forEach(input=>{

        input.addEventListener(
        "change",()=>{

            selectedAnswer =
            Number(input.value)

        })

    })

    let percent =
    ((current + 1) / TOTAL) * 100

    progress.style.width =
    `${percent}%`

    progressText.textContent =
    `${Math.round(percent)}%`
}

nextBtn.addEventListener(
"click",()=>{

    if(selectedAnswer === null){

        alert(
        "Selecione uma alternativa!"
        )

        return
    }

    if(
        selectedAnswer ===
        QUESTIONS[current].answer
    ){
        score++
    }

    sessionStorage.setItem(
        "score",
        score
    )

    selectedAnswer = null

    current++

    if(current < PAGE_END){

        loadQuestion()

    }else{

        window.location.href =
        NEXT_PAGE
    }

})

loadQuestion()