let digitadoUm = prompt('Digite um número');
let digitadoDois = prompt('Digite outro número');
digitadoUm = Number(digitadoUm);
digitadoDois = Number(digitadoDois);

//versão 1
let resultado = digitadoUm + digitadoDois;
//template string
alert(`O resultado foi ${resultado}`);

//versão 2
alert(`O resultado foi: ${digitadoUm + digitadoDois}`);

//tipos 
console.log(typeof digitadoDois, typeof digitadoUm);

