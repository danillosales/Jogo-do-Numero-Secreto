
let numeroSecreto = parseInt(Math.random()*100 + 1);
console.log(numeroSecreto);
let tentativa = 0;

const exibirTextoNaTela = (tag,texto) =>{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

const verificacao = () => {
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    let chute = document.querySelector('input').value;
    if (chute === ''){
        exibirTextoNaTela('h2','');
    }else{
        chute = parseInt(chute);
        tentativa+=1;
        if(chute === numeroSecreto){
        exibirTextoNaTela('h2',`Acertou! O número secreto é ${numeroSecreto}. Você utilizou um total de ${tentativa} ${palavraTentativa}.`);
        }else if (chute > numeroSecreto){
        exibirTextoNaTela('h2',`Errou! O número é menor que ${chute}!`);
        }else{
        console.log(numeroSecreto);
        exibirTextoNaTela('h2',`Errou! O número é maior que ${chute}!`);
        }
    }
}




