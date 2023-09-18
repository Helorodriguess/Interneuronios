const componentes = [
    {
        id: 'neuronio',
        nome: 'Neurônio',
    },
    {
        id: 'glia',
        nome: 'Célula da glia',
    },
    {
        id: 'sinapse',
        nome: 'Sinapse',
    },
    {
        id: 'bulbo',
        nome: 'Bulbo raquidiano',
    },
    {
        id: 'cerebelo',
        nome: 'Cerebelo.',
    },
    {
        id: 'cerebro',
        nome: 'Cérebro',
    },
    {
        id: 'hipotalamo',
        nome: 'Hipotálamo',
    },
    {
        id: 'medula',
        nome: 'Medula Espinal',
    },
    {
        id: 'meninge',
        nome: 'Meninge',
    },
    {
        id: 'mesencefalo',
        nome: 'Mesencéfalo',
    },
    {
        id: 'ponte',
        nome: 'Ponte',
    },
    {
        id: 'talamo',
        nome: 'Tálamo',
    },
    {
        id: 'arco',
        nome: 'Arco Reflexo',
    },
    {
        id: 'ganglio',
        nome: 'Gânglios Nervosos',

    },
    {
        id: 'craniano',
        nome: 'Nervos Cranianos',

    },
    {
        id: 'espinal',
        nome: 'Nervo Espinal',
    },
    {
        id: 'sna',
        nome: 'Sistema Nervoso Autonomo',
    },
    {
        id: 'sps',
        nome: 'Sistema Nervoso Somático',
    },
]


const id = new URLSearchParams(window.location.search);
const comp = id.get('id');



const titulo = document.getElementById('titulo');

for (let componente of componentes) {
    if (componente.id === comp) {
        titulo.innerHTML +=
            `<h1>${componente.nome}</h1>`;
    }
}

const main_buttons = document.getElementById('main_buttons');

main_buttons.innerHTML +=
    `<div>
    <a href="o_que_e.html?id=${comp}">
        <button id="main_button">
            O que é?
            <Img src="img/oQueEIcon.svg" />
        </button>
    </a>
</div>
<div>
    <a href="curiosidades.html?id=${comp}">
        <button id="main_button">
            Curiosidades
            <Img src="img/CuriosidadeIcon.svg" />
        </button>
    </a>
</div>
<div>
    <a href="doencas.html?id=${comp}">
        <button id="main_button">
            Doenças
            <Img src="img/doencaIcon.svg" />
        </button>
    </a>
</div>
    `;



