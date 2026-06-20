function cadastrar() {

    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let confirmarSenha = document.getElementById("confirmarSenha").value

    if (!nome || !email || !senha || !confirmarSenha) {
        alert("Preencha todos os campos!")
        return
    }

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!")
        return
    }

    let usuario = {
        nome,
        email,
        senha
    }

    localStorage.setItem(
        "usuarioCadastrado",
        JSON.stringify(usuario)
    )

    alert("Conta criada com sucesso!")
    window.location.href = "./index.html"
}