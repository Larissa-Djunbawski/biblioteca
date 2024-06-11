const biblioteca = [];
let livro = {};
let opcao = 0;


console.log("1. Para inserir um livro");
console.log("2. Para remover um livro");
console.log("3. para visualizar");
process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();

  if (!opcao) {
    opcao = Number(entrada_usuario);
  } else {
    switch (opcao) {
      case 1:
        console.log("Qual o nome do livro? ");
        if (!livro.nome) {
          livro.nome = entrada_usuario;
          console.log("Quantas páginas ele tem? ");
        } else if (!livro.tamanho) {
          livro.tamanho = entrada_usuario;
          console.log("Qual o autor?: ");
        } else if (!livro.autor) {
          livro.autor = entrada_usuario;
          console.log("Qual seu gênero literário?: ");
        } else {
          livro.genero = entrada_usuario;

          biblioteca.push(livro);
          livro = {};
          opcao = 0;
          console.log("Livro inserido com sucesso.");
          console.log("1. Para inserir um livro");
          console.log("2. Para remover um livro");
          console.log("3. para visualizar");
        }

        break;
      case 2:
        console.log("Qual livro voce deseja remover?: " + biblioteca);
        let remover = entrada_usuario;
        let indiceRemover = -1
        for (let i = 0; i < biblioteca.length; i++) {
          if (biblioteca[i].nome === remover) {
            indiceRemover = i;
            break;
          }
        }

        if (indiceRemover !== -1) {
          biblioteca.splice(indiceRemover, 1);
          console.log("Livro removido com sucesso.");
        } else {
          console.log("Livro não encontrado na biblioteca.");
        }

        break;
      case 3:
        biblioteca.forEach((livro) => {
          console.log(livro);
        });
        opcao = 0;
        console.log("1. Para inserir um livro");
        console.log("2. Para remover um livro");
        console.log("3. para visualizar");
        break;

      default:
        console.log("opção inválida");
        opcao = 0;
        console.log("1. Para inserir um livro");
        console.log("2. Para remover um livro");
        console.log("3. para visualizar");
        break;
    }
  }
});
