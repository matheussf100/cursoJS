const verdadeira = true;

// let tem escopo de bloco {... bloco}
// var só tem escopo de função

let nome = 'Matheus';
var nome2 = 'Matheus';

if (verdadeira) {
    let nome = 'Santos'
    console.log(nome, nome2)

    if (verdadeira) {
        let nome = 'Outra coisa';
        console.log('OK'); 
    }
}