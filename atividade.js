"use strict";
function multiplicacao(n1, n2) {
    var n3;
    n3 = n1 * n2;
    return "A multiplicação de " + n1 + " com " + n2 + " é igual a " + n3;
}
function saudacao(nome) {
    return "olá " + nome;
}
console.log(multiplicacao(10, 2));
console.log(saudacao("Bruno"));
