const staticInterneuronios = "dev-Interneuronios-site-v1"
const assets = [
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
    "/js/app.js",
    "/images/coffee1.jpg",
    "/images/coffee2.jpg",
    "/images/coffee3.jpg",
    "/images/coffee4.jpg",
    "/images/coffee5.jpg",
    "/images/coffee6.jpg",
    "/images/coffee7.jpg",
    "/images/coffee8.jpg",
    "/images/coffee9.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticInterneuronios).then(cache => {
            cache.addAll(assets)
        })
    )
})