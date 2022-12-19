/*let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letras = [b, c ,a];
[a, b, c] = letras;

console.log(a, b, c);
*/
// ... rest(puxar o resto de algo), spread(espalhar, distrubuir)
//                0   1   2   3   4   5   6   7   8
/*const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [n0, , n2, , n4, , n6, ...resto] = numeros;
console.log(n0, n2, n4, n6);
console.log(resto);
*/
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2               
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
//const [,,[,oito]] = numeros;
//0

console.log(oito);

const [lista1, lista2 ,lista3] = numeros;
console.log(lista2[1]);
