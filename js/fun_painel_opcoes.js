const componentesOp = [
    {
        id: 'neuronio',
        nome: 'Neurônio',
        imagem: 'img/neuronio/neuronio0.png'
    },
    {
        id: 'glia',
        nome: 'Célula da glia',
        imagem: 'img/glia/glia2.png'
    },
    {
        id: 'sinapse',
        nome: 'Sinapse',
        imagem: 'img/sinapse/sinapse4.jpg'
    },
    {
        id: 'bulbo',
        nome: 'Bulbo raquidiano',
        imagem: 'img/bulbo.png'
    },
    {
        id: 'cerebelo',
        nome: 'Cerebelo.',
        imagem: 'img/cerebelo/cerebelo2.png'
    },
    {
        id: 'cerebro',
        nome: 'Cérebro',
        imagem: 'img/cerebro/cerebro/cerebro.png'
    },
    {
        id: 'hipotalamo',
        nome: 'Hipotálamo',
        imagem: 'img/hipotalamo/hipotalamo.png'
    },
    {
        id: 'medula',
        nome: 'Medula Espinal',
        imagem: 'img/medula/medula0.png'
    },
    {
        id: 'meninge',
        nome: 'Meninge',
        imagem: 'img/meninge/meninges2.png'
    },
    {
        id: 'mesencefalo',
        nome: 'Mesencéfalo',
        imagem: 'img/mesencefalo.png'
    },
    {
        id: 'ponte',
        nome: 'Ponte',
        imagem: 'img/ponte/tronco0.png'
    },
    {
        id: 'talamo',
        nome: 'Tálamo',
        imagem: 'img/talamo/talamoo.png'
    },
    {
        id: 'arco',
        nome: 'Arco Reflexo',
        imagem: 'img/arco/arco0.png'
    },
    {
        id: 'craniano',
        nome: 'Nervos Cranianos',
        imagem: 'img/nervoscranianos.png'
    },
    {
        id: 'espinal',
        nome: 'Nervo Espinal e Gânglio Nervoso',
        imagem: 'img/espinal/espinal3.png'
    },
    {
        id: 'sna',
        nome: 'Sistema Nervoso Autonomo',
        imagem: 'img/snpa.png'
    },
    {
        id: 'sns',
        nome: 'Sistema Nervoso Somático',
        imagem: 'img/snpa.png'
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
</div>`;
