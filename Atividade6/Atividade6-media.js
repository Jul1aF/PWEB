let nome = prompt("Digite o nome do aluno: ");
let nota1 = parseFloat(prompt("Digite a nota 1: "));
let nota2 = parseFloat(prompt("Digite a nota 2: "));
let nota3 = parseFloat(prompt("Digite a nota 3: "));
let nota4 = parseFloat(prompt("Digite a nota 4: "));
let resultado = (nota1+nota2+nota3+nota4)/4;;

alert("Aluno: " + nome + "\n Média: " + resultado.toFixed(2));

