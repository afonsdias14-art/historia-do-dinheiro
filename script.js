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
      "Muito antes da existência do dinheiro, a vida era bastante diferente daquilo que conhecemos hoje. As pessoas dependiam daquilo que conseguiam produzir, cultivar, caçar ou fabricar com as próprias mãos para sobreviver.",

      "Para obter produtos que não possuíam, utilizavam o escambo, um sistema baseado na troca direta de bens e serviços. Um agricultor podia trocar cereais por ferramentas, enquanto um pastor podia trocar animais por roupas ou alimentos produzidos por outras pessoas.",

      "Este método permitiu às primeiras comunidades criar relações comerciais e cooperar entre si, tornando-se essencial para o desenvolvimento das civilizações antigas.",

      "No entanto, o escambo tinha muitos problemas. Era necessário que duas pessoas quisessem exatamente aquilo que a outra tinha para oferecer, algo que nem sempre acontecia. Além disso, alguns bens eram difíceis de transportar, dividir ou conservar durante muito tempo.",

      "Estas dificuldades levaram a humanidade a procurar uma solução mais prática, dando origem à longa evolução do dinheiro."
    ]
  },

  {
    key: "moeda-metalica",

    buttonLabel: "Moeda<br>Metálica",

    title: "Moeda Metálica",

    date: "700 A.C",

    image: "img/temas/F2.png",

    text: [
      "À medida que as cidades cresciam e o comércio aumentava, o escambo começou a tornar-se insuficiente para responder às necessidades da população.",

      "As pessoas precisavam de uma forma de pagamento que fosse facilmente reconhecida, transportável e aceite por todos.",

      "Foi então que os metais preciosos, como o ouro, a prata e o cobre, começaram a ganhar importância. Estes materiais eram resistentes, duravam muitos anos e podiam ser divididos em pequenas quantidades.",

      "Durante algum tempo, os comerciantes passaram a pesar pedaços de metal para determinar o seu valor antes de cada transação.",

      "Esta mudança representou um enorme avanço e abriu caminho para o aparecimento das primeiras moedas oficiais da história."
    ]
  },

  {
    key: "primeiras-moedas",

    buttonLabel: "Primeiras<br>Moedas",

    title: "Primeiras Moedas",

    date: "Século VII A.C",

    image: "img/temas/F3.png",

    text: [
      "As primeiras moedas surgiram na região da Lídia, localizada na atual Turquia, há mais de 2.600 anos.",

      "Estas moedas eram produzidas a partir de uma liga natural de ouro e prata e continham símbolos gravados pelas autoridades da época.",

      "Pela primeira vez, existia um objeto com um valor oficialmente reconhecido, eliminando a necessidade de negociar constantemente o valor de cada troca.",

      "A utilização das moedas espalhou-se rapidamente por outras civilizações, transformando profundamente a economia mundial.",

      "Este pequeno objeto metálico tornou-se uma das invenções mais importantes da história da humanidade."
    ]
  },

  {
    key: "imperio-romano",

    buttonLabel: "Império<br>Romano",

    title: "Império Romano",

    date: "27 A.C",

    image: "img/temas/F4.png",

    text: [
      "O Império Romano governou milhões de pessoas e controlou um dos maiores territórios alguma vez construídos.",

      "Para manter toda esta estrutura a funcionar, a moeda tornou-se uma ferramenta essencial da economia romana.",

      "As moedas eram utilizadas para pagar soldados, construir estradas, financiar edifícios públicos e cobrar impostos em diferentes regiões do império.",

      "Além da sua função económica, serviam também como instrumento de propaganda política, exibindo retratos dos imperadores e mensagens de poder.",

      "Graças à utilização da moeda, Roma conseguiu ligar diferentes culturas através de uma vasta rede comercial."
    ]
  },

  {
    key: "papel-moeda",

    buttonLabel: "Papel<br>Moeda",

    title: "Papel Moeda",

    date: "Século VII",

    image: "img/temas/F5.png",

    text: [
      "Durante séculos, transportar grandes quantidades de moedas metálicas era uma tarefa pesada e pouco prática.",

      "Na China surgiu uma solução revolucionária: o papel-moeda. Em vez de carregar sacos cheios de metal, as pessoas podiam transportar documentos que representavam determinado valor.",

      "Esta inovação facilitou o comércio, aumentou a segurança e permitiu realizar transações mais rapidamente.",

      "Com o passar dos séculos, esta ideia espalhou-se pelo resto do mundo e acabou por substituir grande parte das moedas metálicas.",

      "Hoje, as notas continuam a ser uma das formas de dinheiro mais utilizadas pelas sociedades modernas."
    ]
  },

  {
    key: "sistema-financeiro",

    buttonLabel: "Sistema<br>Financeiro",

    title: "Sistema Financeiro",

    date: "Séculos XV-XVII",

    image: "img/temas/F6.png",

    text: [
      "À medida que o comércio internacional crescia, guardar dinheiro em casa começou a tornar-se arriscado.",

      "Foi então que surgiram instituições dedicadas a proteger, emprestar e movimentar dinheiro de forma organizada.",

      "Os bancos passaram a desempenhar um papel central na economia, permitindo às pessoas realizar depósitos, pedir empréstimos e financiar novos projetos.",

      "Estas instituições ajudaram a desenvolver o comércio entre países e contribuíram para o crescimento das cidades europeias.",

      "Nascia assim o sistema financeiro moderno que continua a existir nos dias de hoje."
    ]
  },

  {
    key: "banco-amesterdao",

    buttonLabel: "Banco de<br>Amesterdão",

    title: "Banco de Amesterdão",

    date: "1609",

    image: "img/temas/F7.png",

    text: [
      "Em 1609 foi criado o Banco de Amesterdão, uma das instituições financeiras mais importantes da Europa.",

      "Numa época em que circulavam moedas provenientes de vários países, era difícil garantir a autenticidade e o valor de cada uma.",

      "O banco ajudou a resolver este problema, oferecendo um sistema seguro e confiável para guardar dinheiro e facilitar pagamentos.",

      "A sua reputação tornou Amesterdão um dos maiores centros comerciais do mundo.",

      "Muitas das ideias utilizadas por este banco influenciaram o funcionamento dos bancos centrais atuais."
    ]
  },

  {
    key: "cartoes",

    buttonLabel: "Cartões e<br>Pagamentos",

    title: "Cartões e Pagamentos",

    date: "Século XX",

    image: "img/temas/F8.png",

    text: [
      "O século XX trouxe uma nova revolução financeira: os cartões bancários.",

      "De repente, deixou de ser necessário transportar grandes quantidades de dinheiro físico para realizar compras.",

      "Os cartões de débito e crédito tornaram os pagamentos mais rápidos, cómodos e seguros.",

      "Ao longo dos anos, esta tecnologia evoluiu e passou a incluir pagamentos por aproximação, permitindo concluir uma compra em poucos segundos.",

      "Hoje, milhões de pessoas utilizam cartões diariamente em todo o mundo."
    ]
  },

  {
    key: "bitcoin",

    buttonLabel: "Bitcoin e<br>Criptomoeda",

    title: "Bitcoin e Criptomoeda",

    date: "2009",

    image: "img/temas/F9.png",

    text: [
      "Em 2009 surgiu a Bitcoin, a primeira criptomoeda descentralizada do mundo, criada por uma pessoa ou grupo sob o pseudónimo de Satoshi Nakamoto.",

      "A Bitcoin apresentou uma nova forma de transferir dinheiro através da internet sem depender diretamente de bancos ou governos.",

      "Toda a tecnologia funciona através de uma rede digital altamente segura chamada blockchain, responsável por registar todas as transações.",

      "Apesar da sua grande volatilidade, as criptomoedas despertaram o interesse de investidores, empresas e governos em todo o planeta.",

      "Atualmente, representam uma das maiores inovações financeiras do século XXI."
    ]
  },

  {
    key: "pagamentos-digitais",

    buttonLabel: "Pagamentos<br>Digitais",

    title: "Pagamentos Digitais",

    date: "Atualidade",

    image: "img/temas/F10.png",

    text: [
      "Vivemos numa época em que o dinheiro já quase não precisa de existir fisicamente para ser utilizado.",

      "Graças à internet e aos smartphones, é possível pagar compras, dividir despesas, enviar dinheiro e fazer transferências em poucos segundos.",

      "As aplicações bancárias e as carteiras digitais transformaram a forma como as pessoas interagem com o dinheiro no dia a dia.",

      "A rapidez, a comodidade e a segurança tornaram os pagamentos digitais numa parte essencial da vida moderna.",

      "A história do dinheiro continua a evoluir e o futuro poderá trazer tecnologias ainda mais avançadas que irão mudar novamente a forma como atribuímos valor às coisas."
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