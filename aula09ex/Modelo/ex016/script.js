function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar...'
    }else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `      
            }
        }else {
            // Contagem regressiva
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `      
            }

        }
        
        res.innerHTML += `\u{1F3C1}`
    }


}



//Use a concatenação para uma mensagem anterior no código não seja trocada pela próxima
//length é quantas letras tem dentro
//Para colocar emoji em JavaScrit usa-se o comando:  \u{codigo do emdoji}. Eles so funcionam entre crases