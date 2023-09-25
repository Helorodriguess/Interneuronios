const div = document.getElementById("main_div");

function abrirModal() {
    document.getElementById("myModal").showModal();
    div.classList.add("op");
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
    div.classList.remove("op")

}
