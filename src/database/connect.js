const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.rav5e.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if(error) {
        return console.log("Ocorreu algum erro ao se conectar com o banco de dados: ", error);
      }

      return console.log("Conexão com o banco de dados realizada com sucesso!");
    }
  );
}

module.exports = connectToDatabase;