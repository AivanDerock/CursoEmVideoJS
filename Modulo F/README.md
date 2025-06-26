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
- [Aula 23 - Exercicio 07](#aula-23---exercicio-07aula-24---exercicio-08)
- [Aula 24 - Exercicio 08](#aula-23---exercicio-07aula-24---exercicio-08)
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

## [Aula 22 - Funções](https://youtu.be/mc3TKp2XzhI?si=OBwW5JRQVpebHaak)

Nesta aula, aprofundamos o estudo de ``funções`` em JavaScript, focando no uso de ``parâmetros`` e ``retornos`` para tornar o código mais flexível e reutilizável.

### O que é uma função?

- Uma função é um bloco de código que executa uma ação assim que é chamada, podendo receber parâmetros e retornar um resultado.
- Nem toda função precisa de parâmetros ou retorno, mas eles aumentam as possibilidades de uso.

---

### Estrutura de uma função

**Função sem parâmetro e sem retorno:**

```js
function acao() {
  // bloco de código
}
```

**Função com parâmetro e retorno:**

```js
function acao(param) {
  // bloco de código
  return res;
}

acao(5); // chamada da função
```

- **Chamada:** `acao(5)`
- **Parâmetro:** `param` (recebe o valor 5)
- **Ação:** bloco de código executado
- **Retorno:** valor devolvido pelo `return`

---

### Exemplos práticos

**Função para identificar par ou ímpar:**

```js
function parimpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

let res = parimpar(11); // res = "Ímpar"
```

**Função com parâmetros pré-definidos:**

```js
function soma(a = 0, b = 0) {
  return a + b;
}

console.log(soma(2, 3)); // 5
console.log(soma(2));    // 2 (b assume 0)
```

> Parâmetros pré-definidos evitam erros caso algum valor não seja passado na chamada.

**Função anônima atribuída a uma variável:**

```js
let v = function(x) {
  return x * 2;
}

console.log(v(5)); // 10
```

---

### Exemplos da aula

```js
function parimpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

let numero = parimpar(4);
console.log(numero);
console.log(parimpar(5));

console.log("--------------------------------------");

function soma(a = 0, b = 0) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));

console.log("--------------------------------------");

let v = function(x) {
  return x * 2;
}

console.log(v(5));

console.log("--------------------------------------");

function fatorial(f) {
  let fat = 1;
  for (let c = f; c > 1; c--) {
    fat *= c;
  }
  return fat;
}

console.log(fatorial(5));

console.log("--------------------------------------");

function fatorial2(f2) {
  if (f2 == 1) {
    return 1;
  } else {
    return f2 * fatorial2(f2 - 1);
  }
}

console.log(fatorial2(5));
```

---

### Link para Exercício Aula 22

- [ex002](./Exercicios/ex002)

---

## [Aula 23 - Exercício 07](https://youtu.be/vEOEZ03ZyiE?si=y-Z-KNjfvAUZ0f6R) / [Aula 24 - Exercício 08](https://youtu.be/slLoLLCd-k0?si=sjp4U12nOZTXQfNm)

Nessas aulas, desenvolvemos um ``contador de números`` com funcionalidades como soma, média e outros cálculos.  
O foco foi totalmente prático, aplicando conceitos já vistos em aulas anteriores.  
Não foram apresentados novos comandos ou conceitos teóricos relevantes para anotações.

---

### Link para Exercícios

- [ex003](./Exercicios/ex003)

---

## [Aula 25 - Finalização](https://youtu.be/roP93FA-NgU?si=6jImmmTge8m0AUo-)

Depois de quase um mês e meio, chegamos ao fim do curso básico de JavaScript do **Curso em Vídeo**!

Apesar do encerramento do módulo, ainda há muito conteúdo para estudar e aprofundar.  
Aqui vai um resumo do que foi visto ao longo do curso:

- Fundamentos
- Variáveis e tipos de dados
- Operadores
- Condições
- Repetições
- Arrays
- Funções
- DOM
- Exercícios práticos

---

### Dicas para os próximos passos

O aprendizado não para aqui! Alguns tópicos importantes para continuar evoluindo:

- Funções avançadas
- Objetos
- Modularização
- RegEx (Expressões Regulares)
- JSON
- AJAX
- Node.js
- Frameworks

---

### Fundamentos de Objetos em JavaScript

No final da aula, foi apresentado o conceito de ``objetos`` em JavaScript.

- Arrays em JS podem armazenar diferentes tipos de dados (string, number, boolean, etc).
- Porém, arrays são limitados quando precisamos de estruturas mais complexas.
- Objetos permitem organizar dados em pares de chave e valor, além de métodos (funções internas).

**Sintaxe básica:**

```js
let amigo = {
  nome: 'José',
  idade: 25,
  peso: 70.5,
  sexo: "M",
  engordar(p) {
    console.log('engordou');
    this.peso += p;
  }
}

amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso}kg`);
```

- Objetos usam `{}` e permitem acessar valores por nome (ex: `amigo.nome`).
- Métodos são funções dentro do objeto (ex: `engordar`).

---

### Linkpara Exercício

- [ex004](./Exercicios/ex004)

---

## Minhas Considerações Finais

Essas anotações são um resumo do que achei mais importante e interessante no Módulo F do curso de JavaScript do Curso em Vídeo.  
Organizei aqui os conceitos, exemplos e dicas que vão me ajudar a revisar e fixar o conteúdo.

Bora continuar estudando e evoluindo! 🚀

> _Última atualização: 26/06/25 por Ivan Rocha_