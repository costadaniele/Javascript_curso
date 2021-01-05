// Aritméticos


const num1 = '10';
const num2 = 20;
const num3 = 3;

// + Adição / Concatenação 
console.log(num1 + num2);
console.log(num2 + num3);

// - Subtração
console.log(num2 - num3);

// Multiplicação
console.log(num3 * num2);

// Potência
console.log(num2 ** 2);

//Divisão
console.log(num2 / num3);

// % Resto da Divisão
console.log(num2 % 9);

/* 

Precedência

() 
**
* / % 
- + 

*/

// Incremento ++ 

let contador = 2;
contador++;
++contador;

//Decremento --
contador--;

console.log(contador);

const passo = 5;
let conta = 0;

conta = conta + passo;
console.log(conta);
conta = conta + passo;
console.log(conta);
conta += passo;
console.log(conta);
conta **= 2;
console.log(conta);

// NaN - Not a number

const primeiroNumero = 20;
// conversão de string para número
const segundoNumero = parseInt('5');
const terceiroNumero = parseFloat('5.6');
const quartoNumero = Number('3.5');

console.log(primeiroNumero + segundoNumero);
console.log(segundoNumero + terceiroNumero);
console.log(terceiroNumero + quartoNumero);
