// Operadores ternários
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'azul';
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);

/*if (pontuacaoUsuario => 1000) {
    console.log('Usuário Vip);
} else {
    console.log('Usuário normal');
}
*/