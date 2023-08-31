function multiplicar(){
    var num = document.getElementById('txtt')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Valor inválido! Digite um número')
    }else {
        var n = Number(num.value)
        tab.innerHTML = ''  //Esse comando serve para limpar a tela, ele vai receber "nada"
        for (var c = 1; c <= 10; c++){
            var item = document.createElement('option') //Cria um elemento option de tabela
            item.text = `${n} x ${c} = ${n*c}`       //O comando item.text seleciona a parte de texto(interna) do item option 
            item.value = `tab${c}`  //cria os valores dos options
            tab.appendChild(item)     
        }      
    }
}

/*
    Código com for sem select:

    function multiplicar(){
    var num = document.getElementById('txtt')
    var tab = document.getElementById('seltab')
    var res = document.getElementById('res')
    var n = Number(num.value)
    if(num.value.length == 0){
        alert('Valor inválido! Digite um número')
        res.innerHTML = '[ERRO]'
    }else {
        var n = Number(num.value)
        res.innerHTML = 'Tabuada: <br>'
        for (var c = 1; c <= 10; c++){
            var mult = n * c
            res.innerHTML += ` ${n} x ${c} = ${mult} <br> `
             
        }      
    }
}
*/

/*  
    Código com while sem select:

    function multiplicar(){
    var num = document.getElementById('txtt')
    var tab = document.getElementById('seltab')
    var res = document.getElementById('res')
    var n = Number(num.value)
    if(num.value.length == 0){
        alert('Valor inválido! Digite um número')
        res.innerHTML = '[ERRO]'
    }else {
        var n = Number(num.value)
        res.innerHTML = 'Tabuada: <br>'
        while(c <= 10) {
            var mult = n * c
            res.innerHTML += ` ${n} x ${c} = ${mult} <br> `
            c++
        }      
    }
*/


/* 
    while(c <= 10) {
        var mult = n * c
        res.innerHTML += ` ${n} x ${c} = ${mult} <br> `
        c++
    }
*/

/*
     for (var c = 1; c <= 10; c++){
            var mult = n * c
            res.innerHTML += ` ${n} x ${c} = ${mult} <br> ` 
        }      
*/








