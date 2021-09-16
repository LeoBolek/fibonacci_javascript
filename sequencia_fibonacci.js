// Programa criado para imprimir a Sequencia de Fibonacci:
function fibonacci(n) {
    // Entrada do usuario
    const fnumero = parseInt(prompt('Insira um numero inteiro positivo: '));

    // Variaveis dos numeros:
    let n1 = 0, n2 = 1, contagem;

    // Gera a Sequencia de Fibonacci:
    console.log('Sequencia de Fibonacci:');
    console.log(n1);
    console.log(n2);
    
    contagem = n1 + n2;
    
    // Estrutura condicional que checa se a contagem eh menor ou igual ao numero inserido pelo usuario:
    while (contagem <= fnumero) {
        console.log(contagem);
        
        // Valores atualizados:
        n1 = n2;
        n2 = contagem;
        contagem = n1 + n2;
    }
}
