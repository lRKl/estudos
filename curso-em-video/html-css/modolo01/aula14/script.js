function carregar() {
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h${min}.` 
    if (hora >= 0 && hora < 12) {
        //DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#fad194'
    } else if (hora >12 && hora <= 18) {
        //TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#ff6d00'
    } else {
        //NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#262a2f'
    }
}