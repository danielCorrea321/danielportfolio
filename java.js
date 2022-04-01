
function fechaInfos() {
    document.querySelector('.infos-sobrepostas').style.display = 'none';
}

projetoLista.map((item, index)=>{
    let projItem = document.querySelector('.project-list .project').cloneNode(true);
    projItem.setAttribute('data-key', index);
    
    projItem.querySelector('.project img').src = item.img;
    projItem.querySelector('.project .projQuest').innerHTML = item.miniDesc;
    
    projItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        let key = e.target.closest('.project').getAttribute('data-key');

        document.querySelector('.fotoProjeto img').src = projetoLista[key].img;
        document.querySelector('.nome-Projeto').innerHTML = projetoLista[key].nome;
        document.querySelector('.desc-Projeto').innerHTML = projetoLista[key].descricao;

        

        document.querySelector('.infos-sobrepostas').style.opacity = 0;
        document.querySelector('.infos-sobrepostas').style.display = 'block';
        setTimeout(()=>{
            document.querySelector('.infos-sobrepostas').style.opacity = 1;
        }, 200);

        document.querySelector('.projQuest').style.display = 'none';
    });

    document.querySelector('.project-list').append(projItem);
});

function showMenu() {
    if(document.querySelector('header .menu').style.display == 'none') {
        document.querySelector('header .menu').style.display = 'block';
    } else {
        document.querySelector('header .menu').style.display = 'none';
    }
}