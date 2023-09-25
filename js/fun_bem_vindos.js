function abrirModal() {
    document.getElementById("myModal").showModal();
}

function proximoModal(idModal) {
    document.querySelectorAll(".modal").forEach((el) => {
        if (el.classList.contains('active')) {
            el.classList.remove("active")
        }
    });
    document.getElementById(idModal).classList.add("active")
}
function fecharModal() {
    document.querySelectorAll(".modal").forEach((el) => {
        if (el.classList.contains('active')) {
            el.classList.remove("active")
        }
    });
    document.getElementById('m1').classList.add("active")
    document.getElementById("myModal").close();
    window.location.href = 'index.html'

}

abrirModal();