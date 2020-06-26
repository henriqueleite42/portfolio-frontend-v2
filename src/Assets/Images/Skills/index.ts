import { AllSkills } from "Assets/Languages/Skills";

const Skills: { [T in AllSkills]: any } = {
  react: require("./react.png"),
  nodejs: require("./nodejs.png"),
  typescript: require("./typescript.png"),
  javascript: require("./javascript.png"),
  ux: require("./ux.png"),
  dataArchitecture: require("./data-architecture.png"),
  mongodb: require("./mongodb.png"),
  firestore: require("./firebase.png"),
  cloudFunctions: require("./firebase.png"),
  mysql: require("./mysql.png"),
  jquery: require("./jquery.png"),
  php: require("./php.png"),
  elasticSearch: require("./elasticsearch.png"),
  sass: require("./sass.png"),
  styledCompolents: require("./styledCompolents.png"),
  socketio: require("./socketio.png"),
  cakePhp: require("./cakePhp.png"),
  eslint: require("./eslint.png"),
  redux: require("./redux.png"),
  mvc: require("./mvc.png"),
  oop: require("./oop.png"),
  rest: require("./rest.png"),
  mongoosejs: require("./mongoosejs.png"),
};

export default Skills;
