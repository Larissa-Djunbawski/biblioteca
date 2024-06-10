const biblioteca = [];
let livro = {};
let opcao = 0;

console.log("1. Para inserir um livro")
console.log("2. Para remover um livro")
console.log("3. para visualizar")
process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();
  console.log("Qual o nome do livro? ")
  if (!opcao) {
    opcao = Number(entrada_usuario);
  } else {
    switch (opcao) {
      case 1:
        if (!livro.nome){
            livro.nome = entrada_usuario
            console.log("Quantas paginas ele tem? ")
        } else if (!livro.tamanho){
            livro.tamanho = entrada_usuario
            console.log("Qual o autor?: ")
        } else if (!livro.autor){
            livro.autor = entrada_usuario
            console.log("Qual seu genero literário?: ")
        } else {
            livro.genero = entrada_usuario

            biblioteca.push(livro)
            livro={}
            opcao = 0

        }
        }
        break;
      case 2:
        break;
      case 3:
        biblioteca.forEach(livro => {
            console.log(livro)
        })
        opcao = 0
        break;
        
      default:
        console.log("opção invalida")
        opcao = 0
        break;
    }
  }
});
