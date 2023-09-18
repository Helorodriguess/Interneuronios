function corrigir(questao) {
    let respostas = document.getElementsByName(questao);
    let resUser;
    let correctResp;

    for (let resposta of respostas) {
        if (resposta.classList.contains("red"))
            resposta.classList.remove("red");
        if (resposta.classList.contains("green"))
            resposta.classList.remove("green");

        if (resposta.checked == true) {
            resUser = resposta;
        };

        if (resposta.classList.contains('correta')) {
            correctResp = resposta;
        };



    }

    if (resUser === correctResp) {
        resUser.classList.add("green");
    }
    else {
        resUser.classList.add("red");
    }
}

function exibirModal(index) {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modalContent");

    modalContent.innerText = questoes[index].explicacao;
    modal.showModal();
}

function fecharModal() {
    const modal = document.getElementById("modal");
    modal.close();
}

