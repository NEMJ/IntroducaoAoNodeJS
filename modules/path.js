const path = require('path');

// Basename: retorna o nome do '__filename' (arquivo atual). -> 'path.js' neste caso
console.log(path.basename(__filename));

// Dirname: retona o caminho completo do diretório em que está o '__filename' (arquivo atual)
console.log(path.dirname(__filename));

// Extname: retorna a exteção do arquivo '__filename'
console.log(path.extname(__filename));

// Parse: retorna um objeto com várias informações sobre o arquivo.
console.log(path.parse(__filename));

// Join: juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "teste.html"));