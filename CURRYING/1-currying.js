function soma(a, b) {
    return a + b;
}

console.log(soma(2, 2));
console.log(soma(2, 3));
console.log(soma(2, 4));
console.log(soma(2, 5));

//O currying serve para simplificar uma função que tem vários parâmetros em uma única função que está no arquivo 2. Em vez de ficar repetindo o número 2, ele é colocado como fixo e repete apenas o segundo termo.