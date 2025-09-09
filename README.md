# 🦸 Classificador de Nível de Herói - EXERCICIO 01

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Status](https://img.shields.io/badge/Status-Concluído-green)
![Node.js](https://img.shields.io/badge/Platform-Node.js-brightgreen)

## 📌 Descrição
Projeto em **JavaScript** que classifica heróis por níveis de experiência (XP), atribuindo categorias como **Ferro, Bronze, Prata, Ouro, Platina, Diamante, Ascendente, Imortal e Radiante**.  

Foi utilizado um **array de objetos** para armazenar os níveis e o **método `find`** para percorrer o array, retornando o nível correspondente e atribuindo-o à variável `nivelAtual`.  

---

## 🎯 Objetivo
Receber o **nome** e a **XP** do herói e exibir seu nível de acordo com a tabela:

| XP                        | Nível       |
|----------------------------|------------|
| 0 - 1.000                  | Ferro      |
| 1.001 - 2.000              | Bronze     |
| 2.001 - 5.000              | Prata      |
| 5.001 - 7.000              | Ouro       |
| 7.001 - 8.000              | Platina    |
| 8.001 - 9.000              | Ascendente |
| 9.001 - 10.000             | Imortal    |
| 10.001 ou mais             | Radiante   |

---

## 🛠 Tecnologias Utilizadas
- **JavaScript**
- Variáveis e Operadores
- Estruturas de Decisão (`if/else`)
- Método `find` para arrays

---

## ✅ Saída Esperada

O Herói de nome Ash está no nível de Radiante

---

## 📚 Observações
- **Estrutura escalável:** para adicionar novos níveis, basta incluir no array `niveis`.  
- **Método `find`:** percorre o array e retorna o **primeiro nível que satisfaz a condição**, facilitando a manutenção do código.

---

## 💻 Como Executar
1. Instale o [Node.js](https://nodejs.org/).  
2. Salve o arquivo como `classificadorHeroi.js`.  
3. Abra o terminal na pasta do arquivo e execute:

node classificadorHeroi.js

---

# 🎮 Calculadora de Partidas Rankeadas - EXERCICIO 02

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Status](https://img.shields.io/badge/Status-Concluído-green)
![Node.js](https://img.shields.io/badge/Platform-Node.js-brightgreen)

## 📌 Descrição
Projeto em **JavaScript** que calcula o saldo de partidas ranqueadas de um herói e determina seu nível com base na quantidade de vitórias e derrotas.  

Foi criada uma **função** para calcular o saldo (vitórias - derrotas) e outra para **definir o nível** de acordo com o saldo obtido.  

---

## 🎯 Objetivo
Criar uma função que receba como parâmetros o número de vitórias e derrotas, calcule o saldo de ranqueadas e determine o nível do jogador:

| Vitórias                  | Nível     |
|----------------------------|----------|
| Menor que 10               | Ferro    |
| 11 - 20                    | Bronze   |
| 21 - 50                    | Prata    |
| 51 - 80                    | Ouro     |
| 81 - 90                    | Diamante |
| 91 - 100                   | Lendário |
| Maior ou igual a 101       | Imortal  |

---

## 🛠 Tecnologias Utilizadas
- **JavaScript**
- Variáveis e Operadores
- Estruturas de Decisão (`if/else`)
- Funções
- Laços de repetição (caso necessário em melhorias futuras)

---

## ✅ Saída Esperada

O Herói tem saldo de 1 e está no nível de Ferro

---

## 📚 Observações
- A lógica é **flexível e de fácil manutenção**: basta ajustar as faixas no `if/else` dentro da função `getLevel`.  
- O uso de **funções separadas** (uma para calcular saldo e outra para definir nível) torna o código mais **organizado e reutilizável**.  
- Estrutura pronta para evoluções, como inserir novos níveis ou estatísticas adicionais.

---

# ⚔️ Classe de Herói - EXERCICIO 03

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Status](https://img.shields.io/badge/Status-Concluído-green)
![Node.js](https://img.shields.io/badge/Platform-Node.js-brightgreen)

## 📌 Descrição
Projeto em **JavaScript** que implementa uma classe `Hero`, representando um herói de aventura.  
Cada herói possui os atributos **nome**, **idade** e **tipo** (guerreiro, mago, monge ou ninja).  
O método `attack()` exibe uma mensagem personalizada de ataque, variando conforme o tipo do herói.  

---

## 🎯 Objetivo
- Criar uma classe genérica para heróis com as seguintes propriedades:
  - **nome**
  - **idade**
  - **tipo** (guerreiro, mago, monge, ninja)
- Implementar o método `attack()` que deve exibir a mensagem:
O {tipo} atacou usando {ataque}

---

### Tabela de ataques por tipo:
| Tipo       | Ataque              |
|------------|---------------------|
| mago       | usou magia          |
| guerreiro  | usou espada         |
| monge      | usou artes marciais |
| ninja      | usou shuriken       |

---

## 🛠 Tecnologias Utilizadas
- **JavaScript**
- Variáveis e Operadores
- Estruturas de Decisão (`if/else`)
- Classes e Objetos
- Funções

---

## ✅ Saída Esperada

Exemplo de execução:

mago atacou usando magia,
guerreiro atacou usando espada,
monge atacou usando artes marciais,
ninja atacou usando shuriken.

---

## 📚 Observações
- O projeto reforça os conceitos básicos de **POO em JavaScript**.  
- A lógica de ataque pode ser facilmente expandida para novos tipos de heróis.  

---

## 💻 Como Executar
1. Instale o [Node.js](https://nodejs.org/).  
2. Salve o arquivo como `classeHeroi.js`.  
3. Abra o terminal na pasta do arquivo e execute:

```bash
node classeHeroi.js

