let nickname = "Ash";
let experience = 10001;

// Array com os níveis e seus intervalos de XP
// Cada objeto tem o nome do nível, XP mínimo e máximo
//usando um vetor
const niveis = [
  { nome: "Ferro", min: 0, max: 1000 },
  { nome: "Bronze", min: 1001, max: 2000 },
  { nome: "Prata", min: 2001, max: 4000 },
  { nome: "Ouro", min: 4001, max: 5000 },
  { nome: "Platina", min: 5001, max: 7000 },
  { nome: "Diamante", min: 7001, max: 8000 },
  { nome: "Ascendente", min: 8001, max: 9000 },
  { nome: "Imortal", min: 9001, max: 10000 },
  { nome: "Radiante", min: 10001, max: Infinity } // qualquer XP acima de 10000
];

// Encontrar o nível do jogador usando o método find
// find procura o primeiro nível onde experience está entre min e max
// Retorna o primeiro nível onde o XP do jogador está.
const nivelAtual = niveis.find(nivel => experience >= nivel.min && experience <= nivel.max);

console.log("Seu XP está em: " + experience);
console.log("Você está no " + nivelAtual.nome + " com " + nickname);








