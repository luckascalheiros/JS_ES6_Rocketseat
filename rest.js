// Rest - serve para pegar o resto da propriedade

const usuario = {
  nome: "lucas",
  idade: 28,
  empresa: "cencosud"
};

//pega o resto dos objetos
// const { nome, ...resto } = usuario;
// console.log(nome);
// console.log(resto);

const arr = [1, 2, 4, 5];

//pega o resto dos vetores
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//nas funções ele pode pagar todos os parametros colocados
function soma(n1, ...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(2, 3, 5, 6));

//spred
//copia todos os parametros do objeto

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario2 = { ...usuario, nome: "gabriel" };

const { nome } = usuario2;
console.log(nome);
