function exibirModal(modalvar) {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById('modalContent')
    modalContent.innerHTML = `<img src="${modalvar}">`
    modal.showModal();
}

function fecharModalOQueE() {
    const modal = document.getElementById("modal");
    modal.close();
}

