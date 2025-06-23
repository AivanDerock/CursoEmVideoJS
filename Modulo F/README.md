# 📒 Anotações - Curso de JavaScript

Bem-vindo(a) às anotações do módulo F de JavaScript do **Curso em Vídeo**!  
Aqui você encontrará resumos, exemplos e explicações das principais aulas.

### Resumo Geral

Este README reúne minhas anotações pessoais do Módulo F do curso de JavaScript do ``Curso em Vídeo``.  
Organizei o conteúdo por aulas, trazendo resumos dos principais conceitos, exemplos práticos, dicas e observações que considero úteis para revisão e fixação.

- ``Aula 21: Variáveis Compostas``

- ``Aula 22: Funções``

- ``Aula 23: Exercicio 07``

- ``Aula 24: Exercicio 08``

- ``Aula 25: Finalização``

> Lembrete: O título de cada aula contém um link direto para o respectivo vídeo no YouTube do Curso em Vídeo.

## 📚 Conteúdo das Aulas

### Módulo F

- [Aula 21 - Variáveis Compostas](#aula-21---variáveis-compostas)
- [Aula 22 - Funções](#aula-22---funções)
- [Aula 23 - Exercicio 07](#aula-23---exercicio-07)
- [Aula 24 - Exercicio 08](#aula-24---exercicio-08)
- [Aula 25 - Finalização](#aula-25---finalização)

---

## [Aula 21 - Variáveis Compostas](https://youtu.be/XdkW62tkAgU?si=XbM9l6R6EIm5LbGN)

Nesta aula, estudamos as **variáveis compostas**, conhecidas como ``arrays`` em JavaScript.

### Diferença entre variáveis simples e compostas

- **Variável simples:** armazena apenas um valor por vez.

  ```js
  let n = 7
  n = 8
  // n agora vale 8
  ```

- **Variável composta (array):** armazena vários valores em uma mesma estrutura.

  ```js
  let n = [7, 8, 9, 3, 4]
  n[3] // 3
  n[0] // 7
  n[2] // 9
  ```

Arrays são identificados por colchetes `[]` e cada valor é acessado por um **índice** (ou chave), começando do zero.

---

### Principais operações com arrays

- **Adicionar valor em uma posição específica:**

  ```js
  num[3] = 6 // adiciona 6 na posição 3
  ```

- **Adicionar valor ao final do array:**

  ```js
  num.push(7) // adiciona 7 na última posição
  ```

- **Saber o comprimento do array:**

  ```js
  num.length // retorna a quantidade de elementos
  ```

- **Ordenar o array em ordem crescente:**

  ```js
  num.sort()
  ```

---

### Percorrendo arrays

- **Com for tradicional:**

  ```js
  for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
  }
  ```

- **Com for...in (mais prático para arrays):**

  ```js
  for (let pos in num) {
    console.log(num[pos])
  }
  ```

  > "Para cada posição em num, mostre o valor correspondente."

---

### Buscando valores em arrays

- **Encontrar a posição de um valor:**

  ```js
  num.indexOf(7) // retorna o índice do valor 7, ou -1 se não encontrar
  ```

  Se o valor não existir, retorna `-1`.

---

### Exemplo prático da aula

```js
let num = [5, 8, 4, 9, 3]

console.log(num)
console.log(`Nosso vetor é ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nosso elemento na posição 0 é ${num[0]}`)
num.push(10)
num.sort()
console.log(`Nosso vetor ordenado é ${num}`)
console.log(`Nosso vetor com o elemento 10 adicionado é ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)

console.log(`------------------------------`)

let valores = [9, 1, 7, 4, 2]

for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(`------------------------------`)

for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(`------------------------------`)

let pos = valores.indexOf(8)
if (pos == -1) {
  console.log(`O valor 8 não foi encontrado no vetor`)
} else {
  console.log(`O valor 8 está na posição ${pos}`)
}

let fal = valores.indexOf(4)
console.log(`O valor 4 está na posição ${fal}`)
```

---

### Link para Exercício Aula 21

- [ex001](./Exercicios/ex001)

---

## [Aula 22 - Funções]()

---

## [Aula 23 - Exercicio 07]()

---

## [Aula 24 - Exercicio 08]()

---

## [Aula 25 - Finalização]()

---

## Minhas Considerações Finais

Essas anotações são um resumo do que achei mais importante e interessante no Módulo F do curso de JavaScript do Curso em Vídeo.  
Organizei aqui os conceitos, exemplos e dicas que vão me ajudar a revisar e fixar o conteúdo.

Bora continuar estudando e evoluindo! 🚀

> _Última atualização: 23/06/25 por Ivan Rocha_