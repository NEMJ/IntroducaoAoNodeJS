// const { Person } = require("./person.js"); // Importação para uso interno dio script - variáveis, tratamento de dados, operações ...
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect.js");

dotenv.config();

connectToDatabase();

// require('./modules/path'); // Importação para simplesmente executar o arquivo, ou o script dentro dele.
// require("./modules/fs");
// require("./modules/http.js");

require("./modules/express.js");

// const person = new Person("Nelson");