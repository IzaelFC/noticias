function limparPagina() {
    const noticias = document.getElementById('noticias');
    while (noticias.firstChild) {
        noticias.removeChild(noticias.firstChild);
    }
}


async function index(){
    limparPagina()
    const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    var assunto = document.getElementById('assunto').value
    const site = await (await fetch(`https://gnews.io/api/v4/search?q=${assunto}&lang=pt&country=br&max=10&apikey=d0df6239c6d844dd06030a0be7471059`)).json()
    
    for(let i in lista){
        const divs = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto', 'sexto', 'setimo', 'oitavo', 'nono', 'decimo']
        const div = document.createElement("div");
        div.className = `span-col-1 border-4 border-black rounded-xl ${divs[i]}`;

        const titulo = document.createElement("h1");
        titulo.id = "titulo";
        titulo.innerHTML = site['articles'][lista[i]]['title'];

        const descricao = document.createElement("p");
        descricao.id = "descricao";
        descricao.innerHTML = site['articles'][lista[i]]['description'];

        const url = document.createElement("span");
        url.id = "url";
        url.innerHTML = `<a class='mx-auto' id='link' href="${site['articles'][lista[i]]['url']}" target="_blank">Notícia completa<a/>`;

        const foto = document.createElement("img");
        foto.id = "foto";
        if(site['articles'][lista[i]]['image'] != null){
            foto.src = site['articles'][lista[i]]['image'];
        }else {
            foto.src = 'img/sem_foto.png';
        }

        div.appendChild(titulo);
        div.appendChild(foto);
        div.appendChild(descricao);
        div.appendChild(url);

        document.getElementById('noticias').appendChild(div);

        document.querySelectorAll('#titulo').forEach(function(el){
            el.className = 'text-orange-500 font-bold mx-auto px-6 text-xl'
        })
    
        document.querySelectorAll('#descricao').forEach(function(el){
            el.className = 'text-base mx-auto mb-4 px-8'
        })
    
        document.querySelectorAll('#link').forEach(function(el){
            el.className = 'text-orange-400 hover:text-orange-700 font-bold'
        })
    }

    document.getElementById('noticias').style.display = 'grid'
}


function habilitarBotao() {
    const botao = document.getElementById('botao');
    const assunto = document.getElementById('assunto').value;
    if (assunto.length > 0) {
      botao.disabled = false;
    } else {
      botao.disabled = true;
    }
  }


function Enter(event) {
    if (event.keyCode === 13 & document.getElementById('assunto').value != '') { // 13 representa a tecla "Enter"
        index();
    }
}