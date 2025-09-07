# 🦸 Classificador de Nível de Herói

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
```bash
node classificadorHeroi.js
