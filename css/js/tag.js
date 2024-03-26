const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: 'blue',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00accl',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao;
    }//verifica se a tag existe no objeto, se sim retorna o valor de tag. se não não retorna o valor de padrão
};

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase();
    const cor = colors.get(tagName); 

    elemento.style.borderColor = cor; 

    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label');
        label.style.backgroundColor = cor;
        label.innerHTML = tagName;
        elemento.insertBefore(label, elemento.childNodes[0]);
    }
});
