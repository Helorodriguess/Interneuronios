const staticInterneuronios = "dev-Interneuronios-site-v1"
const assets = [
    "/",
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


    "../css/bem_vindos.css",


    "/fun_bem_vindos.js",


]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticInterneuronios).then(cache => {
            cache.addAll(assets)
        })
    )
})