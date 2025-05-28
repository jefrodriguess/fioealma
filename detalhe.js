// detalhe.js

const produtos = {
  "casaco-billie": {
    titulo: "Casaco Billie",
    descricao: "Casaco feito com técnica de upcycle usando jeans reaproveitado. Costura artesanal e detalhes únicos.",
    criador: "Feito por Ana Silva - técnica de costura criativa.",
    imagens: [
      "img-vitrine/casaco-billie1.PNG",
      "img-vitrine/casaco-billie2.PNG"
    ]
  },
  "casaco-noah": {
    titulo: "Casaco Noah",
    descricao: "Casaco estilizado com retalhos de algodão cru. Ideal para dias frios com estilo e consciência ecológica.",
    criador: "Feito por Ana Silva - técnica de costura criativa.",
    imagens: [
      "img-vitrine/casaco-noah1.PNG",
      "img-vitrine/casaco-noah2.PNG",
      "img-vitrine/casaco-noah3.PNG"
    ]
  },
  "casaco-ceu": {
    titulo: "Casaco Céu",
    descricao: "Casaco estilizado com retalhos de algodão cru. Ideal para dias frios com estilo e consciência ecológica.",
    criador: "Feito por Ana Silva - técnica de costura criativa.",
    imagens: [
      "img-vitrine/casaco-ceu1.PNG",
      "img-vitrine/casaco-ceu2.PNG"
    ]
  },
  "conjunto-jeans-azul": {
    titulo: "Conjunto Jeans Azul",
    descricao: "Peças criadas a partir jeans pós curadoria, une estilo e consciência ecológica.",
    criador: "Feito por João Nascimento - alfaiataria artesanal.",
    imagens: [
      "img-vitrine/conjunto-jeans-azul1.PNG",
      "img-vitrine/conjunto-jeans-azul2.PNG"
    ]
  },
  "conjunto-jeans-preto": {
    titulo: "Conjunto Jeans Preto",
    descricao: "Peças criadas a partir jeans pós curadoria, une estilo e consciência ecológica.",
    criador: "Feito por João Nascimento - alfaiataria artesanal.",
    imagens: [
      "img-vitrine/conjunto-jeans-preto1.PNG",
      "img-vitrine/conjunto-jeans-preto2.PNG"
    ]
  },
  "conjunto-marron": {
    titulo: "Conjunto Marron",
    descricao: "Peças criadas a partir jeans pós curadoria, une estilo e consciência ecológica.",
    criador: "Feito por João Nascimento - alfaiataria artesanal.",
    imagens: [
      "img-vitrine/conjunto-marron1.PNG",
      "img-vitrine/conjunto-marron2.PNG",
      "img-vitrine/conjunto-marron3.PNG"
    ]
  },
  "bota-azul": {
    titulo: "Bota Azul",
    descricao: "Botas estilizadas com retalhos de jeans e aviamentos. Ideal para dias frios com estilo e consciência ecológica.",
    criador: "Feito por Pietra de Pinho - alfaiataria artesanal.",
    imagens: [
      "img-vitrine/bota-azul1.PNG",
      "img-vitrine/bota-azul2.PNG"
    ]
  },
  "bota-musgo": {
    titulo: "Bota Musgo",
    descricao: "Botas estilizadas com retalhos de jeans e aviamentos. Ideal para dias frios com estilo e consciência ecológica.",
    criador: "Feito por Pietra de Pinho - alfaiataria artesanal.",
    imagens: [
      "img-vitrine/bota-musgo1.PNG",
      "img-vitrine/bota-musgo2.PNG"
    ]
  },
  "bota-vermelha": {
    titulo: "Bota Vermelha",
    descricao: "Botas estilizadas com retalhos de jeans e aviamentos. Ideal para dias frios com estilo e consciência ecológica.",
    criador: "Feito por Pietra de Pinho - alfaiataria artesanal.",
    imagens: [
      "img-vitrine/bota-vermelha1.PNG",
      "img-vitrine/bota-vermelha2.PNG"
    ]
  }
 // Adicione mais produtos conforme necessário
};

// Pega o ID do produto pela URL
function obterParametroURL(nome) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nome);
}

const id = obterParametroURL("id");
const produto = produtos[id];

if (produto) {
  document.getElementById("titulo-produto").textContent = produto.titulo;
  document.getElementById("descricao-produto").textContent = produto.descricao;
  document.getElementById("info-criador").textContent = produto.criador;

  // Carrossel
  let imagemAtual = 0;
  const carrossel = document.getElementById("carrossel-imagens");

  function renderizarImagem() {
    carrossel.innerHTML = "";
    const img = document.createElement("img");
    img.src = produto.imagens[imagemAtual];
    img.alt = produto.titulo;
    img.classList.add("imagem-carrossel");
    carrossel.appendChild(img);
  }

  window.voltarImagem = function () {
    imagemAtual = (imagemAtual - 1 + produto.imagens.length) % produto.imagens.length;
    renderizarImagem();
  };

  window.avancarImagem = function () {
    imagemAtual = (imagemAtual + 1) % produto.imagens.length;
    renderizarImagem();
  };

  renderizarImagem();
} else {
  document.querySelector("main").innerHTML = "<p>Produto não encontrado.</p>";
}
