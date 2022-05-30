const fs = require("fs");
const path = require("path");


// ==> Mkdir (médoto async): cria uma pasta no caminho especificado
// fs.mkdir(path.join(__dirname, 'test'), (error) => { // Este callback '() => {}' vai acontecer assim que a pasta for criada
//   if(error) {
//     return console.log("Erro MKDIR: ", error);
//   }

//   console.log("Pasta criada com sucesso!");
// });

// WriteFile: cria um arquivo no caminho especificado
fs.writeFile(path.join(__dirname, "test", "/index.txt"), "Hello node!", (error) => {
  if(error) return console.log("Erro WRITEFILE: ", error);
  console.log("Arquivo criado com sucesso!");

  // AppendFile: adiciona conteúdo a um arquivo existente no caminho especificado
  fs.appendFile(path.join(__dirname, "/test", "index.txt"), "\nHello World!", (error) => {
    if(error) return console.log("Erro APPENDFILE: ", error);
    console.log("Arquivo alterado com sucesso!");
  });

  // ReadFile: retorna o conteúdo de um arquivo
  fs.readFile(path.join(__dirname, "/test/index.txt"), "utf8", (error, data) => {
    if(error) return console.log("Erro READFILE: ", error);
    console.log(data);
  });

  // OBS: Foi necessário colocar estes outros últimos dois métodos dentro da função WRITEFILE pois, como o NODE não se limita a esperar metodos
  // assíncronos, foi feito um "force" para que isso aconteça de maneira sequencial
});