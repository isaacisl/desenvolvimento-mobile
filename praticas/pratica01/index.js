
import { listarTarefas, adicionarTarefa, removerTarefa, modificarTarefa } from "./tarefas.js";
import readline from "readline-sync";


function exibirMenu() {
  console.log("MENU PRINCIPAL");
  console.log("1 - Adicionar tarefas");
  console.log("2 - Listar tarefas");
  console.log("3 - Remover tarefa");
  console.log("4 - Modificar tarefa");
  console.log("5 - Sair");
}


function escolherOpcao(opcao) {
  switch (opcao) {
    case "1": {
      const nome = readline.question("Entre com o nome da tarefa: ");
      adicionarTarefa(nome);
      break;
    }
    case "2": {
      const tarefas = listarTarefas();
      console.log("Minhas tarefas");
      tarefas.forEach((tarefa) => {
        console.log(`ID: ${tarefa.id} - Nome: ${tarefa.nome} - Concluída: ${tarefa.concluida}`);
      });
      break;
    }
    case "3": {
      const id = readline.question("Entre com o id da tarefa: ");
      removerTarefa(id);
      break;
    }
    case "4": {
      const id = readline.question("Entre com o id da tarefa: ");
      const nome = readline.question("Entre com o nome da tarefa: ");
      const concluida = readline.question("A tarefa está concluída? (true/false): ");
      modificarTarefa(id, { nome, concluida: concluida === "true" });
      break;
    }
    case "5":
      console.log("Saindo...");
      process.exit(0);
      break;
    default:
      console.log("Opção inválida. Tente novamente!");
  }
}


function main() {
  while (true) {
    exibirMenu();
    const opcao = readline.question("Escolha uma opção: ");
    escolherOpcao(opcao);
  }
}


main();