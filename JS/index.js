// Define uma variável para armazenar a última posição de scroll
let ultimaPosicaoScroll = window.pageYOffset;

window.addEventListener('scroll', function() {
  // Obtém a posição atual de scroll
  let posicaoAtualScroll = window.pageYOffset;
  var header = document.querySelector('header');

  // Verifica se a posição de scroll atual é maior que a última posição de scroll
  if (posicaoAtualScroll > ultimaPosicaoScroll){
    // Se for, esconde o header
    header.style.top = '-100px'; // Ajuste este valor conforme a altura do seu header
  } else {
    // Se não, mostra o header
    header.style.top = '0';
  }
  // Atualiza a última posição de scroll para a posição atual
  ultimaPosicaoScroll = posicaoAtualScroll;
});


document.addEventListener('DOMContentLoaded', (event) => {
  // Seleciona a imagem pelo id 'sol'
  const sol = document.querySelector('.sol');
  
  // Seleciona a div 'dentro' pelo class name
  const dentro = document.querySelector('.dentro');
  
  // Define uma flag para controlar a posição da imagem
  let isOnLeft = true;
  
  // Adiciona um event listener para 'click' na div 'dentro'
  dentro.addEventListener('click', () => {
    // Move a imagem para a direita ou volta para a esquerda
    if (isOnLeft) {
      dentro.style.transform = 'translateX(-30px)';
    } else {
      dentro.style.transform = 'translateX(0px)';
    }
    // Alterna a flag para mudar a posição no próximo clique
    isOnLeft = !isOnLeft;
    
    // Alterna entre o modo claro e escuro
    if (document.body.classList.contains('light-mode')) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      dentro.style.backgroundImage = 'url("./IMG/moon-fill.svg")'; // Define o plano de fundo para o modo claro
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      dentro.style.backgroundImage = 'url("./IMG/sun-fill.svg")'; // Define o plano de fundo para o modo escuro
    }
  });
  document.body.classList.add('light-mode');
  sol.src = './IMG/sun-fill.svg'; 
});

  
// Seleciona a tabela pelo seu class name
var tabela = document.querySelector('.inter_hover');

// Função para alternar a visibilidade das informações da tabela
function toggleTable() {
  // Verifica se a tabela está com a classe 'closed' que esconde as informações
  if (tabela.classList.contains('closed')) {
    tabela.classList.remove('closed'); // Remove a classe 'closed' para mostrar as informações
  } else {
    tabela.classList.add('closed'); // Adiciona a classe 'closed' para esconder as informações
  }
}

// Adiciona um event listener para detectar cliques na tabela
tabela.addEventListener('click', toggleTable);

// Adiciona a classe 'closed' por padrão para esconder as informações
tabela.classList.add('closed');



document.addEventListener("DOMContentLoaded", function() {
  var figuras = document.querySelectorAll('main figure'); // Seleciona todas as tags figure com a classe 'lazy'

  if ('IntersectionObserver' in window) {
    let observador = new IntersectionObserver((entradas, observador) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('entrar');
          observador.unobserve(entrada.target);
        }
      });
    }, { rootMargin: "0px 0px -200px 0px" });

    figuras.forEach(figura => {
      observador.observe(figura);
    });
  } else {
    // Fallback para navegadores que não suportam IntersectionObserver
    figuras.forEach(figura => {
      figura.classList.add('entrar');
    });
  }
});

//Menu lateral//


let menu = document.getElementById('menu')
let menuLateral = document.getElementById('menu-lateral')
let overlay = document.getElementById('overlay-menu')

menu.addEventListener('click',()=>(
  menuLateral.classList.add('abrir')
))

menuLateral.addEventListener('click',()=>(
  menuLateral.classList.remove('abrir')
))

overlay.addEventListener('click',()=>(
  menuLateral.classList.remove('abrir')
))