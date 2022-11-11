const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade} anos.`)
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

/*function criapessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criapessoa('Marcos', 'Jailton' , 32);
const pessoa2 = criapessoa('Nelson', 'Rodrigues', 83);
const pessoa3 = criapessoa('Abigail', 'Soares', 32);
const pessoa4 = criapessoa('Maicon', 'Jorge', 29);
const pessoa5 = criapessoa('Mauro', 'Patrick', 22);

console.log(pessoa1.nome, pessoa2.idade, pessoa3.sobrenome, pessoa4.nome, pessoa5.idade)

/*const pessoa1 = {
    nome:'Matheus',
    sobrenome:'Santos Felipe',
    idade:25
}

const pessoa2 = {
    nome:'Nelson',
    sobrenome:'Rodrigues',
    idade:'65'
}

console.log(pessoa2.idade)

/*const nome01 = 'Matheus';
const sobrenome01 = 'Santos';
const idade01 = 25;

const nome02 = 'Nelson';
const sobrenome02 = 'Rodrigues';
const idade02 = 62;
*/

/*const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';
console.log(array);
*/