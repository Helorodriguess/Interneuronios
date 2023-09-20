const componentesOp = [
    {
        id: 'neuronio',
        nome: 'Neurônio',
        imagem: ''
    },
    {
        id: 'glia',
        nome: 'Célula da glia',
        imagem: ''
    },
    {
        id: 'sinapse',
        nome: 'Sinapse',
        imagem: ''
    },
    {
        id: 'bulbo',
        nome: 'Bulbo raquidiano',
        imagem: ''
    },
    {
        id: 'cerebelo',
        nome: 'Cerebelo.',
        imagem: ''
    },
    {
        id: 'cerebro',
        nome: 'Cérebro',
        imagem: 'img/cerebro/cerebro/cerebro.png'
    },
    {
        id: 'hipotalamo',
        nome: 'Hipotálamo',
        imagem: ''
    },
    {
        id: 'medula',
        nome: 'Medula Espinal',
        imagem: ''
    },
    {
        id: 'meninge',
        nome: 'Meninge',
        imagem: ''
    },
    {
        id: 'mesencefalo',
        nome: 'Mesencéfalo',
        imagem: ''
    },
    {
        id: 'ponte',
        nome: 'Ponte',
        imagem: ''
    },
    {
        id: 'talamo',
        nome: 'Tálamo',
        imagem: ''
    },
    {
        id: 'arco',
        nome: 'Arco Reflexo',
        imagem: ''
    },
    {
        id: 'ganglio',
        nome: 'Gânglios Nervosos',
        imagem: ''
    },
    {
        id: 'craniano',
        nome: 'Nervos Cranianos',
        imagem: ''
    },
    {
        id: 'espinal',
        nome: 'Nervo Espinal',
        imagem: ''
    },
    {
        id: 'sna',
        nome: 'Sistema Nervoso Autonomo',
        imagem: ''
    },
    {
        id: 'sps',
        nome: 'Sistema Nervoso Somático',
        imagem: ''
    },
]


const id = new URLSearchParams(window.location.search);
const comp = id.get('id');

const img = document.getElementById('main_img')

const titulo = document.getElementById('titulo');

for (let componente of componentesOp) {
    if (componente.id === comp) {
        titulo.innerHTML +=
            `<h1>${componente.nome}</h1>`;

        img.innerHTML =
            `<img src="${componente.imagem}" class="img_painel_op" title="${componente.nome}"/>`

    }
}

const main_buttons = document.getElementById('main_buttons');

main_buttons.innerHTML +=
    `<div>
    <a href="o_que_e.html?id=${comp}">
            <button id="main_button">
                <div class="main_button_div">
                    <div class="main_button_text">O que é?</div>
                    <div class="main_button_img"><Img src="img/oQueEIcon.svg" /></div>
                </div>
            </button>
        </a>
</div>
<div>
    <a href="curiosidades.html?id=${comp}">
        <button id="main_button">
        <div class="main_button_div">
            <div class="main_button_text">Curiosidades</div>
            <div class="main_button_img"><Img src="img/CuriosidadeIcon.svg" /></div>
        </div>
        </button>
    </a>
</div>
<div>
    <a href="doencas.html?id=${comp}">
        <button id="main_button">
        <div class="main_button_div">
            <div class="main_button_text">Doenças</div>
            <div class="main_button_img"><Img src="img/doencaIcon.svg" /></div>
        </div>
        </button>
    </a>
</div>
    `;



