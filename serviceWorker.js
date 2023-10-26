const staticInterneuronios = "dev-Interneuronios-site-v1";
const assets = [
  "/",
  "Apostila.pdf",
  "bem_vindos.html",
  "curiosidades.html",
  "desafios.html",
  "doencas.html",
  "glossario.html",
  "index.html",
  "o_que_e.html",
  "painel_de_opcoes.html",
  "painel_de_opcoes.html?id=glia",
  "questoes.html",
  "referencias.html",
  "saude_mental.html",
  "snc.html",
  "snp.html",
  "tn.html",

  "img/anexo.svg",
  "img/back.svg",
  "img/bulbo.png",
  "img/chevron-compact-left.svg",
  "img/chevron-compact-right.svg",
  "img/CuriosidadeIcon.svg",
  "img/doencaIcon.svg",
  "img/favicon.gif",
  "img/home.svg",
  "img/imag_snc.png",
  "img/information.svg",
  "img/Interneuronios.png",
  "img/lupa.svg",
  "img/menu.svg",
  "img/mesencefalo.png",
  "img/nervoscranianos.png",
  "img/oQueEIcon.svg",
  "img/puzzle.svg",
  "img/ques32.jpg",
  "img/ques58.png",
  "img/question.svg",
  "img/referencia.svg",
  "img/saude.svg",
  "img/snp.png",
  //"img/snc.png",
  "img/tn.png",

  "img/arco/arco0.png",
  "img/arco/arco1.png",
  "img/arco/arco2.png",
  "img/bemvindos/tela_tutorial1.svg",
  "img/bemvindos/tela_tutorial2.svg",
  "img/bemvindos/tela_tutorial3.svg",
  "img/bemvindos/tela_tutorial4.svg",
  "img/bemvindos/tela_tutorial5.svg",
  "img/bemvindos/tela_tutorial6.svg",
  "img/bemvindos/tela_tutorial7.svg",
  "img/bemvindos/tela_tutorial8.svg",
  "img/bemvindos/tela1.svg",
  "img/bemvindos/tela2.svg",
  "img/bemvindos/tela3.svg",
  "img/cerebelo/cerebelo.png",
  "img/cerebelo/cerebelo2.png",
  "img/cerebro/cerebro/cerebro.png",
  "img/cerebro/cerebro/cerebrox.png",
  "img/cerebro/cerebro/massacinzenta.png",
  "img/espinal/espinal1.png",
  "img/espinal/espinal2.png",
  "img/espinal/espinal3.png",
  "img/espinal/ganglios.jpg",
  "img/glia/glia1.png",
  "img/glia/glia2.png",
  "img/glia/glia3.png",
  "img/hipotalamo/hipo.png",
  "img/hipotalamo/hipotalamo.png",
  "img/medula/medula0.png",
  "img/medula/medula1.png",
  "img/medula/medula2.png",
  "img/medula/medula3.png",
  "img/medula/medula4.png",
  "img/meninge/meninges.png",
  //"img/medula/meninges2.png",
  "img/neuronio/neuronio0.png",
  "img/neuronio/neuronio1.png",
  "img/neuronio/neuronio2.png",
  "img/neuronio/neuronio3.png",
  "img/neuronio/neuronio4.png",
  "img/neuronio/neuronio5.png",
  "img/ponte/tronco0.png",
  "img/ponte/tronco1.jpg",
  "img/ponte/tronco2.jpg",
  "img/sinapse/sinapse1.png",
  "img/sinapse/sinapse2.png",
  "img/sinapse/sinapse3.jpg",
  //"img/ponte/sinapse4.jpg",
  "img/talamo/talamo.png",
  "img/talamo/talamoo.png",
  "img/tutorial/tela_tutorial1.svg",
  "img/tutorial/tela_tutorial2.svg",
  "img/tutorial/tela_tutorial3.svg",
  "img/tutorial/tela_tutorial4.svg",
  "img/tutorial/tela_tutorial5.svg",
  "img/tutorial/tela_tutorial6.svg",
  "img/tutorial/tela_tutorial7.svg",
  "img/tutorial/tela_tutorial8.svg",

  "css/bem_vindos.css",
  "css/css_especifico.css",
  "css/curiosidades_doencas.css",
  "css/desafios_questoes_saude.css",
  "css/index.css",
  "css/o_que_e.css",
  "css/sistemas.css",
  "css/tutorial.css",

  "js/fun_bem_vindos.js",
  "js/fun_o_que_e.js",
  "js/fun_painel_opcoes.js",
  "js/fun_questoes.js",
  "js/fun_tutorial.js",
  "js/json_curiosidades.js",
  "js/json_desafios.js",
  "js/json_doencas.js",
  "js/json_glossario.js",
  "js/json_o_que_e.js",
  "js/json_questoes.js",
  //"js/fun_saude_mental.js",
  "js/main.js",
  "js/user_control.js",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticInterneuronios).then(async (cache) => {
      try {
        ok = await cache.addAll(assets);
      } catch (err) {
        console.log(err);
        console.error("sw: cache.addAll");
        for (let i of assets) {
          try {
            ok = await cache.add(i);
          } catch (err) {
            console.log(err);
            console.warn("sw: cache.add", i);
          }
        }
      }
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
