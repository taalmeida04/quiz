// Seleção dos elementos
let email = document.querySelector('#exampleFormControlInput1')
let password = document.querySelector('#inputPassword')
let btn = document.querySelector('.btn')

btn.addEventListener('click', login)

function login() {

    let emailValue = email.value
    let passwordValue = password.value

    // Verifica login
    if (
        emailValue === 'eve@gmail.com' &&
        passwordValue === '123456'
    ) {

        let user = {
            email: emailValue,
            password: passwordValue
        }

        sessionStorage.setItem(
            'user',
            JSON.stringify(user)
        )

        // Animação de saída
        document.body.classList.add('saindo')

        setTimeout(() => {
            window.location.href = '/html/home.html'
        }, 800)

    } else {
        alert('E-mail ou senha incorretos!')
    }
}