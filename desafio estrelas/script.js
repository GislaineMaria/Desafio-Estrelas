const sections = document.querySelectorAll('section');
const numeroMaximoDePersonagens = 671;

numeroDoPersonagem = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

atualizarPersonagens = () => {
    const ids = new Array(sections.length);

    for (let i = 0; i < ids.length; i++) {
        ids[i] = numeroDoPersonagem();
    }

    return fetch(`https://rickandmortyapi.com/api/character/${ids}`, {
        method: 'GET', headers: { Accept: 'application/json', "Content-Type": 'application/json' }
    }).then((response) => response.json()).then((data) => {
        sections.forEach(function (item, indice) {
            image = item.getElementsByTagName('img')[0];
            image.src = data[indice].image;
            image.alt = 'Imagem do personagem: ' + data[indice].name;

            nome = item.getElementsByTagName('p')[0];
            nome.innerHTML = data[indice].name;
        });
    })
}

window.onload = atualizarPersonagens();