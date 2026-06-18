const introImage = document.querySelector("#introAnimation");
const introLabel = document.querySelector("#introLabel");

const themeNav = document.querySelector("#themeNav");
const themeBackground = document.querySelector("#themeBackground");
const themeText = document.querySelector("#themeText");

/* ANIMAÇÃO INICIAL EM LOOP */

const totalFrames = 10;

/*
  Quanto maior for este número, mais lenta fica a animação.
  Se quiseres ainda mais lento, usa 1600 ou 1800.
*/
const frameDuration = 1400;

const frames = Array.from({ length: totalFrames }, (_, index) => {
  return `img/inicio/${index + 1}.png`;
});

const introLabels = [
  "Origem",
  "Moeda Metálica",
  "Primeiras Moedas",
  "Império Romano",
  "Papel Moeda",
  "Sistema Financeiro",
  "Banco de Amesterdão",
  "Cartões e Pagamentos",
  "Bitcoin e Criptomoeda",
  "Pagamentos Digitais"
];

let currentFrame = 0;
let animationInterval = null;

function preloadImages(paths) {
  return Promise.all(
    paths.map((path) => {
      return new Promise((resolve) => {
        const image = new Image();

        image.onload = () => {
          resolve(true);
        };

        image.onerror = () => {
          console.error("Erro ao carregar imagem:", path);
          resolve(false);
        };

        image.src = path;
      });
    })
  );
}

function startIntroAnimationLoop() {
  if (!introImage || frames.length === 0) {
    return;
  }

  currentFrame = 0;
  introImage.src = frames[currentFrame];

  if (introLabel) {
    introLabel.textContent = introLabels[currentFrame];
  }

  if (animationInterval) {
    clearInterval(animationInterval);
  }

  animationInterval = setInterval(() => {
    currentFrame++;

    if (currentFrame >= frames.length) {
      currentFrame = 0;
    }

    introImage.src = frames[currentFrame];

    if (introLabel) {
      introLabel.textContent = introLabels[currentFrame];
    }
  }, frameDuration);
}

preloadImages(frames).then(() => {
  startIntroAnimationLoop();
});

/* DADOS DOS TEMAS */

const themes = [
  {
    key: "origem",
    buttonLabel: "Origem",
    title: "Origem",
    date: "10.000 A.C",
    image: "img/temas/F1.png",
    text: [
      "Antes da criação do dinheiro, as pessoas realizavam trocas diretas de bens e serviços através de um sistema conhecido como escambo.",
      "Neste modelo, um indivíduo oferecia algo que possuía em troca de algo de que necessitava. Por exemplo, um agricultor podia trocar cereais por ferramentas, produtos para animais ou outros bens úteis.",
      "O escambo surgiu porque as primeiras comunidades precisavam de uma forma de obter produtos que não conseguiam produzir sozinhas. Durante milhares de anos, esta foi a principal forma de comércio."
    ]
  },

  {
    key: "moeda-metalica",
    buttonLabel: "Moeda<br>Metálica",
    title: "Moeda Metálica",
    date: "700 A.C",
    image: "img/temas/F2.png",
    text: [
      "Com o crescimento das trocas comerciais, tornou-se necessário encontrar objetos de valor mais fáceis de transportar e aceitar.",
      "Os metais começaram a ser usados como forma de pagamento porque eram duráveis, divisíveis e considerados valiosos.",
      "Esta mudança tornou as trocas mais simples e abriu caminho para o aparecimento das primeiras moedas."
    ]
  },

  {
    key: "primeiras-moedas",
    buttonLabel: "Primeiras<br>Moedas",
    title: "Primeiras Moedas",
    date: "Século VII A.C",
    image: "img/temas/F3.png",
    text: [
      "As primeiras moedas surgiram como peças metálicas com peso, forma e valor reconhecidos.",
      "Ao contrário dos objetos usados no escambo, as moedas permitiam uma troca mais rápida e padronizada.",
      "A sua utilização espalhou-se por várias civilizações e tornou-se uma das bases do comércio organizado."
    ]
  },

  {
    key: "imperio-romano",
    buttonLabel: "Império<br>Romano",
    title: "Império Romano",
    date: "27 A.C",
    image: "img/temas/F4.png",
    text: [
      "Durante o Império Romano, a moeda tornou-se essencial para administrar territórios, pagar soldados e cobrar impostos.",
      "A circulação monetária ajudou a ligar diferentes regiões através do comércio.",
      "As moedas romanas também eram usadas como instrumento político, mostrando imagens de imperadores e símbolos de poder."
    ]
  },

  {
    key: "papel-moeda",
    buttonLabel: "Papel<br>Moeda",
    title: "Papel Moeda",
    date: "Século VII",
    image: "img/temas/F5.png",
    text: [
      "O papel-moeda surgiu como uma alternativa mais leve e prática às moedas metálicas.",
      "Inicialmente, representava uma promessa de valor, podendo ser trocado por metais preciosos ou outros bens.",
      "Com o tempo, tornou-se uma das principais formas de dinheiro em circulação."
    ]
  },

  {
    key: "sistema-financeiro",
    buttonLabel: "Sistema<br>Financeiro",
    title: "Sistema Financeiro",
    date: "Séculos XV-XVII",
    image: "img/temas/F6.png",
    text: [
      "Com o aumento do comércio internacional, desenvolveram-se bancos, crédito e novas formas de guardar e movimentar dinheiro.",
      "O sistema financeiro permitiu organizar pagamentos, empréstimos e investimentos.",
      "Esta evolução foi importante para o crescimento económico das cidades e dos Estados."
    ]
  },

  {
    key: "banco-amesterdao",
    buttonLabel: "Banco de<br>Amesterdão",
    title: "Banco de Amesterdão",
    date: "1609",
    image: "img/temas/F7.png",
    text: [
      "O Banco de Amesterdão foi uma instituição importante na história bancária europeia.",
      "Ajudou a estabilizar pagamentos e a facilitar transações comerciais numa cidade com grande atividade económica.",
      "O seu funcionamento influenciou o desenvolvimento de sistemas bancários modernos."
    ]
  },

  {
    key: "cartoes",
    buttonLabel: "Cartões e<br>Pagamentos",
    title: "Cartões e Pagamentos",
    date: "Século XX",
    image: "img/temas/F8.png",
    text: [
      "Os cartões bancários mudaram a forma como as pessoas pagam bens e serviços.",
      "Em vez de transportar dinheiro físico, passou a ser possível pagar através de cartões ligados a contas bancárias.",
      "Esta inovação trouxe mais rapidez e praticidade às transações do quotidiano."
    ]
  },

  {
    key: "bitcoin",
    buttonLabel: "Bitcoin e<br>Criptomoeda",
    title: "Bitcoin e Criptomoeda",
    date: "2009",
    image: "img/temas/F9.png",
    text: [
      "Em 2009 surgiu a Bitcoin, a primeira criptomoeda descentralizada do mundo.",
      "Criada por uma pessoa ou grupo sob o pseudónimo de Satoshi Nakamoto, a Bitcoin introduziu uma nova forma de transferir valor através da internet sem depender de bancos ou governos.",
      "Embora continue a ser um tema de debate devido à sua volatilidade, as criptomoedas representam uma das maiores inovações financeiras do século XXI."
    ]
  },

  {
    key: "pagamentos-digitais",
    buttonLabel: "Pagamentos<br>Digitais",
    title: "Pagamentos Digitais",
    date: "Atualidade",
    image: "img/temas/F10.png",
    text: [
      "Os pagamentos digitais tornaram-se cada vez mais comuns com o crescimento da internet e dos smartphones.",
      "Hoje, é possível transferir dinheiro, comprar produtos e pagar serviços em poucos segundos.",
      "Esta fase representa uma transformação profunda na forma como o valor circula na sociedade."
    ]
  }
];

/* FUNÇÕES DOS TEMAS */

function getThemeByKey(themeKey) {
  return themes.find((theme) => theme.key === themeKey);
}

function updateBackground(theme) {
  if (!themeBackground) {
    return;
  }

  themeBackground.style.opacity = "0";

  setTimeout(() => {
    themeBackground.src = theme.image;
    themeBackground.alt = `Imagem do tema ${theme.title}`;
    themeBackground.style.opacity = "1";
  }, 180);
}

function updateText(theme) {
  if (!themeText) {
    return;
  }

  themeText.innerHTML = theme.text
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}

function createThemeButton(theme) {
  const button = document.createElement("button");

  button.className = "theme-button";
  button.dataset.theme = theme.key;
  button.innerHTML = theme.buttonLabel;

  button.addEventListener("click", () => {
    updateTheme(theme.key);
  });

  return button;
}

function createOpenPanel(theme) {
  const panel = document.createElement("div");

  panel.className = "open-theme-panel";

  panel.innerHTML = `
    <h2>${theme.title}</h2>
    <p>${theme.date}</p>
  `;

  return panel;
}

function renderThemeNav(activeThemeKey) {
  if (!themeNav) {
    return;
  }

  themeNav.innerHTML = "";

  themes.forEach((theme) => {
    if (theme.key === activeThemeKey) {
      const openPanel = createOpenPanel(theme);
      themeNav.appendChild(openPanel);
      return;
    }

    const button = createThemeButton(theme);
    themeNav.appendChild(button);
  });
}

function updateTheme(themeKey) {
  const selectedTheme = getThemeByKey(themeKey);

  if (!selectedTheme) {
    console.error("Tema não encontrado:", themeKey);
    return;
  }

  renderThemeNav(themeKey);
  updateBackground(selectedTheme);
  updateText(selectedTheme);
}

/* TEMA INICIAL */

updateTheme("origem");