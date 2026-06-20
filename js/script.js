let email = document.querySelector('#exampleFormControlInput1')
let password = document.querySelector('#inputPassword')
let btn = document.querySelector('.btn')

btn.addEventListener('click', login)

function login() {

    let usuario = JSON.parse(
        localStorage.getItem("usuarioCadastrado")
    )

    if (!usuario) {
        alert("Nenhuma conta cadastrada!")
        return
    }

    if (
        email.value === usuario.email &&
        password.value === usuario.senha
    ) {

        sessionStorage.setItem(
            "user",
            JSON.stringify(usuario)
        )

        window.location.href = "/html/home.html"

    } else {
        alert("E-mail ou senha incorretos!")
    }
}