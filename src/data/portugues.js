import images from '../assets/imgs';

export const portuguesData = {
  name: 'Mohamed Ibrahim Aljoke',
  header: {
    // home: 'INÍCIO',
    // about: 'SOBRE',
    projects: 'PROJETOS',
    contact: 'CONTATO',
  },
  styleMode: {
    dark: 'Modo Escuro',
    light: 'Modo Claro',
  },
  language: 'Idioma',
  projetos: [
    {
      titulo: 'Nasa Project',
      img: images.nasa,
      gitHub: 'https://github.com/Janku13/nasa-project',
      link: 'http://54.232.228.100:8000',
      descricaoCurta:
        'O projeto consume dados de API externa e planilha excel, realiza CRUD das informações com rotas para cada função, controllers e models, dockorizado e hospedado na AWS',
      descricao: `
        Bem o massa do projeto é a proposta dele:
    1) Realizar análise de dados coletados pelo satélite Kepler da Nasa de diversos planetas e suas propriedades.
    2) Colocar filtrar os planetas (com condições físicas) para serem habitáveis.
    3) Consumir API com dados de lançamentos da SpaceX.
    4) Criar servidor com Node.js e usando banco de dados não relacionado (mongo) com as melhores práticas.
    5) CRUD para adicionar lançamento.
    6) Front com React.js
    7) Exposição para unit test (jest)
    8) CI CD com git actions
    9) Criação de imagem no Docker para hospedar na #aws`,
    },
    {
      titulo: 'Crown e-commercet',
      img: images.eloja,
      gitHub: 'https://github.com/Janku13/E_commerce.git',
      link: 'http://janku-crwn-shop.herokuapp.com',
      descricaoCurta:
        'E-commerce com webSite com redux, fireBase, scss, e Stripe payments. hospedado no heroku e netlify.',
      descricao: `
       
      `,
    },
  ],
};
