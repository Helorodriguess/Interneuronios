function verificaPrimeiroAcesso() {
    const chave = window.localStorage.getItem("japassou")

    if (!chave) {
        window.localStorage.setItem("japassou", true)
        window.location.href = "bem_vindos.html"
    }

}