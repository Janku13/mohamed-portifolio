import images from '../assets/imgs';
import NodejsIcon from 'mdi-react/NodejsIcon';
import DatabaseIcon from 'mdi-react/DatabaseIcon';
import DockerIcon from 'mdi-react/DockerIcon';
import AwsIcon from 'mdi-react/AwsIcon';
import ReactIcon from 'mdi-react/ReactIcon';
import FirebaseIcon from 'mdi-react/FirebaseIcon';
import LoginIcon from 'mdi-react/LoginIcon';
import LanguageTypescriptIcon from 'mdi-react/LanguageTypescriptIcon';
import {
  SiSocketdotio,
  SiFlutter,
  SiDart,
  SiAirplayvideo,
  SiDocker,
  SiAirtable,
} from 'react-icons/si';
import LanguageJavascriptIcon from 'mdi-react/LanguageJavascriptIcon';
import { TbBrandNextjs, TbBrandUnsplash } from 'react-icons/tb';

export const portuguesData = {
  name: 'Mohamed Ibrahim Aljoke',
  header: {
    // home: 'INÍCIO',
    // about: 'SOBRE',
    // projects: 'PROJETOS',
    // contact: 'CONTATO',
  },
  styleMode: {
    dark: 'Modo Escuro',
    light: 'Modo Claro',
  },
  language: 'Idioma',
  proficional: [
    {
      company: 'Advanced Digital',
      atividade:
        'Realizar manutenção de e-commerce websites e fix bugs, criar e-commerce do zero com React (hooks & redux), integrar front com api api e adicionar routes/controllers (node.js). MERN stack: confort with react && node',
    },
  ],
  projetos: [
    {
      titulo: 'Nasa Project',
      img: images.nasa,
      gitHub: 'https://github.com/Janku13/nasa-project',
      link: 'http://54.232.228.100:8000',
      descricaoCurta:
        'O projeto consume dados de API externa e planilha excel, realiza CRUD das informações com rotas para cada função, controllers e models, dockorizado e hospedado na AWS',
      descricao: '',
      usedTech: [
        <NodejsIcon color="green" />,
        <ReactIcon color="#61DBFB" />,
        <DatabaseIcon color="black" />,
        <DockerIcon color="black" />,
        <AwsIcon color="black" />,
      ],
    },
    {
      titulo: 'Crown e-commerce',
      img: images.eloja,
      gitHub: 'https://github.com/Janku13/E_commerce.git',
      link: 'http://janku-crwn-shop.herokuapp.com',
      descricaoCurta:
        'E-commerce webSite com redux, fireBase, scss, e Stripe payments. hospedado no heroku e netlify.',
      descricao: ` `,
      usedTech: [
        <ReactIcon color="#61DBFB" />,
        <FirebaseIcon color="#2C384A" />,
        <LoginIcon color="black" />,
      ],
    },
    {
      titulo: 'Coffee',
      img: images.coffee,
      gitHub: 'https://github.com/Janku13/next-coffee',
      link: 'https://next-coffee-bay.vercel.app/',
      descricaoCurta:
        'Criação de componentes e cards com NEXT.JS encontrar lojas perto de vc com server side render e AIRTABLE com SWR para up vote e SSR',
      descricao: '',
      usedTech: [
        <TbBrandNextjs size={28} color="#2C384A" />,
        <ReactIcon color="#61DBFB" />,
        <TbBrandUnsplash size={28} color="#2C384A" />,
        <SiAirtable size={28} color="black" />,
      ],
    },
    {
      titulo: 'Node Rest Api',
      img: images.restApi,
      gitHub: 'https://github.com/Janku13/REST-NODE',
      descricaoCurta:
        'Api rest com crud para criar user e jwt token em seguida criar session usando zod para validação e express, node, mongo e TS. Também documentação com swagger docs e coleção no postman',
      descricao: ` `,
      usedTech: [
        <NodejsIcon color="green" />,
        <LanguageTypescriptIcon color="#007acc" />,
        <DatabaseIcon color="black" />,
      ],
    },
    {
      titulo: 'Adicionar Video',
      img: images.videos,
      gitHub: 'https://github.com/Janku13/stream-video-next.git',
      descricaoCurta:
        'fs com next.js e Ts, adicionar videos, pagina para ver video onde a informação é enviada por chunks. TODO -> clone YT',
      descricao: '',
      usedTech: [
        <TbBrandNextjs size={28} color="#2C384A" />,
        <LanguageTypescriptIcon color="#007acc" />,
        <ReactIcon color="#61DBFB" />,
      ],
    },
    {
      titulo: 'TV-API',
      img: images.tv,
      gitHub: 'https://github.com/Janku13/findMovie',
      link: 'https://janku13.github.io/findMovie/',
      descricaoCurta:
        'Manipular DOM e consumir API da TVmaze, para encontrar onde determinado show é hospedado',
      descricao: ` `,
      usedTech: [<LanguageJavascriptIcon color="black" />],
    },
    {
      titulo: 'Chat App',
      img: images.socket,
      gitHub: 'https://github.com/Janku13/Next-Node-Socketio',

      descricaoCurta:
        'Utilizar socket.io para criação de chat, criar sala, enviar mensagem etc',
      descricao: ` `,
      usedTech: [
        <TbBrandNextjs size={28} color="#2C384A" />,
        <NodejsIcon color="green" />,
        <LanguageTypescriptIcon color="#007acc" />,
      ],
    },
    {
      titulo: 'Ping Pong',
      img: images.pong,
      gitHub: 'https://github.com/Janku13/ping-pong-socket-node',

      descricaoCurta: 'Utilizar socket.io para criar jogo do ping pong.',
      descricao: ` `,
      usedTech: [
        <NodejsIcon color="green" />,
        <LanguageTypescriptIcon color="#007acc" />,
      ],
    },
    {
      titulo: 'Flutter Todo List',
      img: images.todoFlutter,
      gitHub: 'https://github.com/Janku13/todo_list_flutter',

      descricaoCurta:
        'Adicionar item para lista, deletar ou marcar como finalizada, flutter com provider.',
      descricao: ` `,
      usedTech: [<SiFlutter color="#007acc" />, <SiDart color="black" />],
    },
    {
      titulo: 'Flutter Quizz',
      img: images.quiz,
      gitHub: 'https://github.com/Janku13/flutter_quizz',

      descricaoCurta:
        'Project para entender dart -> OO e flutter criação de UI',
      descricao: ` `,
      usedTech: [<SiFlutter color="#007acc" />, <SiDart color="black" />],
    },
    {
      titulo: 'Meals React-Native',
      img: images.mealsNative,
      gitHub: 'https://github.com/Janku13/Meals',

      descricaoCurta:
        'Criar component styled e reutilizável, mange state com useContext hook, e google maps -> utilizando react-native ',
      descricao: ` `,
      usedTech: [<ReactIcon color="#61DBFB" />],
    },
  ],
  techs: [
    {
      text: 'Next.js',
      icon: [<TbBrandNextjs size={28} color="#2C384A" />],
    },
    {
      text: 'Typescript',
      icon: [<LanguageTypescriptIcon color="#007acc" />],
    },
    {
      text: 'Flutter',
      icon: [<SiFlutter color="#007acc" />],
    },
    {
      text: 'Socket.io',
      icon: [<SiSocketdotio color="#007acc" />],
    },
    {
      text: 'Video streaming (node with fs)',
      icon: [<SiAirplayvideo color="#007acc" />],
    },
    {
      text: 'React Native',
      icon: [<ReactIcon color="#61DBFB" />],
    },
    {
      text: 'Docker',
      icon: [<SiDocker color="black" />],
    },
    {
      text: 'Firebase',
      icon: [<FirebaseIcon color="#2C384A" />],
    },
  ],
};
