/*Crie uma lista vazia, com o nome listaGenerica.*/
//let listaGenerica = [];

/*Crie uma lista de linguagens de programação chamada
linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.*/

/*let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramacao);

/*Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.*/
/*linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang')
console.log(linguagensDeProgramacao);

/*exiba no console apenas o primeiro elemento.*/
//console.log(linguagensDeProgramacao[0]);

/*Crie uma lista e exiba no console apenas o último elemento.*/
/*console.log(linguagensDeProgramacao[linguagensDeProgramacao.length - 1]);

/*Permita que o jogador escolha a faixa de números no início de cada jogo (por exemplo, entre 1 e 10, 1 e 50, 1 e 100).*/
let qtdNumeros;
    do{
        // Solicita o número e armazena na variável
        qtdNumeros = prompt("Com quantos números você deseja jogar?");
    
    // Converte a entrada para número (inteiro)
        qtdNumeros = parseInt(qtdNumeros);

    // Repete enquanto o valor for NaN (não é número), menor ou igual a zero, ou vazio
    } while (isNaN(qtdNumeros) || qtdNumeros <= 1);
let listaDeNumerosSorteados = [];//array ou lista dos números sorteados
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let contadorPartidas = 0;



console.log(numeroSecreto);


// funcao com retorno
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * qtdNumeros + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == qtdNumeros){
        listaDeNumerosSorteados = [];
    }
    //includes verifica se o número já está dentro da lista
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        // Se o número já está sorteado será gerado um novo número
        return gerarNumeroAleatorio();
    } else {
        //O número será acrescentado ao final da lista através da função push
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
     //comando para gerar áudio do texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e ' + qtdNumeros);    
}
/*Contador de Partidas: Adicione um contador que rastreie quantas vezes o jogador reiniciou o jogo. Exiba esse contador na tela*/
function mensagemQtdPartidas(){
    let palavraQtdPartidas = contadorPartidas > 1 ? ' vezes!' : " vez!";
    return alert("Você já reiniciou o jogo " + contadorPartidas + palavraQtdPartidas);
}

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';*/

// Essa função vai testar o chute
/*function verificarChute() {
    console.log("O botão foi clicado!");
}*/

/*Crie uma função chamada saudar que aceite um nome como parâmetro e exiba uma mensagem de saudação personalizada no console.
Por exemplo, se o nome for "Luri", a função deve exibir "Olá, Luri!".

let nome = prompt("Qual o seu nome?");

function saudar() {
    console.log("Olá, " + nome + "!");
}*/

/*Escreva uma função chamada somar que aceite dois números como parâmetros e retorne a soma deles.
Em seguida, exiba o resultado no console.*/

/*let num1 = prompt("Digite um número:");
num1 = Number(num1);
let num2 = prompt("Digite um número:");
num2 = Number(num2);

function somar(){
    console.log("A soma de " + num1 + " + " + num2 + " é " + (num1 + num2));
}*/

/*Crie uma função chamada éPar que aceite um número como parâmetro e retorne true se o número for par e false caso contrário.
Utilize o operador % (resto da divisão) para verificar se um número é par.*/

/*let numero = prompt("Digite um número");
numero = Number(numero);
let condicao = true;

function ePar(){
    if (numero % 2 == 0){
        condicao = true;
    } else {
        condicao = false;
    }
    console.log(condicao);
}*/

/*Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio*/
/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';*/

/*Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado:
function botaoClicado(){
    console.log("O botão foi clicado");
}*/

/*Crie uma função que exiba um alerta com a mensagem: Eu amo Js, sempre que o botão Chutar for pressionado:
function amoJS(){
    alert("Eu amo Js!");
}*/

/*Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil.
Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você

function nomeCidade(){
    let cidade = prompt("Digite o nome de uma cidade do Brasil:");
    alert("Estive em "+cidade+" e lembrei de você!");
}*/

/*Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta*/
/*function soma(){
    let num1 = Number(prompt("Digite um número:"));
    let num2 = Number(prompt("Digite outro número:"));
    alert(num1+" + "+num2+" = "+(num1+num2));
}*/


/*Crie uma função chamada calcularArea que recebe dois parâmetros: base e altura.
Dentro da função, calcule a área de um retângulo (base * altura) e retorne o resultado.
Chame a função com diferentes valores de base e altura e exiba os resultados no console.*/
/*function calcularArea(b1, a1){
    alert("Área do retângulo: "+(b1 * a1));
}

let base = prompt("Digite a base do retângulo:");
let altura = prompt("Digite a altura do retângulo");

calcularArea(base, altura);*/

/*Escreva uma função chamada converterCelsiusParaFahrenheit que aceita um parâmetro: celsius.
A função deve converter a temperatura de Celsius para Fahrenheit usando a fórmula: (celsius * 9/5) + 32.
Retorne o valor em Fahrenheit.
Teste a função com diferentes temperaturas em Celsius e mostre os resultados.*/

/*function converterCelsiusParaFahrenheit(celsius){
    fahrnheit = (celsius * 9 / 5) + 32;
    alert(celsius+" º = "+fahrnheit+" F");
}

let leiaCelsius = prompt ('Digite a temperatura em Celsius: ');
converterCelsiusParaFahrenheit(leiaCelsius);*/

/*Crie uma função chamada gerarMensagem que recebe dois parâmetros: nome e sobrenome.
A função deve retornar uma mensagem de saudação personalizada, como "Olá, [nome] [sobrenome]! Bem-vindo(a)!".
Chame a função com diferentes nomes e sobrenomes e exiba as mensagens no console.*/

/*function gerarMensagem(nome, sobrenome){
    alert("Olá, "+nome+" "+sobrenome+"!"+" Bem-vindo(a)!");
}

let n1 = prompt("Digite o seu nome: ");
let n2 = prompt("Digite o seu sobrenome: ");
gerarMensagem(n1, n2);*/

//Essa função exibe os textos na tela (altera os textos de h1 e p)

//Desabilitar o botão Novo Jogo (O HTML está inciando a página com ele habilitado)
document.getElementById('reiniciar').setAttribute('disabled',false);

//funcao deve ser chamada no programa principal para funcionar dentro de outras funções
exibirMensagemInicial()

/*// Essa função vai testar o chute
function verificarChute() {
    console.log("O botão foi clicado!");
}*/

// Essa função vai testar o chute
function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    if (chute === numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!';
        //Se o template string for direto, o HTML não vai entender, então será necessário criar uma variável como parâmetro na função exibirTetoNaTela 
        let mensagemTentativas = ('Você descobriu o número secreto com '+ tentativas + ' ' + palavraTentativa);
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
          exibirTextoNaTela('p','O número secreto é menor que ' + chute);
        } else {
          exibirTextoNaTela('p','O número secreto é maior que ' + chute); 
        }
        tentativas++;
        limparCampo(); 
    }
    console.log(tentativas);
    
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    //Desabilitar o botão Novo Jogo
    document.getElementById('reiniciar').setAttribute('disabled',true);
    contadorPartidas++;
    mensagemQtdPartidas()
}




/* Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console*/
/*function ola(nome){
    console.log("Olá, "+nome+"!");
}
    
let n1 = prompt("Qual o seu nome?");
ola(n1);*/

/*Criar uma função que recebe três números como parâmetros e retorna a média deles.*/
/*function media(n1,n2,n3){
    let resultado = ((n1 + n2 + n3) / 3);
    alert("A média de "+ n1 +", "+ n2 +" e "+ n3 +" é "+ resultado);
    return resultado;
}

function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

let numero1 = Number(prompt("Digite algum número"));
let numero2 = Number(prompt("Digite algum número"));
let numero3 = Number(prompt("Digite algum número"));
media(numero1, numero2, numero3);*/

/*Criar uma função que recebe dois números como parâmetros e retorna o maior deles. Criei uma função com operador ternário*/
/*function maiorNumero(a,b) {
    maior = a > b ? 'O número '+a+' é maior!' : 'O número '+b+' é maior!';
alert(maior);
}

function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let numero1 = Number(prompt("Digite algum número"));
let numero2 = Number(prompt("Digite algum número"));   
maiorNumero(numero1,numero2);*/


/*Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
  return numero * 2;
}*/

/*Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo*/
/*function elevacao(a) {
    alert("A multiplicação de "+ a +" por ele mesmo é " + (a*a));
}

function quadrado(numero) {
  return numero * numero;
}

let numero1 = Number(prompt("Digite algum número"));
elevacao(numero1);*/




