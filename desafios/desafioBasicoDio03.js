class hero{
  constructor(name, age,type ){
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    if (this.type === "mago") {
      console.log(`${this.name} atacou usando magia!`);
    } else if (this.type === "guerreiro") {
      console.log(`${this.name} atacou usando espada!`);
    } else if (this.type === "monge") {
      console.log(`${this.name} atacou usando artes marciais!`);
    } else if (this.type === "ninja") {
      console.log(`${this.name} atacou usando shuriken!`);
    } else {
      console.log(`${this.name} atacou de forma indefinida.`);
    }
  }
}
  // Exemplo de uso
const Hero = new hero("Higor", 20, "guerreiro");
Hero.attack(); 