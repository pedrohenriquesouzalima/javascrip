function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#dcdcc7'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#e3beac'
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#111f27'
    }
}

