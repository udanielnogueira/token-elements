<div align="center">
  <h1>🐬 <br>Token+ Elements</h1>
  <p>Elementos em HTML e CSS a um token de distância. Basta digitar o token dos elementos que deseja explorar e pronto... Isso é 🐬Token+ Elements.</p>
  <img src="https://img.shields.io/github/languages/count/udanielnogueira/token-elements">
  <img src="https://img.shields.io/github/languages/top/udanielnogueira/token-elements">
  <img src="https://img.shields.io/github/languages/code-size/udanielnogueira/token-elements">
  <img src="https://img.shields.io/github/last-commit/udanielnogueira/token-elements">
  <img src="https://img.shields.io/github/deployments/udanielnogueira/token-elements/github-pages">
  <img src="https://img.shields.io/badge/responsive-yes-ff69b4">
</div>

## Sumário

- [Sobre](#about)
- [Deploy](#deploy)
- [Preview](#preview)
- [Tecnologias](#built-with)
- [Funcionalidades](#key-features)
- [Destaques](#highlights)
- [Meu contato](#contact)

<h2 id="about">Sobre</h2>

O Token+ Elements te ajuda no processo de inspiração e busca de elementos iterativos para a sua aplicação web.

Insira um token, veja os elementos e clique neles para acessar o código HTML e CSS.

Os tokens são palavras-chaves que devem ser inderidas no campo de token para desbloquear os elementos desejados. Ou, seu preferir, basta clicar nos botões de tokens também.

<h2 id="deploy">Deploy</h2>

Acesse o Token+ Elements no link abaixo:

[Plann.er](https://udanielnogueira.github.io/nlw-journey-fullstack/)

<h2 id="preview">Preview</h2>

Desktop

<img src="./assets/img/token-desktop-1.png">
<img src="./assets/img/token-desktop-2.png">

Mobile

<img src="./assets/img/token-mobile-1.png">
<img src="./assets/img/token-mobile-2.png">

<h2 id="built-with">Tecnologias</h2>

- CSS
- HTML
- JavaScript

<h2 id="key-features">Funcionalidades</h2>

- [x] Inserir ou clicar em um token
- [x] Visualizar elementos do token escolhido
- [x] Visualizar o código HTML e CSS do elemento

<h2 id="highlights">Destaques</h2>

Criação de uma div que simula uma tela de carregamento.

```html
<div class="loading">
  <div class="loading__spin"></div>
  <p class="loading__text"></p>
</div>
```

```js
function carregar() {
  const loading = document.querySelector(".loading");
  const container = document.querySelector(".container");
  const loading__text = document.querySelector(".loading__text");

  setTimeout(esconder, 1490);
  function esconder() {
    loading.style.display = "none";
  }

  setTimeout(exibir, 1500);
  function exibir() {
    container.style.display = "grid";
  }

  loading__text.innerText = "Um elemento?";
  setTimeout(() => {
    loading__text.innerText = "Calma aí...";
  }, 800);

  function esconder() {
    loading.style.display = "none";
  }
}
```

<br>

Injeções de HTML com JavaScript

```js
function exibirObjetoBtn() {
  objeto.innerHTML = `<div class="loader-5">
    <div class="box box-1">
      <div class="side-left"></div>
      <div class="side-right"></div>
      <div class="side-top"></div>
    </div>
    <div class="box box-2">
      <div class="side-left"></div>
      <div class="side-right"></div>
      <div class="side-top"></div>
    </div>
    <div class="box box-3">
      <div class="side-left"></div>
      <div class="side-right"></div>
      <div class="side-top"></div>
    </div>
    <div class="box box-4">
      <div class="side-left"></div>
      <div class="side-right"></div>
      <div class="side-top"></div>
    </div>
  </div>`;
}
```

<br>

Event Listener da tecla ENTER no campo de Token

```js
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    exibirElementos();
  }
});
```

<h2 id="contact">Meu contato</h2>

LinkedIn [@udanielnogueira](https://www.linkedin.com/in/udanielnogueira/)
