
let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroSecreto();
console.log(numeroSecreto);
let tentativa = 0;

function gerarNumeroSecreto (){
    let numero = parseInt(Math.random()*numeroLimite + 1);
    if (listaDeNumerosSorteados.length == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numero)){
        return gerarNumeroSecreto();
    }else{
        listaDeNumerosSorteados.push(numero);
        console.log(listaDeNumerosSorteados);
        return numero;
    }
}

const exibirTextoNaTela = (tag,texto) =>{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

const verificacao = () => {
    let chute = document.querySelector('input').value;
    if (chute === ''){
        exibirTextoNaTela('h3','');
    }else{
        chute = parseInt(chute);
        tentativa+=1;
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        if(chute === numeroSecreto){
        exibirTextoNaTela('h3',`Acertou! O número secreto é ${numeroSecreto}. Você utilizou um total de ${tentativa} ${palavraTentativa}.`);
        document.getElementById('new-game').classList.remove('button-disabled');
        document.getElementById('new-game').classList.add('button-enabled');
        document.getElementById('new-game').removeAttribute('disabled');
        }else if (chute > numeroSecreto){
        exibirTextoNaTela('h3',`Errou! O número é menor que ${chute}!`);
        limparCampo();
        }else{
        console.log(numeroSecreto);
        exibirTextoNaTela('h3',`Errou! O número é maior que ${chute}!`);
        limparCampo();
        }
        limparCampo();
    }
}

const novoNumero = () => {
    tentativa = 0;
    numeroSecreto = gerarNumeroSecreto();
    console.log(numeroSecreto);
    exibirTextoNaTela('h3','');
    document.getElementById('new-game').classList.remove('button-enabled');
    document.getElementById('new-game').classList.add('button-disabled');
    document.getElementById('new-game').setAttribute('disabled','');
}

const limparCampo = () => {
    chute = document.querySelector('input');
    chute.value = '';
}





