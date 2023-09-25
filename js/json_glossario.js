const glossarios = [
    {
        palavra: 'Células de Schwann',
        definicao: 'são glíocitos que envolvem os axônios.',
        links: []
    },
    {
        palavra: 'Citomegalovírus (CMV)',
        definicao: 'é um vírus da família herpes, capaz de provocar infecções no corpo humano, pessoas que apresentam esse tipo de vírus possuem seu sistema imunológico mais fraco. Saiba mais em:',
        links: ['https://ibcc.org.br/por-que-o-citomegalovirus-e-uma-ameaca-para-o-paciente-que-sera-ou-foi-submetido-ao-tmo/']
    },
    {
        palavra: 'ERO',
        definicao: 'são subprodutos metabólicos tóxicos que podem causar diversas patologias como o câncer. Saiba mais em:',
        links: ['http://www.ledson.ufla.br/respiracao_plantas/cadeia-transportadora-de-eletrons/especies-reativas-de-oxigenio/']
    },
    {
        palavra: 'Formação reticular',
        definicao: 'é uma parte do tronco encefálico responsável por ações como os ciclos de sono, o despertar e estímulos sensoriais. Saiba mais em:',
        links: ['https://blog.portaleducacao.com.br/formacao-reticular/']
    },
    {
        palavra: 'Hiperprolactinemia',
        definicao: 'doença causado pelo alto nível de produção da prolactina.',
        links: []
    },
    {
        palavra: 'Homeostase corporal',
        definicao: 'é uma propriedade do corpo humano responsável por manter a estabilidade do meio interno do corpo como a temperatura, Ph e fluidos.',
        links: []
    },
    {
        palavra: 'Prolactina',
        definicao: 'Hormônio protéico produzido pelo lobo anterior da pituitária e que estimula o corpo-lúteo e a produção de leite pelas glândulas mamárias.',
        links: []
    },
    {
        palavra: 'Príons',
        definicao: 'é o nome dado a uma proteína derivada da mutação do gene prion, o que resulta a uma proteína infecciosa que provoca doenças cerebrais degenerativas que acometem diferentes espécies.',
        links: []
    },
    {
        palavra: 'Rede neural',
        definicao: 'rede de neurônios interconectados. Acesse o vídeo e saiba mais:',
        links: ['https://blog.portaleducacao.com.br/formacao-reticular/']
    },
    {
        palavra: 'Transporte axonal',
        definicao: 'tipo de transporte que leva organelas ao corpo celular do neurônio por meio do axônio.',
        links: []
    },
]


const glo = document.getElementById('glossario');

for (let glossario of glossarios) {
    glo.innerHTML +=
        `<div class="nome">${glossario.palavra}:</div>
        <div class="comando">${glossario.definicao}</div>
    `;

    for (let link of glossario.links) {
        glo.innerHTML +=
            `<p class="link">&#9679<a href="${link}">${link}</a></p>
    `;
    }
}  