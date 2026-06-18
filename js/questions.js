const QUESTIONS = [

  // Página 1
  {
    q:"Você está em um carro turístico quando toda a energia do parque é desligada. As cercas eletrificadas param de funcionar e alarmes começam a tocar. O que você faz?",
    options:[
      "Permaneço no carro e observo.",
      "Saio imediatamente e corro.",
      "Procuro contato pelo rádio do veículo.",
      "Vou em direção ao centro de visitantes."
    ],
    answer:2,

  },

  {
    q:"Após deixar a área dos carros, você entra em uma trilha cercada por árvores. De repente, ouve galhos quebrando atrás de você. O que faz?",
    options:[
      "Corro o mais rápido possível.",
      "Subo em uma árvore.",
      "Me escondo atrás de troncos e observo.",
      "Tento descobrir o que está fazendo o barulho."
    ],
    answer:2,
    
  },

  {
    q:"Você descobre que o barulho era um velociraptor procurando presas. Qual sua reação?",
    options:[
      "Corro em linha reta.",
      "Procuro um local fechado.",
      "Fico imóvel observando seus movimentos.",
      "Tento distraí-lo jogando um objeto."
    ],
    answer:1,

  },

  // Página 2
  {
    q:"Você consegue escapar e encontra o centro de visitantes abandonado. O que procura primeiro?",
    options:[
      "Comida e água.",
      "Um mapa da ilha.",
      "Equipamentos de sobrevivência.",
      "Um esconderijo."
    ],
    answer:2,
    bg:"images/floresta.jpg"
  },

  {
    q:"Enquanto sai do prédio, o chão começa a tremer. Um Tiranossauro aparece entre as árvores. O que você faz?",
    options:[
      "Corro imediatamente.",
      "Me escondo dentro de um veículo próximo.",
      "Fico imóvel.",
      "Procuro uma rota alternativa."
    ],
    answer:1,
   
  },

  {
    q:"Você encontra um laboratório da InGen parcialmente intacto. Qual sua prioridade?",
    options:[
      "Procurar suprimentos médicos.",
      "Procurar informações sobre a ilha.",
      "Procurar armas ou ferramentas.",
      "Sair rapidamente do local."
    ],
    answer:0,
    
  },

  {
    q:"Você encontra um rádio funcionando. Como utiliza o equipamento?",
    options:[
      "Peço resgate imediatamente.",
      "Tento localizar outros sobreviventes.",
      "Economizo bateria para emergências.",
      "Procuro a frequência da segurança do parque."
    ],
    answer:3,
   bg:"images/floresta.jpg"
  },

  // Página 3
  {
    q:"Você chega à cerca que separa a ilha do heliponto de evacuação. O que faz?",
    options:[
      "Tento escalar.",
      "Procuro desligar a energia.",
      "Procuro uma abertura.",
      "Procuro outra rota."
    ],
    answer:2,

  },

  {
    q:"Você finalmente avista o helicóptero de resgate, mas escuta raptores se aproximando. Qual decisão toma?",
    options:[
      "Corro para o helicóptero.",
      "Espero os raptores passarem.",
      "Me escondo e observo.",
      "Tento distrair os raptores."
    ],
    answer:3,

  },

  {
    q:"Você chega ao helicóptero. Há apenas um lugar disponível além do seu. Um cientista ferido pede ajuda para embarcar. O que faz?",
    options:[
      "Entro sozinho para garantir minha sobrevivência.",
      "Ajudo o cientista a embarcar.",
      "Procuro outra forma de escapar.",
      "Fico para ajudar outros sobreviventes."
    ],
    answer:1,

  }

];

const TOTAL = QUESTIONS.length; // 10