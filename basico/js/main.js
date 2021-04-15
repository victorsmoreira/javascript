// var nome = "Victor Moreira"
// var idade = 31
// // alert(nome+" tem "+idade+" anos.")
// console.log(nome+" tem "+idade+" anos.")


// var lista = ['maçã', 'banana', 'laranja']
// lista.push('mamão')
// lista.pop()

// console.log(lista)
// console.log(lista.reverse())
// console.log(lista.toString())
// console.log(lista.join(' - '))

// var frutas = [{nome:'maçã',cor:'vermelha'},{nome:'banana',cor:'amarela'}]
// console.log(frutas)
// console.log(frutas[0].nome)

// var idade = prompt('Sua idade: ')
// if (idade>18){
//     console.log('Maior de idade.')    
// } else{
//     console.log('Menor de idade.')    
// }

// var count = 0;
// while (count <= 5){
//     console.log(count)
//     count++
// }

// for (count=0; count <=5; count++){
//     console.log(count)
// }

// var data = new Date();
// console.log(data.getMonth())

// function soma(n1,n2){
//     return n1+n2
// }
// console.log(soma(5,2))

function botao(){
    document.getElementById('agradecimento').innerHTML = '<b>Olha a Lasanha!! kkkkkkk</b>'
}

function redirecionar(){
    window.open('https://www.google.com.br/')               //abre nova aba
    // window.location.href='https://www.google.com.br/'    //redireciona
}

function trocar(elemento){
    // document.getElementById('mouseover').innerHTML = 'Trocou, parabéns'
    elemento.innerHTML = 'Trocou, parabéns'
    // alert('Trocar texto')
}

function voltar(elemento){
    // document.getElementById('mouseover').innerHTML = 'Passe o mouse aqui'
    elemento.innerHTML = 'Passe o mouse aqui'
}

function load(){
    alert('Página carregada')
}

function funcaoChange(elemento){
    console.log(elemento.value)
}