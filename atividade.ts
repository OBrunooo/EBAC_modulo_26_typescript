function multiplicacao (n1: number, n2: number): string {
    var n3: Number

    n3 = n1*n2;
    return "A multiplicação de "+n1+" com "+n2+" é igual a "+n3
}

function saudacao(nome:string): string {
    return "olá "+nome
}

console.log(multiplicacao(10,2))
console.log(saudacao("Bruno"))