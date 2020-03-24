//importação normal pode ser colocado o "as" para dar nome a função ou usar o nome direto
import { soma as soma1, sub as sub1 } from "./funcoes";

console.log(sub1(1, 3));
console.log(soma1(1, 3));

//forma de importação defaout se, a necessidade das chaves e o "as" para dar nome, demais funcionalidade pode estar em chaves
import somaf, { sub } from "./soma";
console.log(somaf(1, 3));

//forma de importar todas as funções de uma vez como objeto de funçoes
import * as funcoes from "./funcoes";
console.log(funcoes.mult(3, 5));
