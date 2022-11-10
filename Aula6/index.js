const nome = 'Luiz otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
const anoDeReferencia = 2019;
let imc = peso / (altura * altura);
let anoNascimento = anoDeReferencia - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${altura}m
 de altura nasceu em ${anoNascimento} e seu IMC é: ${imc}.`)