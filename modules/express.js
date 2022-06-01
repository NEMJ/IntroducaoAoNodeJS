const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();
app.use(express.json());

// Indica ao 'express' que será o 'ejs' como 'view engine'
app.set('view engine', 'ejs');
// Indica ao 'ejs' e ao 'express' onde buscar as views que serão usadas
app.set('views', 'src/views');

// MIDDLEWARES são funções que são executadas antes de qualquer requisição
// Um exemplo de MIDDLEWARE que será rodado antes de qualquer coisa que estive abaixo
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  // É necessário colocar o 'next()' ao final da middleware, caso contrário a requisição, de qualquer tipo, ficará travada.
  next();
});

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Hello World!</h1>");
});

app.get("/views/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", { users });
});

// Requisição para retornar um array de usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Requisição para retornar um usuário em específico
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Requisição para adicionar um novo usuário
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Requisição para alterar alguma informação das informaçãoes do usuário;
// '/:id' indica a passagem de um parâmetro e é dado o nome 'id' a ele
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // Aqui é necessário passar o '{ new: true }' para que a aplicação retorne o objeto com as alterações feitas
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Requisição para deletar um usuário em específico
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));