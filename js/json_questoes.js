const questoes = [
    {
        questao: 'Questão 1',
        comando: '(Amabis & Martho / 2006) Como se denomina a alteração brusca na carga elétrica das superfícies interna e externa da membrana plasmática, causada por um estímulo de natureza e de intensidade adequados?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Impulso nervoso',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Neurotransmissor',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Potencial de ação',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'Potencial de repouso',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Sinapse nervosa',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) potencial de ação. Explicação: Quando um neurônio é estimulado, a permeabilidade de sua membrana aos íons de sódio (Na+) e potássio (K+) muda, o que faz que sua diferença de potencial também mude, passando a ser de +40mV, essa inversão de potencial é chamada de potencial de ação. Esse processo é chamado de despolarização da membrana.',
    },

    {
        questao: 'Questão 2',
        comando: '(Amabis & Martho / 2006) Qual é o nome do espaço entre a terminação de um axônio e a membrana de uma célula vizinha, através do qual o impulso nervoso é transmitido por meio de mediadores químicos?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Impulso nervoso',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Neurotransmissor',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Potencial de ação',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Potencial de repouso',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Sinapse nervosa',
            classificacao: 'correta'
        },],
        explicacao: 'Resposta: e) sinapse nervosa. Explicação: Depois de passar pelo axônio, o impulso nervoso passa para outra célula, que é chamada de pós sináptica e pode ser outro neurônio ou uma célula muscular. A região entre as extremidades dessas células, por onde ocorre a transmissão, é chamada de sinapse nervosa.',
    },

    {
        questao: 'Questão 3',
        comando: '(Amabis & Martho / 2006) Como é chamada a propagação de uma alteração de cargas elétricas ao longo da membrana plasmática de um neurônio?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Impulso nervoso',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: 'Neurotransmissor',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Potencial de ação',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Potencial de repouso',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Sinapse nervosa',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: a) impulso nervoso. Explicação: Quando ocorre um potencial de ação, a despolarização dura cerca de um milissegundo, e logo em seguida a área despolarizada do neurônio retorna ao estado de repouso, entretanto essa área estimula a área subsequente, até que o potencial de ação chegue no axônio. Essa propagação do impulso é chamado de impulso nervoso, que ocorre em sentido único: dos detritos segue para o corpo celular e então para os axônios.',
    },

    {
        questao: 'Questão 4',
        comando: '(Amabis & Martho / 2006) Como se denomina a situação em que há diferença de cargas elétricas entre as superfícies interna e externa da membrana plasmática de um neurônio que não está sendo estimulado? ',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Impulso nervoso',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Neurotransmissor',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Potencial de ação',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Potencial de repouso',
            classificacao: 'correta'
        },
        {
            letra: 'e',
            alternativa: 'Sinapse nervosa',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: d) potencial de repouso. Explicação: Para que um impulso nervoso ocorra, um neurônio que está em potencial de repouso, ou seja, que não foi estimulado, tem sua superfície da membrana interna mais eletricamente negativa com relação ao exterior. Assim, o potencial elétrico nada mais é que uma diferença de potencial entre as faces da membrana, que costuma ser de -70mV.',
    },

    {
        questao: 'Questão 5',
        comando: '(Amabis & Martho / 2006) Qual o nome da substância liberada pela extremidade de um axônio e que pode estimular uma célula nervosa ou uma célula muscular?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Impulso nervoso',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Neurotransmissor',
            classificacao: 'correta'
        },
        {
            letra: 'c',
            alternativa: 'Potencial de ação',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Potencial de repouso',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Sinapse nervosa',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: b) neurotransmissor. Explicação: A transmissão do impulso nessas regiões ocorre por meio de neurotransmissores, ou mediadores químicos, que ficam armazenados nas bolsas membranosas das extremidades dos axônios e são liberados com o impulso. Os neurotransmissores se ligam às proteínas receptoras da membrana da célula pós sináptica, gerando um novo impulso nervoso.',
    },

    {
        questao: 'Questão 6',
        comando: '(Amabis & Martho / 2006) Qual é a parte mais volumosa do encéfalo, localizada na porção superior do crânio, em que são processadas as informações conduzidas pelas fibras nervosas?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Cérebro.',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: 'Cerebelo.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Gânglio nervoso.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Meninge.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Nervo.',
            classificacao: 'errada'
        },
        {
            letra: 'f',
            alternativa: 'Sistema nervoso central.',
            classificacao: 'errada'
        },
        {
            letra: 'g',
            alternativa: 'Sistema nervoso periférico.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: a) Cérebro. Explicação: O cérebro é formado a partir do telencéfalo e diencéfalo. O telencéfalo é a parte mais desenvolvida presente no encéfalo e a que ocupa maior parte da caixa encefálica. Esta superfície é marcada por sulcos e depressões (ou seja, possui diversos relevos e não é plana), os denominados giros cerebrais ou circunvolução cerebral; ainda sobre a superfície, esta possui um sulco (ou fenda) que divide o cérebro em dois hemisférios, onde a conexão deles é realizada pele corpo caloso (que por sua vez utiliza mais de 200 mil fibras nervosas para atuar nesta função).',
    },

    {
        questao: 'Questão 7',
        comando: '(Amabis & Martho / 2006) Como se denomina cada uma das membranas de tecido conjuntivo que revestem o encéfalo e a medula espinal?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Cérebro.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Cerebelo.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Gânglio nervoso.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Meninge.',
            classificacao: 'correta'
        },
        {
            letra: 'e',
            alternativa: 'Nervo.',
            classificacao: 'errada'
        },
        {
            letra: 'f',
            alternativa: 'Sistema nervoso central.',
            classificacao: 'errada'
        },
        {
            letra: 'g',
            alternativa: 'Sistema nervoso periférico.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: d) Meninge. Explicação: Entre as estruturas que formam o sistema nervoso central e a camada óssea, existem três membranas formadas de conjunto conjuntivo, as meninges (dura máter, aracnóide e dura máter). Entre as meninges há o líquido cerebrospinal, que é responsável por amortecer choques dos órgãos contra os ossos que os envolvem e por transportar substâncias importantes para o sistema nervoso.',
    },

    {
        questao: 'Questão 8',
        comando: '(Amabis & Martho / 2006) Como se denomina o conjunto formado pelo encéfalo e medula espinal?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Cérebro.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Cerebelo.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Gânglio nervoso.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Meninge.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Nervo.',
            classificacao: 'errada'
        },
        {
            letra: 'f',
            alternativa: 'Sistema nervoso central.',
            classificacao: 'correta'
        },
        {
            letra: 'g',
            alternativa: 'Sistema nervoso periférico.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: f) Sistema nervoso central. Explicação: O sistema nervoso central, responsável por interpretar informações captadas por órgãos sensoriais e elaborar respostas, é formado pelo encéfalo e medula espinhal.',
    },

    {
        questao: 'Questão 9',
        comando: '(Amabis & Martho / 2006) Qual o nome da região especializada do encéfalo, localizada na parte posterior do crânio, que coordena as ações musculares e o equilíbrio corporal?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Cérebro.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Cerebelo.',
            classificacao: 'correta'
        },
        {
            letra: 'c',
            alternativa: 'Gânglio nervoso.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Meninge.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Nervo.',
            classificacao: 'errada'
        },
        {
            letra: 'f',
            alternativa: 'Sistema nervoso central.',
            classificacao: 'errada'
        },
        {
            letra: 'g',
            alternativa: 'Sistema nervoso periférico.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: b) Cerebelo. Explicação: O cerebelo é responsável por receber informações provindas do encéfalo e da medula espinal, que podem ser auditivas, visuais e a respeito das articulações e dos músculos. Assim, ele é responsável por ajudar a coordenar movimentos e a postura corporal. Essa estrutura está localizada entre a parte posterior do cérebro e a ponte, e conectado ao tálamo, ao tronco encefálico e a medula espinal por fibras nervosas.',
    },

    {
        questao: 'Questão 10',
        comando: '(Amabis & Martho / 2006) Como se denomina a parte do sistema nervoso formada por nervos e gânglios nervosos?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Cérebro.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Cerebelo.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Gânglio nervoso.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Meninge.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Nervo.',
            classificacao: 'errada'
        },
        {
            letra: 'f',
            alternativa: 'Sistema nervoso central.',
            classificacao: 'errada'
        },
        {
            letra: 'g',
            alternativa: 'Sistema nervoso periférico.',
            classificacao: 'correta'
        },],
        explicacao: 'Resposta: g) Sistema nervoso periférico. Explicação: O sistema nervoso periférico é formado por nervos e gânglios nervosos. Os nervos são estruturas constituídas por neurofibras que têm origem no encéfalo e na medula espinal e atingem diversas partes do corpo. Já os gânglios nervosos são dilatações presentes nos nervos que contém corpos celulares, de onde partem fibras.',
    },

    {
        questao: 'Questão 11',
        comando: '(Amabis & Martho / 2006) Como se denomina um conjunto de neurofibras que parte do encéfalo e da medula e atinge certas regiões do corpo?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Cérebro.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Cerebelo.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Gânglio nervoso.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Meninge.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Nervo.',
            classificacao: 'correta'
        },
        {
            letra: 'f',
            alternativa: 'Sistema nervoso central.',
            classificacao: 'errada'
        },
        {
            letra: 'g',
            alternativa: 'Sistema nervoso periférico.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: e) Nervo. Explicação: Os nervos são estruturas constituídas por neurofibras que têm origem no encéfalo e na medula espinal e atingem diversas partes do corpo.',
    },

    {
        questao: 'Questão 12',
        comando: '(Amabis & Martho / 2006) Qual o nome da pequena dilatação formada por corpos de neurônios presentes em certos nervos?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Cérebro.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Cerebelo.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Gânglio nervoso.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'Meninge.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Nervo.',
            classificacao: 'errada'
        },
        {
            letra: 'f',
            alternativa: 'Sistema nervoso central.',
            classificacao: 'errada'
        },
        {
            letra: 'g',
            alternativa: 'Sistema nervoso periférico.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) Gânglio nervoso. Explicação: Os gânglios nervosos são dilatações presentes nos nervos que contém corpos celulares, de onde partem fibras nervosas.',
    },
    {
        questao: 'Questão 13',
        comando: '(Amabis & Martho / 2006) Como se denomina um feixe de prolongamentos nervosos que conecta o encéfalo a uma ou mais regiões do corpo?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Nervo sensitivo.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Nervo motor.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Nervo misto.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Nervo craniano.',
            classificacao: 'correta'
        },
        {
            letra: 'e',
            alternativa: 'Nervo raquidiano.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: d) Nervo craniano. Explicação: Os nervos cranianos conectam o encéfalo a órgãos dos sentidos e a músculos.',
    },
    {
        questao: 'Questão 14',
        comando: '(Amabis & Martho / 2006) Que nome recebe um feixe de prolongamentos nervosos que leva informações do corpo ao sistema nervoso central?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Nervo sensitivo.',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: 'Nervo motor.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Nervo misto.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Nervo craniano.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Nervo raquidiano.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: a) Nervo sensitivo. Explicação:  Os nervos podem ser classificados de acordo com a função desempenhada como: sensitivos, motores e mistos. Os nervos sensitivos, ou aferentes, são aqueles que levam os impulsos das células para o sistema nervoso central.',
    },
    {
        questao: 'Questão 15',
        comando: '(Amabis & Martho / 2006) Como se denomina um feixe de prolongamentos nervosos que conduz impulsos nervosos do sistema nervoso central para o corpo, e vice-versa?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Nervo sensitivo.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Nervo motor.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Nervo misto.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'Nervo craniano.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Nervo raquidiano.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) Nervo misto. Explicação: Os nervos podem ser classificados de acordo com a função desempenhada como: sensitivos, motores e mistos. Os nervos mistos são compostos por neurofibras de neurônios sensitivos e neurônios motores, ou seja, desempenha a função de nervos sensitivos (levar informação do corpo para o SNC) e motores (transmitir impulsos do SNC para o corpo).',
    },
    {
        questao: 'Questão 16',
        comando: '(Amabis & Martho / 2006) Que nome recebe feixe de prolongamentos nervosos que conduz impulsos nervosos do sistema nervoso central ao corpo?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Nervo sensitivo.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Nervo motor.',
            classificacao: 'correta'
        },
        {
            letra: 'c',
            alternativa: 'Nervo misto.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Nervo craniano.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Nervo raquidiano.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: b) Nervo motor. Explicação: Os nervos podem ser classificados de acordo com a função desempenhada como: sensitivos, motores e mistos. Os nervos motores, ou eferentes, são os responsáveis por enviar os impulsos do sistema nervoso central para os músculos.',
    },
    {
        questao: 'Questão 17',
        comando: '(Amabis & Martho / 2006) Qual é o nome de um feixe de prolongamentos nervosos que conecta a medula espinal a uma ou mais regiões do corpo?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Nervo sensitivo.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Nervo motor.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Nervo misto.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Nervo craniano.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Nervo raquidiano.',
            classificacao: 'correta'
        },],
        explicacao: 'Resposta: e) Nervo raquidiano. Explicação: Os nervos raquidianos ou nervos espinais são os que se conectam, por meio dos espaços entre as vértebras, à medula espinal e atuam ligando esta estrutura as células sensoriais e aos músculos',
    },
    {
        questao: 'Questão 18',
        comando: '(Amabis & Martho / 2006) Como se denomina uma das divisões do sistema nervoso autônomo cujos gânglios localizam-se perto ou mesmo dentro do órgão-alvo?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Resposta reflexa.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Sistema nervoso periférico autônomo.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Sistema nervoso periférico voluntário.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'SNPA parassimpático.',
            classificacao: 'correta'
        },
        {
            letra: 'e',
            alternativa: 'SNPA simpático.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: d) SNPA parassimpático. Explicação: O SNPA (sistema nervoso periférico autônomo) possui uma divisão, o SNPA simpático e SNPA parassimpático. O SNPA parassimpático se dá a partir dos nervos cranianos (que saem do encéfalo) e dos raquidianos (que saem da medula espinal); os gânglios nervosos desse sistema ficam perto ou dentro do órgão inervado (que possui muitos nervos).',
    },
    {
        questao: 'Questão 19',
        comando: '(Amabis & Martho / 2006) Qual é a denominação de uma resposta inconsciente do sistema nervoso em que um nervo sensitivo conduz o estímulo à medula espinal e um nervo motor conduz a resposta medular até um músculo?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Resposta reflexa.',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: 'Sistema nervoso periférico autônomo.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Sistema nervoso periférico voluntário.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'SNPA parassimpático.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'SNPA simpático.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: a) Resposta reflexa. Explicação: As respostas rápidas produzidas pela medula espinal, sem que passem pelo encéfalo para serem formuladas, são chamadas de Respostas reflexas medulares ou Arco reflexos. Nesse tipo de resposta um neurônio sensitivo leva o impulso até a medula espinal, o estímulo passa pelo neurônio associativo, que faz a retransmissão para o encéfalo e para o neurônio motor. O neurônio motor coordena a ação reflexa, e o envio do estímulo ao encéfalo permite a tomada de consciência do ocorrido.',
    },
    {
        questao: 'Questão 20',
        comando: '(Amabis & Martho / 2006) Que parte do sistema nervoso periférico regula as atividades internas do organismo independentemente da vontade?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Resposta reflexa.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Sistema nervoso periférico autônomo.',
            classificacao: 'correta'
        },
        {
            letra: 'c',
            alternativa: 'Sistema nervoso periférico voluntário.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'SNPA parassimpático.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'SNPA simpático.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: b) Sistema nervoso periférico autônomo. Explicação: Realizamos diversas atividades cotidianamente e estas podem ser realizadas consciente e inconscientemente. Podemos dizer então que há duas divisões do sistema nervoso periférico (SNP), uma que acontece voluntariamente e outra que acontece de maneira natural ou inconsciente. A parte involuntária é controlado pelo SNP autônomo, ou SNP visceral, que regula a parte interna do corpo e controla os sistemas nele presentes. O SNP autônomo é formado por neurofibras motoras que mandam informações do SNC para as vísceras e coração.',
    },
    {
        questao: 'Questão 21',
        comando: '(Amabis & Martho / 2006) Qual é a divisão do sistema nervoso autônomo cujos gânglios localizam-se perto do sistema nervoso central?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Resposta reflexa.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Sistema nervoso periférico autônomo.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Sistema nervoso periférico voluntário.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'SNPA parassimpático.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'SNPA simpático.',
            classificacao: 'correta'
        },],
        explicacao: 'Resposta: e) SNPA simpático. Explicação: O SNPA (sistema nervoso periférico autônomo) possui uma divisão, o SNPA simpático e SNPA parassimpático. O SNPA simpático é formado pelos nervos raquidianos que saem das regiões lombares e torácicas da medula espinal; os gânglios nervosos deste se situam nas proximidades da medula.',
    },
    {
        questao: 'Questão 22',
        comando: '(Amabis & Martho / 2006) Que parte do sistema nervoso regula a atividade dos músculos estriados esqueléticos e cuja ação está sob o controle da vontade?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Resposta reflexa.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Sistema nervoso periférico autônomo.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Sistema nervoso periférico voluntário.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'SNPA parassimpático.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'SNPA simpático.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) Sistema nervoso periférico voluntário. Explicação: Realizamos diversas atividades cotidianamente e estas podem ser realizadas consciente e inconscientemente. Podemos dizer então que há duas divisões do sistema nervoso periférico, uma que acontece voluntariamente e outra que acontece de maneira natural ou involuntária. O SNP voluntário, ou somático, é responsável por coordenar as atividades voluntárias. O SNP somático é caracterizado por enviar estímulos recebidos do ambiente interno e externo para o sistema nervoso central e em seguida levar a resposta dada pelo SNC para os músculos estriados.',
    },
    {
        questao: 'Questão 23',
        comando: '(Amabis & Martho / 2006) Qual das alternativas indica corretamente os componentes do sistema nervoso central (SNC) e do sistema nervoso periférico (SNP)?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Encéfalo (SNC); Gânglios nervoso (SNC); Medula espinal (SNC); Nervos (SNP);',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Encéfalo (SNC); Gânglios nervoso (SNP); Medula espinal (SNC); Nervos (SNC);',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Encéfalo (SNC); Gânglios nervoso (SNP); Medula espinal (SNC); Nervos (SNP);',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'Encéfalo (SNP); Gânglios nervoso (SNC); Medula espinal (SNP); Nervos (SNC);',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) Encéfalo (SNC); Gânglios nervoso (SNP); Medula espinal (SNC); Nervos (SNP);. Explicação: O sistema nervoso central é formado pelo encéfalo e medula espinhal. Já o sistema nervoso periférico se dá pelos nervos, fios brancos e finos formados pela união de neurofibras do encéfalo e medula espinhal que se ramificam por todo o corpo, e gânglios nervosos, que consistem em dilatações de alguns nervos onde há os corpos celulares provenientes das neurofibras dos nervos.',
    },
    {
        questao: 'Questão 24',
        comando: '(Amabis & Martho / 2006) Quando uma pessoa se assusta, o ritmo cardíaco acelera-se, a pressão sanguínea eleva-se e a concentração de açúcar no sangue aumenta, entre outras coisas. Essas reações são desencadeadas diretamente pelo:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Encéfalo.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'SNPA parassimpático.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'SNPA simpático.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'SNP voluntário.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) SNPA simpático. Explicação: As neurofibras nervosas dos sistemas SNPA simpático e parassimpático orientam os mesmos órgãos, entretanto, enquanto o SNPA simpático incentiva comportamentos que motivam energia, como a aceleração dos batimentos cardíacos; outro fato é que na maioria das vezes os neurotransmissores liberados pelos neurônios pós-ganglionares são: noradrenalina, adrenalina e acetilcolina. O SNPA parassimpático age com estimulando fontes relaxantes, como a redução do ritmo cardíaco; e o neurotransmissor que pode ser liberado pelo neurônios pós-ganglionares deste é sempre a acetilcolina.',
    },
    {
        questao: 'Questão 25',
        comando: '(Amabis & Martho / 2006) A parte mais desenvolvida do encéfalo humano é o:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Cérebro.',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: 'Cerebelo.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Mesencéfalo.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Tronco encefálico.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: a) Cérebro. xplicação: O cérebro é formado a partir do telencéfalo e diencéfalo. O telencéfalo é a parte mais desenvolvida presente no encéfalo e a que ocupa maior parte da caixa encefálica. Esta superfície é marcada por sulcos e depressões (ou seja, possui diversos relevos e não é plana), os denominados giros cerebrais ou circunvolução cerebral; ainda sobre a superfície, esta possui um sulco (ou fenda) que divide o cérebro em dois hemisférios, onde a conexão deles é realizada pele corpo caloso (que por sua vez utiliza mais de 200 mil fibras nervosas para atuar nesta função).',
    },
    {
        questao: 'Questão 26',
        comando: '(Amabis & Martho / 2006) Qual é a parte do encéfalo responsável pela interpretação dos estímulos sensoriais e pela elaboração de planos de ação?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Cérebro.',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: 'Cerebelo.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Hipotálamo.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Tálamo.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: a) Cérebro. Explicação: As neurofibras nervosas dos sistemas SNPA simpático e parassimpático orientam os mesmos órgãos, entretanto, enquanto o SNPA simpático incentiva comportamentos que motivam energia, como a aceleração dos batimentos cardíacos; outro fato é que na maioria das vezes os neurotransmissores liberados pelos neurônios pós-ganglionares são: noradrenalina, adrenalina e acetilcolina. O SNPA parassimpático age com estimulando fontes relaxantes, como a redução do ritmo cardíaco; e o neurotransmissor que pode ser liberado pelo neurônios pós-ganglionares deste é sempre a acetilcolina.',
    },
    {
        questao: 'Questão 27',
        comando: '(Amabis & Martho / 2006) Que porção do encéfalo é a principal responsável pela coordenação dos movimentos das diversas partes do corpo e pela manutenção do equilíbrio corporal?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Cérebro.',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: 'Cerebelo.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Hipotálamo.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Tálamo.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: a) Cérebro. Explicação: O cérebro é formado a partir do telencéfalo e diencéfalo. O telencéfalo é a parte mais desenvolvida presente no encéfalo e a que ocupa maior parte da caixa encefálica. Esta superfície é marcada por sulcos e depressões (ou seja, possui diversos relevos e não é plana), os denominados giros cerebrais ou circunvolução cerebral; ainda sobre a superfície, esta possui um sulco (ou fenda) que divide o cérebro em dois hemisférios, onde a conexão deles é realizada pele corpo caloso (que por sua vez utiliza mais de 200 mil fibras nervosas para atuar nesta função).',
    },
    {
        questao: 'Questão 28',
        comando: '(Amabis & Martho / 2006) Qual é a porção do encéfalo responsável pela homeostase corporal e pela integração dos sistemas nervoso e endócrino?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Cérebro.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Cerebelo.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Hipotálamo.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'Tálamo.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) Hipotálamo. Explicação: O cérebro tem sua superfície muito pregueada e marcada por circunvoluções cerebrais e é dividido em hemisfério direito e esquerdo por um sulco longitudinal. O córtex cerebral é a região mais externa dos hemisférios, formada por corpos celulares. A região mais interna tem sua maior parte constituída por neurofibras, responsáveis pelo transporte de informações até o córtex cerebral. Os sulcos mais profundos dos hemisférios formam os lobos cerebrais que coordenam funções específicas, interpretam respostas e elaboram planos.',
    },
    {
        questao: 'Questão 29',
        comando: '(Amabis & Martho / 2006) A lesão da raiz ventral de um nervo raquidiano provocará:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Perda da sensibilidade das regiões enervadas.',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: 'Paralisia dos músculos enervados.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Perda da sensibilidade e paralisia muscular nas regiões inervadas.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Perda do sentido do olfato.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: a) Perda da sensibilidade das regiões enervadas. Explicação: O cerebelo é responsável por receber informações provindas do encéfalo e da medula espinal, que podem ser auditivas, visuais e a respeito das articulações e dos músculos. Assim, ele é responsável por ajudar a coordenar movimentos e a postura corporal. Essa estrutura está localizada entre a parte posterior do cérebro e a ponte, e conectado ao tálamo, ao tronco encefálico e a medula espinal por fibras nervosas.',
    },
    {
        questao: 'Questão 30',
        comando: '(Amabis & Martho / 2006) Como um estímulo captado pelas células sensoriais chega à medula espinal?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Sempre pela raiz dorsal de um nervo raquidiano.',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: 'Sempre pela raiz ventral de um nervo raquidiano.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Por ambas as raízes de um nervo raquidiano.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Pela raiz ventral ou pela raiz dorsal de um nervo raquidiano.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: a) Sempre pela raiz dorsal de um nervo raquidiano. Explicação: O hipotálamo está localizado sob o tálamo, atua na homeostase corporal (temperatura corporal apetite e equilíbrio hídrico), é o principal centro da expressão emocional e do comportamento sexual, e também participa da ativação de diversas glândulas produtoras de hormônios.',
    },
    {
        questao: 'Questão 31',
        comando: '(Amabis & Martho / 2006) Como uma ordem de ação sai da medula espinal?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Sempre pela raiz dorsal de um nervo raquidiano.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Sempre pela raiz ventral de um nervo raquidiano.',
            classificacao: 'correta'
        },
        {
            letra: 'c',
            alternativa: 'Por ambas as raízes de um nervo raquidiano.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Pela raiz ventral ou pela raiz dorsal de um nervo raquidiano.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: b) Sempre pela raiz ventral de um nervo raquidiano. Explicação: Entre as vértebras existem espaços pelos quais os nervos ligam-se à medula espinal, e em cada espaço há um par de nervos espinais a essa por dois conjuntos de fibras nervosas, as raízes. Um conjunto parte da região dorsal da medula e o outro da região ventral. A raiz ventral é formada por neurônios motores, responsáveis por conduzir impulsos nervosos do sistema nervoso central aos músculos.',
    },
    {
        questao: 'Questão 32',
        comando: '(Amabis & Martho / 2006 - adaptada) Assinale a alternativa que caracteriza, com a terminologia adequada e precisa, os componentes 1, 2, 3 e 6, apontados no esquema abaixo.',
        imagem: 'img/ques32.jpg',
        alternativas: [{
            letra: 'a',
            alternativa: '1 - Gânglio da raiz dorsal de um nervo espinal; 2 - raiz dorsal de um nervo espinal; 3 - raiz ventral de um nervo espinal; 6 - gânglio simpático de via nervosa autônoma. ',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: '1 - Gânglio da raiz dorsal de um nervo espinal; 2 - raiz dorsal de um nervo espinal; 3 - raiz ventral de um nervo espinal; 6 - gânglio simpático de via nervosa somática. ',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: '1 - Gânglio da raiz ventral de um nervo espinal; 2 - raiz dorsal de um nervo espinal; 3 - raiz ventral de um nervo espinal; 6 - gânglio simpático de via nervosa somática. ',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: '1 - Gânglio da raiz ventral de um nervo espinal; 2 - raiz ventral de um nervo espinal; 3 - raiz dorsal de um nervo espinal; 6 - gânglio simpático de via nervosa autônoma.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: a) 1 - Gânglio da raiz dorsal de um nervo espinal; 2 - raiz dorsal de um nervo espinal; 3 - raiz ventral de um nervo espinal; 6 - gânglio simpático de via nervosa autônoma.',
    },
    {
        questao: 'Questão 33',
        comando: '(Amabis & Martho / 2006 - adaptada) O nervo de número 7, mostrado na figura abaixo/acima, é motor e inervará alguma parte do corpo. Que tipo de parte esse nervo deverá inervar, a julgar pelas informações da figura?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Músculo esquelético.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Órgão visceral ou glândula.',
            classificacao: 'correta'
        },
        {
            letra: 'c',
            alternativa: 'Órgão do sentido.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: b) Órgão visceral ou glândula. Explicação: O SNPA (sistema nervoso periférico autônomo) possui uma divisão, o SNPA simpático e SNPA parassimpático. O SNPA simpático é formado pelos nervos raquidianos que saem das regiões lombares e torácicas da medula espinal; os gânglios nervosos deste se situam nas proximidades da medula. E o SNPA parassimpático que se dá a partir dos nervos cranianos (que saem do encéfalo) e dos raquidianos (que saem da medula espinal); os gânglios nervosos desse sistema ficam perto ou dentro do órgão inervado (que possui muitos nervos). Assim, como o nervo de número 7 possui um gânglio próximo à medula, deve inervar um órgão visceral ou glândula, já que pertence à via autônoma simpática.',
    },
    {
        questao: 'Questão 34',
        comando: '(Amabis & Martho / 2006 - adaptada) Admitindo que o neurônio 4 seja motor somático, qual a diferença, em termos de via nervosa e órgão que inerva, quando comparado a uma via a que pertence o neurônio 8?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'O neurônio 4 pertence à via nervosa somática (inerva músculos esqueléticos), enquanto o neurônio 8 faz parte da via nervosa autônoma (inerva vísceras ou glândulas).',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: 'O neurônio 4 pertence à via nervosa somática (inerva vísceras ou glândulas), enquanto o neurônio 8 faz parte da via nervosa autônoma (inerva músculos esqueléticos).',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'O neurônio 4 pertence à via nervosa autônoma (inerva vísceras ou glândulas), enquanto o neurônio 8 faz parte da via nervosa somática (inerva músculos esqueléticos).',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'O neurônio 4 pertence à via nervosa autônoma (inerva músculos esqueléticos), enquanto o neurônio 8 faz parte da via nervosa somática (inerva vísceras ou glândulas).',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: a) O neurônio 4 pertence à via nervosa somática (inerva músculos esqueléticos), enquanto o neurônio 8 faz parte da via nervosa autônoma (inerva vísceras ou glândulas). Explicação: O SNP somático envia estímulos recebidos para o sistema nervoso central e em seguida leva a resposta dada pelo SNC para os músculos estriados. Os nervos motores do SNP somático possuem os corpos celulares dos neurônios dentro do sistema nervoso central e as extremidades se encontram nos músculos que serão controlados; enquanto nos nervos sensoriais os corpos celulares ficam nos gânglios próximos à medula e as fibras enviam impulsos até a medula ou até o encéfalo. O SNP autônomo, ou SNP visceral, regula a parte interna do corpo e controla os sistemas nele presentes. Esse sistema possui dois tipos de neurônios, o neurônio pré-ganglionar, que está presente dentro do sistema nervoso central de onde seu axônio sai e vai até um gânglio onde se situa o corpo celular do outro, o neurônio pós-ganglionar (número 7).',
    },
    {
        questao: 'Questão 35',
        comando: '(Amabis & Martho / 2006 - adaptada) Por que as raízes ventrais de um nervo diferem das raízes dorsais?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'As raízes dorsais são responsáveis por receber estímulos dos órgãos do sentido e as raízes ventrais recebem estímulos dos músculos corporais.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'As raízes ventrais estão ligadas unicamente ao encéfalo e as raízes dorsais estão ligadas à medula, ambas são formadas por fibras nervosas mistas.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'A raiz dorsal é formada por neurônios sensitivos e a raiz ventral é formada por neurônios motores.',
            classificacao: 'correta'
        },],
        explicacao: 'Resposta: c) A raiz dorsal é formada por neurônios sensitivos e a raiz ventral é formada por neurônios motores. Explicação: A raiz dorsal é formada por neurônios sensitivos responsáveis por conduzir impulsos nervosos de órgãos sensitivos até o sistema nervoso central. A raiz ventral é formada por neurônios motores, responsáveis por conduzir impulsos nervosos do sistema nervoso central aos músculos.',
    },
    {
        questao: 'Questão 36',
        comando: '(UFSM - RS) Pode-se dizer que o acúmulo de mercúrio afeta a sobrevivência e o funcionamento dos ______. Tanto a transmissão do impulso nervoso, que ocorre sempre dos ______ para os _____, quanto a liberação de neurotransmissores são prejudicadas. Assinale a alternativa que completa corretamente as lacunas:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Dendritos - neurônios - axônios.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Axônios - dendritos - neurônios.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Neurônios - dendritos - axônios.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'Axônios - neurônios - dendritos.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Neurônios - axônios - dendritos.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) Neurônios - dendritos - axônios. Explicação: O mercúrio pode afetar as células nervosas (neurônios). Essas células são responsáveis pela transmissão do impulso nervoso, que ocorre em sentido único: dos detritos segue para o corpo celular e então para os axônios.',
    },
    {
        questao: 'Questão 37',
        comando: '(PUC - RJ) Um organismo pluricelular necessita transportar, de forma eficiente e rápida, informações para todas as células do seu corpo. Quanto mais eficiente for esta sinalização de acontecimentos, melhor a resposta do indivíduo e melhor deve ser sua adaptação ao meio. Quais os sistemas envolvidos diretamente nesse processo de sinalização?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Nervoso, respiratório e circulatório.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Respiratório, digestório e locomotor.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Respiratório, excretor e digestório.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Nervoso, hormonal e circulatório.',
            classificacao: 'correta'
        },
        {
            letra: 'e',
            alternativa: 'Respiratório, hormonal e locomotor.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: d) Nervoso, hormonal e circulatório. Explicação: O sistema nervoso coordena (em específico o hipotálamo) é responsável por coordenar as ações do sistema endócrino, que, por meio de hormônios, regula o funcionamento corporal. Esse sistema lança os hormônios na corrente sanguínea, assim, por meio do sistema circulatório, os hormônios atingem suas células-alvo.',
    },
    {
        questao: 'Questão 38',
        comando: '(UEPE) Sobre o sistema nervoso do homem e suas funções, é correto afirmar que: ( ) O hipotálamo é importante para a homeostase corporal. ( ) O equilíbrio corporal é controlado pelo bulbo raquidiano. ( ) Os atos de pensar, evocar lembranças e falar dependem da integridade do córtex cerebral. ( ) Os atos reflexos ocorrem no âmbito da medula espinal. ( ) O ato de andar de bicicleta é coordenado pelo cerebelo.',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'V - F - V - V - V.',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: 'V - F - V - V - F.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'V - F - F - F - V.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'V - V - V - V - V.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: a) V - F - V - V - V. Explicação: Com exceção da afirmativa II, as outras estão corretas, isso porque a ponte e o cerebelo controlam o equilíbrio corporal, enquanto o bulbo raquidiano é responsável por controlar as funções vitais, como os batimentos cardíacos e a respiração.',
    },
    {
        questao: 'Questão 39',
        comando: '(PUC - SP) Nas alternativas a seguir são mostrados os três itens: Parte do sistema nervoso estimulada; Substância liberada; Efeito sobre o ritmo cardíaco. Qual das alternativas apresenta corretamente o que se dá com uma pessoa em situação de perigo?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'I - Simpático; II - acetilcolina; III - aumento;',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'I - Parassimpático; II - acetilcolina; III - diminuição.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'I - Simpático; II - adrenalina; III - aumento;',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'I - Parassimpático; II - adrenalina; III - diminuição;',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) I - Simpático; II - adrenalina; III - aumento. Explicação: O SNPA simpático incentiva comportamentos que motivam energia, como a aceleração dos batimentos cardíacos, permitindo ao organismo responder a situações de estresse. Na maioria das vezes os neurotransmissores liberados pelos neurônios pós-ganglionares são: noradrenalina, adrenalina e acetilcolina.',
    },
    {
        questao: 'Questão 40',
        comando: '(PUC RS - 2022) Considere as seguintes afirmações sobre o estrato mielínico: I. sua degeneração é a causa da esclerose múltipla. II. suas estruturas celulares são denominadas nódulos de Ranvier. III. as interrupções nele observadas correspondem às células de Schwann. Está/Estão correta(s) a(s) afirmativa(s):',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'I, apenas.',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: 'I e II, apenas.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'II e III, apenas.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'I, II e III.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta a) I, apenas.',
    },
    {
        questao: 'Questão 41',
        comando: '(ECONRIO - 2022) Estudos mostram que a dieta alimentar de um indivíduo influencia diretamente a produção de neurotransmissores. A dieta carnívora fornece grande quantidade dos aminoácidos fenilalanina e tirosina, precursores da adrenalina e da noradrenalina. Já a dieta vegetariana proporciona maior ingestão de triptofano e colina, aminoácidos precursores de acetilcolina e serotonina. Dessa forma, pode-se afirmar que uma maior ingestão de carne estimula o seguinte ramo do sistema nervoso:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Central.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Somático.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Simpático.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'Parassimpático.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta c) Simpático.',
    },
    {
        questao: 'Questão 42',
        comando: '(ECONRIO - 2022) A nutrição parenteral total (NPT) é administrada por via intravenosa e indicada para pacientes com trato gastrointestinal não funcionante. Sua composição inclui quantidades adequadas de carboidratos, lipídios, aminoácidos, eletrólitos, minerais, oligoelementos e vitaminas, nutrientes necessários para manter o metabolismo e o crescimento celular e tecidual. Os dois eletrólitos, presentes em uma solução de NPT, envolvidos no processo de transmissão do impulso nervoso são:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Magnésio e sódio.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Cloro e magnésio.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Sódio e potássio.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'Potássio e cloro.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) Sódio e potássio. Explicação: Sódio e Potássio estão envolvidos no processo de transmissão do impulso nervoso. Para que uma sinapse ocorra, um neurônio que está em potencial de repouso, ou seja, que não foi estimulado, tem sua superfície da membrana interna mais eletricamente negativa com relação ao exterior. Quando um neurônio é estimulado, a permeabilidade de sua membrana aos íons de sódio (Na+) e potássio (K+) muda, o que faz que sua diferença de potencial também mude, essa inversão de potencial é chamada de potencial de ação. Esse processo é chamado de despolarização da membrana. A propagação do impulso gerado pelo potencial de ação é chamada de impulso nervoso.',
    },
    {
        questao: 'Questão 43',
        comando: '(UECE CEV - 2021) O sistema nervoso humano é dividido em sistema nervoso central (SNC) e sistema nervoso periférico (SNP). A respeito das funções desses sistemas, escreva V ou F conforme seja verdadeiro ou falso o que se afirma nos itens abaixo. ( ) O SNP, constituído do encéfalo e da medula espinal, integra e processa as informações que o restante do organismo envia ou recebe. ( ) O SNC é responsável pela elaboração dos pensamentos, das memórias e das emoções. ( ) O SNC é formado por nervos e gânglios, cuja função é manter o fluxo de informações entre o SNP e o restante do corpo. A sequência correta, de cima para baixo, é:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: ' V, V, V.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'F, V, F.',
            classificacao: 'correta'
        },
        {
            letra: 'c',
            alternativa: 'V, F, V.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'F, F, F.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: b) F, V, F. Explicação: O SNC, constituído pelo encéfalo e medula espinal, processa as informações recebidas. O SNP, formado por gânglios nervosos e nervos é responsável pela comunicação entre o corpo e o SNC.',
    },
    {
        questao: 'Questão 44',
        comando: '(UCS/2022) Os golfinhos, assim como os demais mamíferos marinhos (e até mesmo os humanos), reduzem a frequência cardíaca no momento do mergulho, como parte do chamado “reflexo do mergulho”. Pesquisas têm mostrado que, o que antes se pensava ser uma ação controlada pelo Sistema Nervoso Autônomo, no caso dos golfinhos, pode ser uma ação voluntária e regulada, de acordo com a duração e o tipo de mergulho que os animais pretendem realizar - e essa estratégia potencializaria a atividade de mergulho e diminuiria os riscos dadoença da descompressão nesses animais. Em relação ao sistema nervoso autônomo, nos humanos, é correto afirmar que:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Neurotransmissor liberado pela divisão Parassimpática é a adrenalina.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'É dividido nas porções Sistema Nervoso Periférico e Sistema Nervoso Somático.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Suas divisões se distinguem tanto funcionalmente, devido ao tipo de controle realizado sobre cada órgão, como estruturalmente, devido à região do Sistema Nervoso Central de onde partem as fibras de cada divisão.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'A redução da frequência cardíaca e os estímulos à movimentação do estômago e dos intestinos são regulações feitas pela divisão Simpática.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'A liberação de glicose pelo fígado, para auxiliar em um momento de estresse, é uma ação da divisão Parassimpática.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) Suas divisões se distinguem tanto funcionalmente, devido ao tipo de controle realizado sobre cada órgão, como estruturalmente, devido à região do Sistema Nervoso Central de onde partem as fibras de cada divisão. A) Falsa. O neurotransmissor liberado pela divisão parassimpática é acetilcolina. B) Falsa. É dividido nas porções “simpático” e “parassimpático”. C) Verdadeira. D) Falsa. A redução da frequência cardíaca e o estímulo à movimentação do estômago e dos intestinos é feita pela porção parassimpática. E) Falsa. Por ação do sistema nervoso simpático ocorre  liberação de catecolaminas nas situações emergenciais do estresse, ativando a glicogenólise no líquido extracelular, e glicogênese no fígado, inibindo a insulina e estimulando o glucagon. (Disponível em:https://www.vestibulandoweb.com.br/biologia/questoes-sistema-nervoso-neuronio/ Acesso em: 04 jul. 2023).',
    },
    {
        questao: 'Questão 45',
        comando: '(Unicamp/2023) Estudos revelaram como a disbiose - desequilíbrio da microbiota intestinal - pode influenciar no desenvolvimento de distúrbios neurodegenerativos como a doença de Parkinson. As pessoas acometidas por essa doença apresentam alterações significativas nos centros motores do cérebro. Assinale a alternativa que preenche corretamente as lacunas no excerto a seguir. A agregação da proteína a-sinucleína nos (i) ________ está relacionada com a doença de Parkinson. Foi demonstrado que células específicas do tecido (ii) ________ da mucosa intestinal podem expressar essa proteína. A disbiose pode levar ao aumento de espécies de (iii) ________ que, eventualmente, contribuem para agregação da a-sinucleína no intestino, e essa proteína pode migrar para o (iv) ________, configurando um possível mecanismo de surgimento da doença de Parkinson esporádica. neurônios; (ii) epitelial; (iii) bactérias; (iv) sistema nervoso central.',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: '(i) linfonodos; (ii) conjuntivo; (iii) bactérias; (iv) sistema nervoso autônomo.',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: '(i) linfonodos; (ii) epitelial; (iii) vírus; (iv) sistema nervoso central.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: '(i) neurônios; (ii) conjuntivo; (iii) vírus; (iv) sistema nervoso autônomo.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: a) (i) linfonodos; (ii) conjuntivo; (iii) bactérias; (iv) sistema nervoso autônomo. A agregação da proteína a-sinucleína nos neurônios está relacionada com a doença de Parkinson. Foi demonstrado que células específicas do tecido epitelial da mucosa intestinal podem expressar essa proteína. A disbiose pode levar ao aumento de espécies de bactérias que, eventualmente, contribuem para agregação da a-sinucleína no intestino, e essa proteína pode migrar para o sistema nervoso central, configurando um possível mecanismo de surgimento da doença de Parkinson esporádica. (Vestibulando web. Disponível em: https://www.vestibulandoweb.com.br/biologia/questoes-sistema-nervoso-neuronio/ Acesso em: 04 jul. 2023).',
    },
    {
        questao: 'Questão 46',
        comando: '(CEFET-MG) O mecanismo de recepção e transmissão de estímulo nervoso se dá através de fibras nervosas mielínicas ou amielínicas, onde a rapidez de propagação difere entre elas. O fato de as fibras mielínicas propagarem o impulso nervoso mais rapidamente que as amielínicas, pode ser explicado pelas seguintes ocorrências: despolarização da fibra nervosa no nódulo de Ranvier; propagação saltatória dos impulsos na fibra nervosa; propagação contínua dos impulsos ao longo da fibra nervosa; inversão de cargas iônicas na fibra nervosa, quando em repouso. As afirmativas incorretas são apenas:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'I e II.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'I e IV.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'II e III.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'II e IV.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'III e IV.',
            classificacao: 'correta'
        },],
        explicacao: 'Resposta: e) III e IV. Explicação: Estão ERRADAS as afirmações III e IV.  III. Nas fibras mielínicas a despolarização ocorre somente nos nódulos de Ranvier (nós neurofibrosos); IV. Não ocorre inversão de cargas quando o neurônio está em repouso. (Vestibulando web. Disponível em: https://www.vestibulandoweb.com.br/biologia/questoes-sistema-nervoso-neuronio/ Acesso em: 04 jul. 2023).',
    },
    {
        questao: 'Questão 47',
        comando: '(UECE/2019) Atente para o seguinte enunciado: Os sintomas incluem descoordenação motora e demência progressivas devido à perda prematura de neurônios do sistema nervoso central. Manifesta-se por volta dos 40 anos de idade. É hereditária e a chance de um filho(a) da pessoa afetada desenvolver a doença é de 50%. O enunciado acima descreve uma doença degenerativa rara conhecida como:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'mal de Alzheimer.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'mal de Parkinson.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'doença de Huntington.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'esclerose múltipla.',
            classificacao: 'correta'
        },],
        explicacao: 'Resposta: d) esclerose múltipla. Explicação: Mal de Alzheimer: caracteriza-se por uma neuro degeneração progressiva, afetando a área cognitiva, apresentando como sintoma característico a perda da memória recente. Mal de Parkinson:  Ocorre morte de neurônios responsáveis pela produção de dopamina, relacionados aos movimentos do corpo. Como sinais característicos surgem rigidez muscular e tremores involuntários. Doença de Huntington: trata-se de uma doença genética e degenerativa, que se caracteriza por perda de neurônios de células do “gânglio da base”, afetando capacidade motora, cognitiva e psiquiátrica. (Vestibulando web. Disponível em: https://www.vestibulandoweb.com.br/biologia/questoes-sistema-nervoso-neuronio/ Acesso em: 04 jul. 2023).',
    },
    {
        questao: 'Questão 48',
        comando: '(UECE/2019) As membranas que recobrem o cérebro humano são denominadas de:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'dura-máter, celular e pia-máter.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'dura-máter, aracnoide e pia-máter.',
            classificacao: 'correta'
        },
        {
            letra: 'c',
            alternativa: 'plasmática, aracnoide e celular.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'celular, plasmática e aracnídeo.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: b) dura-máter, aracnoide e pia-máter. Explicação: De fora para dentro, as membranas (meninges) são: dura-máter; aracnoide e pia-máter. (Vestibulando web. Disponível em: https://www.vestibulandoweb.com.br/biologia/questoes-sistema-nervoso-neuronio/ Acesso em: 04 jul. 2023).',
    },
    {
        questao: 'Questão 49',
        comando: '(Pism - UFJF/2018) O consumo abusivo de álcool e o uso de maconha, cocaína e outras drogas ilícitas são considerados sérios problemas de saúde pública, já que prejudicam o funcionamento do sistema nervoso dos usuários. O consumo dessas drogas altera a transmissão do impulso nervoso, afetando a comunicação entre os neurônios em regiões específicas do cérebro. Sobre o funcionamento do tecido nervoso assinale a alternativa INCORRETA:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Os neurônios são as células fundamentais do tecido nervoso, portanto, problemas no seu funcionamento podem prejudicar o raciocínio, o aprendizado e a memória.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Neurotransmissores são substâncias químicas responsáveis pela comunicação entre os neurônios.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Dopamina, acetilcolina e noradrenalina são exemplos de neurotransmissores cujas produção e liberação podem ser afetadas pelo uso de drogas.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'O consumo de álcool afeta o funcionamento normal dos neurônios, podendo levar à sonolência e diminuição dos reflexos, além da perda da coordenação motora.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Os neurônios se conectam por meio de pontos de contato entre si, denominados “pontes de hidrogênio”, onde ocorre a liberação de mensageiros químicos chamados de “hormônios”.',
            classificacao: 'correta'
        },],
        explicacao: 'Resposta: e) Os neurônios se conectam por meio de pontos de contato entre si, denominados “pontes de hidrogênio”, onde ocorre a liberação de mensageiros químicos chamados de “hormônios”. Explicação: Nas sinapses não há contato entre dois neurônios; a comunicação ocorre por meio da liberação de substâncias chamadas neurotransmissores. (Vestibulando web. Disponível em: https://www.vestibulandoweb.com.br/biologia/questoes-sistema-nervoso-neuronio/ Acesso em: 04 jul. 2023).',
    },
    {
        questao: 'Questão 50',
        comando: '(FADIP/2017 - Medicina) A contração de um músculo esquelético ocorre quando as terminações axônicas de um nervo liberam sobre ele uma substância neurotransmissora que se liga a receptores da membrana da fibra muscular, gerando, nela, um potencial de ação que desencadeia o processo de contração. Essa substância neurotransmissora liberada pelo axônio, nas sinapses neuromusculares, é conhecida por:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Adrenalina.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Serotonina.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Acetilcolina.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'Noradrenalina.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) Acetilcolina. Explicação: A contração muscular deve-se à liberação de acetilcolina na placa motora (junção neuromuscular). Receptores específicos, localizados na fibra muscular, reconhecem esse neurotransmissor como sinal para a contração. (Vestibulando web. Disponível em: https://www.vestibulandoweb.com.br/biologia/questoes-sistema-nervoso-neuronio/ Acesso em: 04 jul. 2023).',
    },
    {
        questao: 'Questão 51',
        comando: ' (UFJF) Alguns anestésicos locais agem impedindo a despolarização da membrana plasmática dos neurônios. A sensação de dor é, então, eliminada em função da:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'modificação da fenda sináptica.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'ruptura da bainha de mielina dos neurônios.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'diminuição do número de sinapses.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'inibição da secreção do neurotransmissor.',
            classificacao: 'correta'
        },
        {
            letra: 'e',
            alternativa: 'inversão no sentido do impulso nervoso.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: d) inibição da secreção do neurotransmissor. Explicação: Ao inibir a despolarização da membrana do axônio, não há o estímulo para que ocorra liberação do neurotransmissor na fenda sináptica. (Vestibulando web. Disponível em: https://www.vestibulandoweb.com.br/biologia/questoes-sistema-nervoso-neuronio/ Acesso em: 04 jul. 2023).',
    },
    {
        questao: 'Questão 52',
        comando: ' (UFOP) As várias atividades do organismo dependem do perfeito funcionamento do sistema nervoso: os neurônios levam informações da periferia para o SNC e vice-versa. Para exercerem essas atividades, os neurônios apresentam certas características, que não estão bem definidas em:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'As informações entre neurônios se dão por sinapses.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'O impulso nervoso sempre é conduzido do corpo celular para o axônio, para passagem de informações entre neurônios.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Os mediadores químicos estão sempre armazenados no corpo celular dos neurônios.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'A bainha de mielina torna a condução do impulso nervoso mais rápida nos neurônios.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) Os mediadores químicos estão sempre armazenados no corpo celular dos neurônios. Explicação: Os mediadores químicos (neurotransmissores) ficam armazenados em vesículas localizadas nas extremidades do axônio. (Vestibulando web. Disponível em: https://www.vestibulandoweb.com.br/biologia/questoes-sistema-nervoso-neuronio/ Acesso em: 04 jul. 2023).',
    },
    {
        questao: 'Questão 53',
        comando: '(CESMAC/2016) Nos seres humanos, o tecido nervoso constitui o principal sistema de integração corporal. Considerando a natureza do impulso nervoso, analise as afirmativas abaixo: em um neurônio em repouso, a superfície interna da membrana plasmática se encontra eletricamente mais positiva que a externa. o potencial de ação compreende a diferença dos potenciais elétricos entre as duas faces da membrana plasmática de neurônios estimulados. a despolarização, observada em neurônios estimulados, percorre a membrana sempre do axônio para os dendritos. Está(ão) correta(s):',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: '1, 2 e 3.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: '1 e 2 apenas.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: '2 e 3 apenas.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: '3 apenas.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: '2 apenas.',
            classificacao: 'correta'
        },],
        explicacao: 'Resposta: e) 2 apenas. 1) Falsa. Em um neurônio em repouso, a superfície interna é carregada negativamente e a superfície externa é carregada positivamente. 2) Verdadeira. 3) Falsa. O sentido de condução do impulso nervoso é dos dendritos para o axônio. (Vestibulando web. Disponível em: https://www.vestibulandoweb.com.br/biologia/questoes-sistema-nervoso-neuronio/ Acesso em: 04 jul. 2023).',
    },
    {
        questao: 'Questão 54',
        comando: '  (Unifor/2018) “E se ajudássemos os neurônios a “reparar” os danos causados pela esclerose múltipla? Esta é a pista que está sendo explorada por cientistas franceses para conter o avanço da esclerose múltipla, doença autoimune e degenerativa, para a qual ainda não há cura. O desafio terapêutico consiste em prevenir o avanço das deficiências e, uma das vias para conseguir isso, é a reparação da bainha de mielina, que é destruída progressivamente pela doença. A busca pela reparação da bainha de mielina na esclerose múltipla se justifica pelo fato de que nessa doença ocorre:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'aumento das expansões da membrana plasmática do axônio dos neurônios afetados na tentativa de melhorar a captação dos estímulos.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'propagação do impulso nervoso nos dois sentidos da fibra nervosa causando, assim, um colapso do sistema nervoso.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'diminuição da velocidade ou interrupção da propagação dos impulsos nervosos nos neurônios afetados pela doença.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'aumento do tamanho das fendas sinápticas entre os neurônios afetados, dificultando a transmissão dos impulsos nervosos entre essas células.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'superprodução de neurotransmissores como mecanismo compensatório para facilitar a condução do impulso nervoso entre um neurônio e outro.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) diminuição da velocidade ou interrupção da propagação dos impulsos nervosos nos neurônios afetados pela doença. Explicação: O estrato mielínico (bainha de mielina) atua como isolante elétrico, de modo que a despolarização do neurônio não ocorre nos locais em que ele se encontra; as despolarizações ocorrem somente nos nós neurofibrosos (nódulos de Ranvier), o que dá ao impulso nervoso um caráter saltatório (maior velocidade de propagação). (Vestibulando web. Disponível em: https://www.vestibulandoweb.com.br/biologia/questoes-sistema-nervoso-neuronio/ Acesso em: 04 jul. 2023).',
    },
    {
        questao: 'Questão 55',
        comando: '(Amabis & Martho MODERNA PLUS 2020 (adaptada)) Assinale os termos abaixo que substitui corretamente o X entre parênteses das frases 1 e 2. 1. O(a) (X) é um filamento formado por fibras nervosas envolvidas por tecido conjuntivo que se projeta no sistema nervoso central. 2. O(a) (X) é um pequeno aglomerado de corpos celulares de neurônios localizados fora do sistema nervoso central que forma uma dilatação em certos feixes de fibras nervosas.',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Encéfalo.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Gânglio nervoso.',
            classificacao: 'correta'
        },
        {
            letra: 'c',
            alternativa: 'Medula espinal.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Nervo.',
            classificacao: 'correta'
        },
        {
            letra: 'e',
            alternativa: 'Sistema nervoso.',
            classificacao: 'errada'
        },],
        explicacao: 'Explicação: Resposta 1: d). Resposta 2: b).',
    },
    {
        questao: 'Questão 56',
        comando: '(FAZU-MG) a região de encontro entre os neurônios e órgãos, onde ocorre a transmissão química de impulsos elétricos, é denominada:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Desmossomos.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Axônio.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Neuroglia.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Bainha de mielina.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Sinapse.',
            classificacao: 'correta'
        },],
        explicacao: 'Resposta: e) Sinapse. Explicação: A sinapse fica localizada entre os neurônios  estes que agem como neurotransmissores, transmitindo o impulso nervoso de um neurônio a outro.A sinapse é a responsável por fazer ligação entre as células assim levando o impulso nervoso por todo o sistema neural.',
    },
    {
        questao: 'Questão 57',
        comando: '(UFG-GO (adaptada)) Um chimpanzé com lesão no cerebelo tem comprometida a sua capacidade de ',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Mastigar e engolir alimentos.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Equilibrar-se sobre galhos de arvores.',
            classificacao: 'correta'
        },
        {
            letra: 'c',
            alternativa: 'Ouvir sons de predadores.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Sentir odor dos feromônios.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: b) Equilibrar-se sobre galhos de arvores. Explicação: Podemos dizer que o cerebelo se caracteriza como uma porção do sistema nervoso central que se relaciona com a postura e coordenação de movimentos. Ou seja, ele é que se responsabiliza pela manutenção do equilíbrio e movimentos, então a resposta correta seria a alternativa (B).',
    },
    {
        questao: 'Questão 58',
        comando: ' (Fuvest-SP) A figura representa um arco-reflexo: o calor da chama de uma vela provoca a retração do braço e o afastamento da mão da fonte de calor. Imagine duas situações: em A seria seccionada a raiz dorsal do nervo e em B, a raiz ventral. Considere as seguintes possibilidades relacionadas à transmissão dos impulsos nervosos neste arco-reflexo: I - A pessoa sente a queimadura, mas não afasta a mão da fonte de calor. II - A pessoa não sente a queimadura e não afasta a mão da fonte de calor. III - A pessoa não sente a queimadura, mas afasta a mão da fonte de calor. Indique quais dessas possibilidades aconteceriam na situação A e na situação B, respectivamente.',
        imagem: 'img/ques58.png',
        alternativas: [{
            letra: 'a',
            alternativa: 'I - A, II - B.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'I - A, III - B.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'II - A, I - B.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'II - A, III - B.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'III - A, II - B.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) II - A, III - B. Explicação: O nervo que sai da raiz dorsal é o sensitivo. Logo, se for cortado (A) a pessoa não sentirá a queimadura e não afastará a mão da fonte de calor. O nervo que sai da raiz ventral é o nervo motor. Logo, se for cortado (B) a pessoa sentirá a queimadura, mas não afastará a mão da fonte de calor.',
    },
    {
        questao: 'Questão 59',
        comando: '(Cesgranrio-RJ) Os anestésicos, largamente usados pela Medicina, tornam regiões ou todo o organismo insensível à dor porque atuam:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'nos axônios, aumentando a polarização das células.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'nas sinapses, impedindo a transmissão do impulso nervoso.',
            classificacao: 'correta'
        },
        {
            letra: 'c',
            alternativa: 'nos dendritos, invertendo o sentido do impulso nervoso.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'no corpo celular dos neurônios, bloqueando o metabolismo.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'na membrana das células, aumentando a bomba de sódio.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta b) nas sinapses, impedindo a transmissão do impulso nervoso. Explicação: Ao agir nas sinapses, locais onde os neurônios se encontram bem próximos, os anestésicos impedem que o impulso se propague de uma célula para outra.',
    },
    {
        questao: 'Questão 60',
        comando: '(Fuvest-SP) Qual dos seguintes comportamentos envolve maior número de órgãos do sistema nervoso?',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Salivar ao sentir o aroma de comida gostosa.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Levantar a perna quando o médico toca com martelo no joelho do paciente.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Piscar com a aproximação brusca de um objeto.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Retirar bruscamente a mão ao tocar um objeto muito quente.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Preencher uma ficha de identificação.',
            classificacao: 'correta'
        },],
        explicacao: 'Resposta e) Preencher uma ficha de identificação. Explicação: Ao preencher uma ficha de identificação, necessitamos de que o sistema nervoso interprete estímulos visuais das palavras, cheque na memória as informações solicitadas, além de mandar sinais que nos permitem escrever as respostas da ficha. As demais alternativas estão relacionadas com respostas simples e involuntárias.',
    },
    {
        questao: 'Questão 61',
        comando: ' (UEA) A regulação do ritmo respiratório é controlada por um órgão do sistema nervoso central (SNC). Quando a concentração de gás carbônico aumenta no sangue, esse gás consegue passar a barreira hematoencefálica, reagindo com água e formando o ácido carbônico, que reduz o pH do líquido cerebrospinal. A queda do pH desse líquido estimula diretamente os quimiorreceptores do centro respiratório, que enviam impulsos nervosos para aumentar a frequência respiratória. Os quimiorreceptores, aos quais o texto se refere, estão localizados no:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Bulbo.',
            classificacao: 'correta'
        },
        {
            letra: 'b',
            alternativa: 'Cérebro.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Hipotálamo.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Corpo caloso.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'Cerebelo.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: a) Bulbo. Explicação: O bulbo é uma parte do encéfalo relacionada com a respiração, os batimentos cardíacos e a deglutição.',
    },
    {
        questao: 'Questão 62',
        comando: '(UFSM) Pode-se dizer que o acúmulo de mercúrio afeta a sobrevivência e o funcionamento dos....... Tanto a transmissão do impulso nervoso, que ocorre sempre dos ..... para os ........... quanto a liberação de neurotransmissores é prejudicada. Indique a alternativa que completa corretamente as lacunas:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'dendritos — neurônios — axônios.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'axônios — dendritos — neurônios.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'neurônios — dendritos — axônios.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'axônios — neurônios — dendritos.',
            classificacao: 'errada'
        },
        {
            letra: 'e',
            alternativa: 'neurônios — axônios — dendritos.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) neurônios — dendritos — axônios. Explicação: O mercúrio é uma substância que causa degeneração neural. O impulso nervoso acontece sempre no sentido dendrito, corpo celular e axônio.',
    },
    {
        questao: 'Questão 63',
        comando: ' (Brasil Escola/2023) A medula espinhal é uma estrutura cilíndrica que se estende desde o forame magno até a segunda vértebra lombar. Essa estrutura está relacionada com respostas simples e rápidas a determinados estímulos, tais como retirar a mão de um objeto quente. Essas respostas são chamadas de respostas reflexas medulares. A respeito das respostas reflexas medulares, marque a alternativa correta.',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Nesse tipo de resposta, o encéfalo manda rapidamente um estímulo, sem que seja necessária a interferência da medula.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'A medula leva rapidamente o estímulo ao cérebro que produz uma resposta reflexa extremamente rápida.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Nesse processo, não há intervenção do encéfalo, sendo a medula a responsável por gerar a resposta.',
            classificacao: 'correta'
        },
        {
            letra: 'd',
            alternativa: 'Nas respostas reflexas medulares, o cérebro gera uma resposta e envia para a medula, que processa e responde ao estímulo.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: c) Nesse processo, não há intervenção do encéfalo, sendo a medula a responsável por gerar a resposta. Explicação: Nas respostas reflexas medulares, o encéfalo não interfere na resposta ao estímulo sensorial.',
    },
    {
        questao: 'Questão 64',
        comando: ' (Vunesp-SP) Imagine as seguintes situações: 1- Você vai tomar uma injeção e fica com o braço distendido, recebendo a picada da agulha sem nenhuma reação. 2- Você estava distraído e alguém picou-lhe o braço com um alfinete; a reação foi um salto. Os órgãos do sistema nervoso que controlaram a primeira e a segunda reação foram, respectivamente:',
        imagem: '',
        alternativas: [{
            letra: 'a',
            alternativa: 'Medula e cérebro.',
            classificacao: 'errada'
        },
        {
            letra: 'b',
            alternativa: 'Cerebelo e córtex.',
            classificacao: 'errada'
        },
        {
            letra: 'c',
            alternativa: 'Medula e hipotálamo.',
            classificacao: 'errada'
        },
        {
            letra: 'd',
            alternativa: 'Cérebro e medula.',
            classificacao: 'correta'
        },
        {
            letra: 'e',
            alternativa: 'Cérebro e neurônio.',
            classificacao: 'errada'
        },],
        explicacao: 'Resposta: d) Cérebro e medula. Explicação: Ao saber que vamos tomar uma injeção, controlamos nossos impulsos, sendo assim, teremos um ato voluntário controlado pelo cérebro. Quando estamos desprevenidos, a resposta é um ato reflexo e involuntário, comandado pela medula.',
    },
]


const ques = document.getElementById('questao');
let index = 0;
for (let questao of questoes) {
    let listaAlternativas = questao.alternativas;
    ques.innerHTML +=
        `<form action="">
        <div class="nome">${questao.questao}</div>
        <div class="comando">${questao.comando}</div>
        <img src="${questao.imagem}" class="img_ques"/>
    `;
    for (let alternativa of listaAlternativas) {
        ques.innerHTML += `
        <div class="alt">
        <input type="radio" id="${alternativa.letra}" 
        name="questao${index}" 
        class="${alternativa.classificacao}" />
        <label for="${alternativa.letra}" class="classLabel">
        ${alternativa.letra}) ${alternativa.alternativa}</label>
        </div>
        `;
    }
    ques.innerHTML += `
    <div class="divBtn">
    <button class="btn" onclick="corrigir('questao${index}')">Responder</button>
    <button type="button" class="btn" data-bs-toggle="modal" onclick="exibirModal(${index})">Ver resposta</button>
    </div>

    </form>`;
    index++;

}

