function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png' 
        document.body.style.background = '#b19562'      //Para carregar a imagem utilizamos o src, que significa "origem"
    }else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#ee7106'
    }else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#1c4a5e'
    }
}
