
/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - Valor

Referência (mutável) - Array, object, function
*/
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = a;

b.nome = 'João';
console.log(a);
console.log(b);

/*let a = [1, 2, 3];
let b = a;
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(c);
*/