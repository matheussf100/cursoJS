const numero = Number(prompt("Digite o seu número:"));
const numTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numTitulo.innerHTML =numero;

texto.innerHTML = `<p> Seu número é: <strong>${numero}<strong/></p><br />`;
texto.innerHTML += `<p> Raiz quadrada do número: <strong>${numero ** (1/2)}<strong/></p> <br />`;
texto.innerHTML += `<p> ${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong></p><br />`;
texto.innerHTML += `<p> O número ${numero} é NaN: <strong>${isNaN(numero)}</strong> </p><br />`;
texto.innerHTML += `<p> Arredondando para cima: <strong>${Math.ceil(numero)}<strong/></p><br />`;
texto.innerHTML += `<p> Arredondamento para baixo: <strong>${Math.floor(numero)}<strong/></p><br />`;
texto.innerHTML += `<p> Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p><br />`;