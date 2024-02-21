
let numeroSecreto = parseInt(Math.random()*100 + 1);
console.log(numeroSecreto);
let tentativa = 0;

const exibirTextoNaTela = (tag,texto) =>{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

const verificacao = () => {
    let chute = document.querySelector('input').value;
    if (chute === ''){
        exibirTextoNaTela('h2','');
    }else{
        chute = parseInt(chute);
        tentativa+=1;
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        if(chute === numeroSecreto){
        exibirTextoNaTela('h2',`Acertou! O número secreto é ${numeroSecreto}. Você utilizou um total de ${tentativa} ${palavraTentativa}.`);
        }else if (chute > numeroSecreto){
        exibirTextoNaTela('h2',`Errou! O número é menor que ${chute}!`);
        limparCampo();
        }else{
        console.log(numeroSecreto);
        exibirTextoNaTela('h2',`Errou! O número é maior que ${chute}!`);
        limparCampo();
        }
        limparCampo();
    }
}

const novoNumero = () => {
    numeroSecreto = parseInt(Math.random()*100 + 1);
    console.log(numeroSecreto);
    exibirTextoNaTela('h2','');
}

const limparCampo = () => {
    chute = document.querySelector('input');
    chute.value = '';
}





