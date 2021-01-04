const nome = 'Daniele';
const idade = 29;
const peso = 45;
const altura = 1.60;

let imc;
imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2021 - idade;

console.log(nome + '' + ' tem ' + idade + ' anos ');
//template string
console.log (`pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc}`);
console.log ('nasceu no ano de', anoNascimento);
