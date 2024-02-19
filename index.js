function calcularRankeadas(vitorias, derrotas) {
    // Calcula o saldo de ranqueadas
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível do jogador com base no saldo de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorno da mensagem com o saldo de ranqueadas e o nível do jogador
    return `O jogador tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso da função calcularRankeadas
const saldo = calcularRankeadas(70, 20);
console.log(saldo); // Saída: "O jogador tem saldo de 50 está no nível de Ouro"
