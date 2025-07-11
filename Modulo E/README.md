# 📒 Anotações - Curso de JavaScript

Bem-vindo(a) às anotações do módulo E de JavaScript do **Curso em Vídeo**!  
Aqui você encontrará resumos, exemplos e explicações das principais aulas.

### Resumo Geral

Este README reúne minhas anotações pessoais do Módulo E do curso de JavaScript do ``Curso em Vídeo``.  
Organizei o conteúdo por aulas, trazendo resumos dos principais conceitos, exemplos práticos, dicas e observações que considero úteis para revisão e fixação.

- ``Aula 16: I Repetições`` Introdução aos laços de repetição em JavaScript, com foco nas estruturas `while` e `do...while` para executar blocos de código várias vezes enquanto uma condição for verdadeira.

- ``Aula 17: II Repetições`` Apresentação da estrutura `for`, que utiliza variável de controle, inicialização, teste lógico e incremento para criar repetições de forma mais compacta e organizada.

- ``Aula 18: Exercício 04`` Aula introdutória sobre a reutilização do site modelo para os próximos exercícios, sem novos conceitos práticos.

- ``Aula 19: Exercício 05`` Desenvolvimento de um contador de passos, incluindo o uso de emojis no JavaScript através de códigos Unicode.

- ``Aula 20: Exercício 06`` Projeto de tabuada, destacando o uso de métodos como `appendChild()`, `createElement()` e `.text` para manipulação dinâmica de elementos no DOM.

> Lembrete: O título de cada aula contém um link direto para o respectivo vídeo no YouTube do Curso em Vídeo.

## 📚 Conteúdo das Aulas

### Módulo E

- [Aula 16 - I Repetições](#aula-16---i-repetições)
- [Aula 17 - II Repetições](#aula-17---ii-repetições)
- [Aula 18 - Exercicio 04](#aula-18---exercicio-04)
- [Aula 19 - Exercicio 05](#aula-19---exercicio-05)
- [Aula 20 - Exercicio 06](#aula-20---exercicio-06)

---

## [Aula 16 - I Repetições](https://youtu.be/5rZqYPKIwkY?si=pHfksMck34Un6z1P)

Nesta aula, começamos a estudar ``repetições`` (laços) em JavaScript, usando exemplos do dia a dia para facilitar o entendimento.

### Introdução ao conceito de repetição

Imagine uma pizza com 8 pedaços. Se quisermos comer todos, poderíamos escrever:

```js
function comerPizza() {
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
}
```

Aqui, repetimos o comando 8 vezes. Mas e se fossem 100 pedaços? Escrever manualmente seria inviável. Para isso, usamos ``estruturas de repetição``.

---

### Estruturas de Controle

- ``Sequência:`` Executa comandos um após o outro, do início ao fim.
- ``Desvio (Condições):`` Permite escolher caminhos diferentes com base em testes lógicos (`if`, `else`).
- ``Repetição (Laços):`` Repete um bloco de código enquanto uma condição for verdadeira.

---

### Estrutura de repetição com teste lógico no início: `while`

O laço `while` executa um bloco ``enquanto`` a condição for verdadeira.

```js
while (condição) {
  // bloco de código
}
```

Exemplo com a pizza:

```js
function comerPizza() {
  while (temFatia()) {
    comerFatia()
  }
}
```

Aqui, o comando `comerFatia()` será executado enquanto houver fatias.

---

### Exemplo prático

```js
console.log("Forma sequencial:");
console.log("Hello, World!");
console.log("Hello, World!");
console.log("Hello, World!");

console.log("Com while:");
let c = 1;
while (c <= 3) {
  console.log("Hello, World!");
  c++;
}

let d = 1;
while (d <= 10) {
  console.log(`Passo ${d}`);
  d++;
}
```

---

### Estrutura de repetição com teste lógico no final: `do...while`

No `do...while`, o bloco é executado ``pelo menos uma vez``, e só depois o teste lógico é feito.

```js
do {
  // bloco de código
} while (condição)
```

Exemplo:

```js
console.log("Com do...while:");
let a = 1;
do {
  console.log(`Passo ${a}`);
  a++;
} while (a <= 3);
```

---

### Resumo

- Use ``sequência`` para executar comandos em ordem.
- Use ``condições`` para desviar o fluxo do código.
- Use ``repetições`` para executar comandos várias vezes, de forma eficiente.
- O `while` testa a condição antes de executar o bloco.
- O `do...while` executa o bloco ao menos uma vez, testando a condição depois.

Essas estruturas tornam seu código mais limpo, eficiente e fácil de manter!

### Link para Exercício Aula 16

- [ex001](./Exercicios/ex001)

---

## [Aula 17 - II Repetições](https://youtu.be/eX-lkN_Zahc?si=DDwpMe4O-58noN-j)

Nesta aula, aprendemos sobre a ``estrutura de repetição com variável de controle``, conhecida como `for`.  
Essa estrutura realiza três etapas principais: ``inicialização``, ``teste lógico`` e ``incremento``.

- ``Inicialização:`` Define o valor inicial da variável de controle.
- ``Teste lógico:`` Verifica se a condição é verdadeira para continuar o laço.
- ``Incremento:`` Atualiza a variável de controle a cada repetição.

O fluxo é: inicializa → testa → executa o bloco → incrementa → testa novamente...  
Quando o teste lógico for falso, o laço termina e o código segue normalmente.

**Sintaxe:**
```js
for (inicialização; teste; incremento) {
  // bloco de código
}
```

> Dentro do `for`, é possível usar outras estruturas como `while`, `do...while`, `if`, `switch`, etc.

---

### Comparação com o `while`

Exemplo usando `while`:

```js
var c = 1;
while (c <= 10) {
  // bloco de código
  c++;
}
```

O mesmo exemplo usando `for`:

```js
for (var c = 1; c <= 10; c++) {
  // bloco de código
}
```

Ambos executam o bloco 10 vezes, de 1 até 10.

---

### Exemplo prático

```js
for (var c = 1; c <= 10; c++) {
  console.log(`Passo ${c}`);
}
```

---

Nesta aula também foi apresentado o ``Depurador`` do VS Code, uma ferramenta útil para acompanhar a execução do código passo a passo.

---

### Link para Exercício Aula 17

- [ex002](./Exercicios/ex002)

---

## [Aula 18 - Exercício 04](https://youtu.be/6tyHypeY4-8?si=_ng9LgHSMAb8U0qS)

Esta aula foi dedicada à apresentação e introdução dos próximos exercícios.  
O principal destaque foi a recomendação de reutilizar o **site modelo** criado anteriormente para agilizar o desenvolvimento dos novos projetos.

Nenhum conceito novo relevante foi abordado, por isso não fiz anotações detalhadas.

> Acesse o site modelo aqui: [Modelo](../Modelos/Modelos%20de%20Projetos/)

---

## [Aula 19 - Exercício 05](https://youtu.be/oMNbc_LFz8w?si=7ltSYsl7vOodJHPF)

Neste exercício, desenvolvemos um ``contador de passos`` em JavaScript.  
Um ponto novo abordado foi o uso de ``emojis`` no JS, que podem ser inseridos utilizando códigos Unicode, como `\u{1F449}`.

---

### Link para Exercício Aula 19

- [ex003](./Exercicios/ex003)

---

## [Aula 20 - Exercício 06](https://youtu.be/mfHAQ-4Rspw?si=gz3QAbUYWFpLq8uC)

Nesta aula, desenvolvemos um projeto de ``tabuada``, revisando conceitos das aulas anteriores e aprendendo alguns pontos importantes:

- ``appendChild()``: adiciona um novo elemento como filho de outro elemento no DOM.
- ``createElement('option')``: cria dinamicamente um elemento `<option>` para listas e selects.
- ``.text``: define o texto exibido dentro do elemento criado.

Esses métodos são fundamentais para manipulação dinâmica de elementos na página usando JavaScript.

---

### Link para Exercício Aula 20

- [ex004](./Exercicios/ex004)

---

## Minhas Considerações Finais

Essas anotações são um resumo do que achei mais importante e interessante no Módulo E do curso de JavaScript do Curso em Vídeo.  
Organizei aqui os conceitos, exemplos e dicas que vão me ajudar a revisar e fixar o conteúdo.

Bora continuar estudando e evoluindo! 🚀

> _Última atualização: 20/06/25 por Ivan Rocha_