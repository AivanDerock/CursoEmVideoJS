# 📒 Anotações - Curso de JavaScript

Bem-vindo(a) às anotações do módulo B de JavaScript do **Curso em Vídeo**!  
Aqui você encontrará resumos, exemplos e explicações das principais aulas.

### Resumo Geral

Este README reúne minhas anotações pessoais do Módulo B do curso de JavaScript do ``Curso em Vídeo``.  
Organizei o conteúdo por aulas, trazendo resumos dos principais conceitos, exemplos práticos, dicas e observações que considero úteis para revisão e fixação.

- ``Aula 05:`` 
- ``Aula 06:`` 
- ``Aula 07:`` 
- ``Aula 08:``

> Lembrete: O título de cada aula contém um link direto para o respectivo vídeo no YouTube do Curso em Vídeo.

## 📚 Conteúdo das Aulas

### Módulo B

- [Aula 05 - Tipos de dados e Variáveis](#aula-05-tipos-de-dados-e-variáveis)
- [Aula 06]()
- [Aula 07]()
- [Aula 08]()

---

## [Aula 05: Tipos de dados e Variáveis](https://youtu.be/Vbabsye7mWo?si=C-3BIUgboDCwsnHf)

Na aula anterior ([Aula 04](../Modulo%20A/README.md)), tivemos nosso primeiro contato com comandos como `alert()`, `confirm()` e `prompt()`. Porém, ainda não aprendemos como capturar e utilizar os valores retornados por esses comandos. Se não tratarmos esses dados, eles se perdem e não podem ser usados no restante do código.

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

## Minhas Considerações Finais

Essas anotações são um resumo do que achei mais importante e interessante no Módulo A do curso de JavaScript do Curso em Vídeo.  
Organizei aqui os conceitos, exemplos e dicas que vão me ajudar a revisar e fixar o conteúdo.

Bora continuar estudando e evoluindo! 🚀

> _Última atualização: 28/05/25 por Ivan Rocha_