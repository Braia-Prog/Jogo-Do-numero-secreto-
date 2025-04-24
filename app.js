let listaDeNumerosSoteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1; 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial () {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela ('p', 'escolha um numero entre 1 e 10');
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector ('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela ('h1', 'Quase la...');
        exibirTextoNaTela ('p', 'O numero secreto é menor');
    } else {
        exibirTextoNaTela ('h1', 'Quase la...');
        exibirTextoNaTela ('p', 'O numero secreto é maior!');
    }         
    tentativas++
    LimparCampo (); 
}

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1); 
    let quantidadeDeElementosNaLista = listaDeNumerosSoteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite ) {
        listaDeNumerosSoteados = [];
    }

    if (listaDeNumerosSoteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio ();
    } else {
        listaDeNumerosSoteados.push(numeroEscolhido);
        console.log(listaDeNumerosSoteados);
        return numeroEscolhido;
    }
}

function LimparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    LimparCampo();
    tentativas = 1; 
    exibirMensagemInicial(); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
}