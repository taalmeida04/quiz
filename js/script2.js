let user = JSON.parse(
    sessionStorage.getItem('user')
)

// Impede acesso direto
if (!user) {
    window.location.href = './erro.html'
}

// Exibe dados na tela
let ps = document.querySelectorAll('p')

if (ps.length >= 2) {
    ps[0].textContent = `EMAIL: ${user.email}`
    ps[1].textContent = `SENHA: ${user.password}`
}