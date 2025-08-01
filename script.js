
function virarCartao() {
  const cartao = document.getElementById('cartao');
  cartao.classList.toggle('virado');
}

function abrirAba(elemento, idConteudo) {
  const todasAbas = document.querySelectorAll('.aba');
  todasAbas.forEach(aba => {
    aba.classList.remove('aberta');
    aba.querySelector('.conteudo-aba').style.display = 'none';
  });

  elemento.classList.add('aberta');
  const conteudo = elemento.querySelector('.conteudo-aba');
  conteudo.style.display = 'block';
}
