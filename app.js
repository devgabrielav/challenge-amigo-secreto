//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');

function adicionarAmigo() {
  let nomeDigitado = document.querySelector('input');
  
  if (!nomeDigitado.value) {
    alert('Digite um nome válido.')
  } else {
    amigos.push(nomeDigitado.value);
  
    let novoAmigo = document.createElement('li');
    novoAmigo.textContent = nomeDigitado.value;
    listaAmigos.appendChild(novoAmigo);
  
    nomeDigitado.value = '';
  }
}

function sortearAmigo() {

  let indexSorteado = Math.floor(Math.random() * amigos.length);
  
  let amigoSorteado = document.getElementById('resultado');

  listaAmigos.hidden = true;

  amigoSorteado.innerHTML = `O amigo sorteado é ${amigos[indexSorteado]}!`
}