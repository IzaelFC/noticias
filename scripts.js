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
        div.classList.add(divs[i]);

        const titulo = document.createElement("h1");
        titulo.id = "titulo";
        titulo.innerHTML = site['articles'][lista[i]]['title'];

        const descricao = document.createElement("p");
        descricao.id = "descricao";
        descricao.innerHTML = site['articles'][lista[i]]['description'];

        const url = document.createElement("span");
        url.id = "url";
        url.innerHTML = `<a id='link' href="${site['articles'][lista[i]]['url']}" target="_blank">Notícia completa<a/>`;

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
            el.style.marginLeft = "25px";
            el.style.marginRight = "25px";
            el.style.fontSize = "20px";
        })
    
        document.querySelectorAll('#descricao').forEach(function(el){
            el.style.marginLeft = "25px";
            el.style.marginRight = "25px";
            el.style.fontSize = "15px";
        })
    
        document.querySelectorAll('#link').forEach(function(el){
            el.style.marginBotton = "10px";
        })
    }

    
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
  