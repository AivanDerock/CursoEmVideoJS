# 📒 Anotações - Curso de JavaScript

Bem-vindo(a) às anotações do módulo B de JavaScript do **Curso em Vídeo**!  
Aqui você encontrará resumos, exemplos e explicações das principais aulas.

### Resumo Geral

Este README reúne minhas anotações pessoais do Módulo B do curso de JavaScript do ``Curso em Vídeo``.  
Organizei o conteúdo por aulas, trazendo resumos dos principais conceitos, exemplos práticos, dicas e observações que considero úteis para revisão e fixação.

- ``Aula 05:`` Tipos de dados e Variáveis 
- ``Aula 06:`` Tratamento de Dados
- ``Aula 07:`` 
- ``Aula 08:``

> Lembrete: O título de cada aula contém um link direto para o respectivo vídeo no YouTube do Curso em Vídeo.

## 📚 Conteúdo das Aulas

### Módulo B

- [Aula 05 - Tipos de dados e Variáveis](#aula-05-tipos-de-dados-e-variáveis)
- [Aula 06 - Tratamento de Dados](#aula-06-tratamento-de-dados)
- [Aula 07]()
- [Aula 08]()

---

## [Aula 05: Tipos de dados e Variáveis](https://youtu.be/Vbabsye7mWo?si=C-3BIUgboDCwsnHf)

Na aula anterior ([Aula 04](../Modulo%20A/README.md#aula-04-nossos-primeiros-scripts)), tivemos nosso primeiro contato com comandos como `alert()`, `confirm()` e `prompt()`. Porém, ainda não aprendemos como capturar e utilizar os valores retornados por esses comandos. Se não tratarmos esses dados, eles se perdem e não podem ser usados no restante do código.

### Comentários em JavaScript

Durante o desenvolvimento, é importante pausar para fazer anotações no código usando comentários. Eles ajudam na organização e facilitam a leitura, mas devem ser usados com moderação.

```js
// Comentário de uma linha

/*
  Comentário de múltiplas linhas
  Pode ser usado para explicar trechos maiores do código
*/
```

> **Lembrete:** Comentários são ignorados pelo navegador e servem apenas para ajudar na compreensão e manutenção do código.

---

### Variáveis em JavaScript

Variáveis são usadas para armazenar dados temporariamente na memória do computador, permitindo que você trabalhe com esses valores ao longo do código.

#### Como declarar variáveis

Existem três formas principais de declarar variáveis em JavaScript:

- **`var`**: Primeira forma criada, atualmente não recomendada devido a problemas de escopo e possíveis riscos de vazamento de dados.
- **`let`**: Mais moderna e recomendada para uso geral. Permite alterar o valor ao longo do código.
- **`const`**: Usada para valores constantes, ou seja, que não podem ser alterados depois de definidos.

```js
var nome = "Cleiton"; // Evite usar var
let idade = 25;       // Use let para valores que podem mudar
const PI = 3.14;      // Use const para valores fixos
```

> **Dica:** Apenas `const` não pode ser alterada depois de definida. `let` e `var` podem receber novos valores.

#### Atribuição de valores

O sinal `=` em JavaScript significa "recebe" e não "igual".  
Exemplo:  
```js
let nome = "Ivan"; // nome recebe "Ivan"
nome = "Cleiton";  // agora nome recebe "Cleiton"
```

#### Boas práticas para nomes de variáveis (identificadores)

- Use nomes descritivos e coerentes com o contexto.
- Não comece com números.
- Pode começar com letras, `$` ou `_`.
- Não utilize espaços (use camelCase: `carroDePessoas`).
- Não use palavras reservadas do JavaScript (ex: `function`, `var`).
- JavaScript diferencia maiúsculas de minúsculas (`nome` ≠ `Nome`).

#### Anulando variáveis

Você pode anular uma variável atribuindo `null`:
```js
let nome = null; // Agora a variável não tem valor
```

#### Para onde vão os dados?

Os valores das variáveis ficam armazenados na memória do computador enquanto o programa está rodando.

#### Tipos de dados que variáveis podem armazenar

- **Number**: números inteiros ou decimais
- **String**: textos entre aspas
- **Boolean**: `true` ou `false`
- **Null**: ausência de valor
- **Undefined**: valor não definido
- **Object**: objetos e arrays
- **Function**: funções

#### Descobrindo o tipo de uma variável

Use o comando `typeof` para saber o tipo de um valor ou variável:

```js
let n = 200;
console.log(typeof n); // "number"

console.log(typeof "texto"); // "string"
console.log(typeof true);    // "boolean"
console.log(typeof null);    // "object" (comportamento histórico do JS)
console.log(typeof undefined); // "undefined"
```

#### Exemplo prático

```js
let nome = "Ivan";
let carro = "Ferrari";
console.log(nome + ' possui uma ' + carro); // Ivan possui uma Ferrari
```

---

## [Aula 06: Tratamento de Dados](https://youtu.be/OJgu_KCCUSY?si=B0SqZ5TS_7ZSGkCI)

Nesta aula, o foco foi o tratamento dos dois principais tipos primitivos do JavaScript: **number** e **string**. Também aprendemos como capturar, armazenar e manipular os dados recebidos pelo `prompt()`.

---

### Capturando e Utilizando Dados do Prompt

Antes, ao usar comandos como `alert()`, `confirm()` e `prompt()`, não sabíamos como armazenar as respostas. Agora, com variáveis, podemos guardar e manipular esses valores:

```js
let name = prompt("Qual é seu nome?");
alert(`Olá, ${name}! Seja bem-vindo(a)!`);
```

Também é possível concatenar textos usando o operador `+`:

```js
alert("Olá, " + name + "! Seja bem-vindo(a)!");
```

---

### Conversão de Tipos e Soma de Valores

Por padrão, os valores recebidos pelo `prompt()` são **strings**. Se tentarmos somar dois números digitados pelo usuário sem converter, o resultado será uma concatenação de texto, não uma soma numérica:

```js
let n1 = prompt("Digite o primeiro número:");
let n2 = prompt("Digite outro número:");
let soma = n1 + n2; // Aqui ocorre concatenação, não soma
```

Para somar corretamente, converta as strings para números:

```js
// Usando parseFloat para números com casas decimais
let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite outro número:"));
let soma = n1 + n2;
alert(`A soma de ${n1} + ${n2} é igual a ${soma}`);
```

```js
// Usando Number para conversão automática
let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite outro número:"));
let soma = n1 + n2;
alert(`A soma de ${n1} + ${n2} é igual a ${soma}`);
```

> **Atenção:** `parseInt` converte apenas para inteiros, enquanto `parseFloat` aceita números com ponto decimal.

---

### Convertendo entre String e Number

- Para converter de **string** para **number**: `Number(n)`, `parseInt(n)`, `parseFloat(n)`
- Para converter de **number** para **string**: `String(n)` ou `n.toString()`

Exemplo:

```js
let n1 = String(prompt("Digite o primeiro número:"));
let n2 = prompt("Digite outro número:").toString();
let resultado = n1 + n2; // Aqui ocorre concatenação, não soma
```

---

### Template Strings

Para facilitar a formatação de textos, usamos **template strings** (entre crases `` ` ``):

```js
let nome = "Ivan";
let sobrenome = "Rocha";
let idade = 30;
let cidade = "São Paulo";
console.log(`Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos e moro em ${cidade}.`);
```

- `${}` é chamado de **placeholder** e serve para inserir variáveis dentro da string.

---

### Métodos Úteis para Strings

- `.length` — Conta quantos caracteres a string possui
- `.toUpperCase()` — Transforma em MAIÚSCULO
- `.toLowerCase()` — Transforma em minúsculo

Exemplo prático:

```js
var name = prompt("Qual é seu nome?");
document.write(`Olá, ${name} seja bem-vindo(a)!<br>`);
document.write(`Seu nome tem ${name.length} caracteres<br>`);
document.write(`Seu nome em maiúsculas: ${name.toUpperCase()}<br>`);
document.write(`Seu nome em minúsculas: ${name.toLowerCase()}<br>`);
```

> Aqui usamos `document.write` para exibir as informações diretamente na página, ao invés de pop-ups.  
> Lembrete: O `<br>` é uma tag HTML usada para criar uma quebra de linha no texto exibido na página.   
> Quando usamos `document.write("texto<br>")`, o conteúdo após o `<br>` aparecerá na linha de baixo.

---

### Formatação de Números

- `.toFixed(2)` — Define o número de casas decimais (ex: `1343.5.toFixed(2)` resulta em `1343.50`)
- `.replace('.', ',')` — Troca o ponto por vírgula (útil para formatação brasileira)
- `.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })` — Formata como moeda

Exemplos:

```js
let n1 = 1343.5;
console.log(n1.toFixed(2)); // "1343.50"
console.log(n1.toFixed(2).replace('.', ',')); // "1343,50"
console.log(n1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })); // "R$ 1.343,50"
console.log(n1.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // "$1,343.50"
```

### Links para Exercícios Aula 6

- [ex001](./Exercicios/ex001/)
- [ex002](./Exercicios/ex002/)
- [ex003](./Exercicios/ex003/)

---


## Minhas Considerações Finais

Essas anotações são um resumo do que achei mais importante e interessante no Módulo A do curso de JavaScript do Curso em Vídeo.  
Organizei aqui os conceitos, exemplos e dicas que vão me ajudar a revisar e fixar o conteúdo.

Bora continuar estudando e evoluindo! 🚀

> _Última atualização: 28/05/25 por Ivan Rocha_