const staticInterneuronios = "dev-Interneuronios-site-v1"
const assets = [
    "/",
    "../Apostila.pdf",
    "../bem_vindos.html",
    "../curiosidades.html",
    "../desafios.html",
    "../doencas.html",
    "../glossario.html",
    "../index.html",
    "../o_que_e.html",
    "../painel_de_opcoes.html",
    "../questoes.html",
    "../resferencias.html",
    "../saude_mental.html",
    "../snc.html",
    "../snp.html",
    "../tn.html",


    "/",
    "/index.html",
    "/css/style.css",
    "../img/anexo.svg",
    "../img/back.svg",
    "../img/bulbo.png",
    "../img/chevron-compact-left.svg",
    "../img/ chevron-compact-right.svg",
    "../img/CuriosidadeIcon.svg",
    "../img/doencaIcon.svg",
    "../img/facicon.gif",
    "../img/home.svg",
    "../img/imag_snc.svg",
    "../img/information.svg",
    "../img/interneuronios.png",
    "../img/lupa.svg",
    "../img/menu.svg",
    "../img/mesencefalo.png",
    "../img/nervoscranianos.png",
    "../img/oQueEIcon.svg",
    "../img/puzzle.svg",
    "../img/ques32.jpg",
    "../img/ques58.jpg",
    "../img/question.svg",
    "../img/referencia.svg",
    "../img/saude.svg",
    "../img/snp.png",
    "../img/snc.png",
    "../img/tn.png",


    "../img/arco/arco0.png",
    "../img/arco/arco1.png",
    "../img/arco/arco2.png",
    "../img/bemvindos/tela_tutorial1.svg",
    "../img/bemvindos/tela_tutorial2.svg",
    "../img/bemvindos/tela_tutorial3.svg",
    "../img/bemvindos/tela_tutorial4.svg",
    "../img/bemvindos/tela_tutorial5.svg",
    "../img/bemvindos/tela_tutorial6.svg",
    "../img/bemvindos/tela_tutorial7.svg",
    "../img/bemvindos/tela_tutorial8.svg",
    "../img/bemvindos/tela1.svg",
    "../img/bemvindos/tela2.svg",
    "../img/bemvindos/tela3.svg",
    "../img/cerebelo/cerebelo.png",
    "../img/cerebelo/cerebelo2.png",
    "../img/cerebro/cerebro.png",
    "../img/cerebro/cerebrox.png",
    "../img/cerebro/massacinzenta.png",
    "../img/espinal/espinal1.png",
    "../img/espinal/espinal2.png",
    "../img/espinal/espinal3.png",
    "../img/espinal/ganglios.jpg",
    "../img/glia/glia1.png",
    "../img/glia/glia2.png",
    "../img/glia/glia3.png",
    "../img/hipotalamo/hipo.png",
    "../img/hipotalamo/hipotalamo.png",
    "../img/medula/medula0.png",
    "../img/medula/medula1.png",
    "../img/medula/medula2.png",
    "../img/medula/medula3.png",
    "../img/medula/medula4.png",
    "../img/meninge/meningens.png",
    "../img/medula/meningens2.png",
    "../img/neuronio/neuronio0.png",
    "../img/neuronio/neuronio1.png",
    "../img/neuronio/neuronio2.png",
    "../img/neuronio/neuronio3.png",
    "../img/neuronio/neuronio4.png",
    "../img/neuronio/neuronio5.png",
    "../img/ponte/tronco0.png",
    "../img/ponte/tronco1.png",
    "../img/ponte/tronco2.png",
    "../img/sinapse/sinapse1.png",
    "../img/sinapse/sinapse2.png",
    "../img/sinapse/sinapse3.png",
    "../img/ponte/sinapse4.png",
    "../img/talamo/talamo.png",
    "../img/talamo/talamoo.png",
    "../img/tutorial/tela_tutorial1.svg",
    "../img/tutorial/tela_tutorial2.svg",
    "../img/tutorial/tela_tutorial3.svg",
    "../img/tutorial/tela_tutorial4.svg",
    "../img/tutorial/tela_tutorial5.svg",
    "../img/tutorial/tela_tutorial6.svg",
    "../img/tutorial/tela_tutorial7.svg",
    "../img/tutorial/tela_tutorial8.svg",














    "../css/bem_vindos.css",
    "../css/especifico.css",
    "../css/curiosidades_doencas.css",
    "../css/desafios_questoes_saude.css",
    "../css/index.css",
    "../css/o_que_e.css",
    "../css/sistemas.css",
    "../css/tutorial.css",


    "/fun_bem_vindos.js",
    "/fun_o_que_e.js",
    "/fun_painel_opcoes.js",
    "/fun_questoes.js",
    "/fun_tutorial.js",
    "/json_curiosidades.js",
    "/json_desafios.js",
    "/json_doencas.js",
    "/json_glossario.js",
    "/json_o_que_e.js",
    "/json_questoes.js",
    "/fun_saude_mental.js",
    "/main.js",
    "/serviceWorker.js",
    "/user_control.js",


]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticInterneuronios).then(cache => {
            cache.addAll(assets)
        })
    )
})