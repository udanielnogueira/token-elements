function carregar() {
  const body = document.querySelector('#body');
  const loading = document.querySelector('.loading');
  const container = document.querySelector('.container');
  const loading__text = document.querySelector('.loading__text');

  setTimeout(esconder, 1490);
  function esconder() {
    loading.style.display = 'none';
  }

  setTimeout(exibir, 1500);
  function exibir() {
    container.style.display = 'grid';
  }

  loading__text.innerText = 'Roi, vem sempre aqui? 😏';
  setTimeout(() => {
    loading__text.innerText = 'Cof cof... bem-vindo(a)!';
  }, 800);

  function esconder() {
    loading.style.display = 'none';
    body.classList.add('--dot-background');
  }
}

const containerDeItens = document.querySelector('.elements__items');
const input = document.querySelector('.hero__input');
const tituloElementos = document.querySelector('.elements__title');
const objeto = document.querySelector('.elements__object');
const elemento = document.querySelector('.elemento__item');

// Buttons BTN

function mudarTituloBtn() {
  tituloElementos.textContent = 'Buttons';
}

function exibirButtons() {
  for (button of buttons) {
    containerDeItens.innerHTML += button.html;
  }
}

function placeHolderBtn() {
  input.placeholder = 'TKBTN';
}

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

function exibirSectionButtons() {
  containerDeItens.innerHTML = '';
  exibirButtons();
  mudarTituloBtn();
  placeHolderBtn();
  exibirObjetoBtn();
}

// Loaders BTN

function exibirLoaders() {
  for (loader of loaders) {
    containerDeItens.innerHTML += loader.html;
  }
}

function placeHolderLoad() {
  input.placeholder = 'TKLOAD';
}

function mudarTituloLoader() {
  tituloElementos.textContent = 'Loaders';
}

function exibirObjetoLoad() {
  objeto.innerHTML = `
  <div class="loader-1">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>`;
}

function exibirSectionLoaders() {
  containerDeItens.innerHTML = '';
  exibirLoaders();
  mudarTituloLoader();
  placeHolderLoad();
  exibirObjetoLoad();
}

// Input

function exibirElementos() {
  if (input.value == 'TKBTN') {
    exibirSectionButtons();
  } else if (input.value == 'TKLOAD') {
    exibirSectionLoaders();
  }
}

input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    exibirElementos();
  }
});
