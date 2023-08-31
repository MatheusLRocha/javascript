function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //Cria uma tag do elemento escolhido. Nesse caso, ele vai criar uma imagem(img) por JS 
        img.setAttribute('id', 'foto')  //Cria um id ou class da variável escolhida. Lê-se como: id para foto. 
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //CRIANÇA
                img.setAttribute('src' , 'foto-crianca-m.png')  //Adiciona a origem da foto para a foto escolhida
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src' , 'foto-adolescente-m.png')
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src' , 'foto-adulto-m.png')
            } else {
                //IDOSO
                img.setAttribute('src' , 'foto-idoso-m.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //CRIANÇA
                img.setAttribute('src' , 'foto-crianca-f.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src' , 'foto-adolescente-f.png')
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src' , 'foto-adulto-f.png')
            } else {
                //IDOSO
                img.setAttribute('src' , 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' //Alinha o texto da div escolhida por JavaScript invés de CSS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)  //appendChild() adiciona um elemento para o local escolhido
    }
}
