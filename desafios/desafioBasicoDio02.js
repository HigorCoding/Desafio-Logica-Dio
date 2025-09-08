let victory = 5;
let defeat = 4;

function winRate( victory, defeat){
  return victory - defeat
}

let balance = winRate (victory, defeat);
let level = getLevel(balance);

function getLevel(balance) {
  if (balance <= 10) return "Ferro";
  else if (balance <= 20) return "Bronze";
  else if (balance <= 50) return "Prata";
  else if (balance <= 80) return "Ouro";
  else if (balance <= 90) return "Diamante";
  else if (balance <= 100) return "Lendário";
  else return "Imortal";
}
console.log(`O Herói tem saldo de ${balance} e está no nível de ${level}`);
