let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// primeira versão
const varATemp = varA;
varA = varB; // B
varB = varC; // C
varC = varATemp; // A

console.log(varA, varB, varC);

// segunda versão

segVarA = 'A';
segVarB = 'B';
segVarC = 'C';

[segVarA, segVarB, segVarC] = [segVarB, segVarC, segVarA] 
console.log(segVarA, segVarB, segVarC);
