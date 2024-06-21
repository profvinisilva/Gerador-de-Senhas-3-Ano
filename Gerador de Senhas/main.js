const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '123456789';
const simbolos = '!@#$%&?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}


geraSenha();

function geraSenha() {
    
    
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    console.log(alfabeto);
    
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);
    
}

function classificaSenha(tamanhoAlfabeto){
    
    forcaSenha.classList.remove('forte', 'media', 'fraca');
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = '**Um computador pode levar ' + Math.floor((2**entropia)/(100e6*60*60*24)) + ' dias para descobrir sua senha**';
    
    if(entropia > 59){
        forcaSenha.classList.add('forte');
    }

    if(entropia < 59 && entropia > 35){
        forcaSenha.classList.add('media');
    }

    else{
        forcaSenha.classList.add('fraca');
    }

    console.log(entropia);
}