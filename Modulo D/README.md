# 📒 Anotações - Curso de JavaScript

Bem-vindo(a) às anotações do módulo D de JavaScript do **Curso em Vídeo**!  
Aqui você encontrará resumos, exemplos e explicações das principais aulas.

### Resumo Geral

Este README reúne minhas anotações pessoais do Módulo D do curso de JavaScript do ``Curso em Vídeo``.  
Organizei o conteúdo por aulas, trazendo resumos dos principais conceitos, exemplos práticos, dicas e observações que considero úteis para revisão e fixação.

- ``Aula 11:`` - Condições I
- ``Aula 12:`` - Condições II
- ``Exercicio 01:`` - Em breve
- ``Exercicio 02:`` - Em breve
- ``Exercicio 03:`` - Em breve

> Lembrete: O título de cada aula contém um link direto para o respectivo vídeo no YouTube do Curso em Vídeo.

## 📚 Conteúdo das Aulas

### Módulo D

- [Aula 11 - Condições I](#aula-11---condições-i)
- [Aula 12 - Condições II]()
- [Exercicio 01 - Em breve]()
- [Exercicio 02 - Em breve]()
- [Exercicio 03 - Em breve]()

---

## [Aula 11 - Condições I](https://youtu.be/cOdG4eACN2A?si=strWAryZ8l1iAD75)

Nesta aula, começamos a trabalhar com **condições** em JavaScript. Até aqui, nosso código era sempre sequencial: uma linha após a outra, sem desvios. Com as condições, podemos criar bifurcações, ou seja, executar diferentes blocos de código dependendo de uma situação.

---

### O que são condições?

Condições funcionam como um cruzamento: se algo for verdadeiro, seguimos por um caminho; se for falso, seguimos por outro.

**Exemplo sequencial:**
```js
var n = 2
n += 2 // igual a 4
alert(n)
```
Aqui, tudo acontece em sequência.

**Com condição:**
```js
if (idade > 18) {
  alert("Maior de idade")
} else {
  alert("Menor de idade")
}
```
Agora, o fluxo pode mudar dependendo do valor de `idade`.

---

### Estrutura do if/else

- `if (condição) { ... }` — executa o bloco se a condição for verdadeira.
- `else { ... }` — executa o bloco se a condição for falsa.

**Resumo:**
```js
if (condição) {
  // bloco TRUE
} else {
  // bloco FALSE
}
```

Podemos ter apenas o `if` (condição simples) ou `if` + `else` (condição composta).

---

### Tipos de condição

- **Simples:** só executa algo se a condição for verdadeira.
  ```js
  if (condição) {
    // bloco TRUE
  }
  ```
- **Composta:** executa um bloco se for verdadeiro, outro se for falso.
  ```js
  if (condição) {
    // bloco TRUE
  } else {
    // bloco FALSE
  }
  ```

> Se a condição simples for falsa, o código apenas segue normalmente.

---

### Visualizando o fluxo

Veja a imagem:  
![Imagem de Explicação](./image/if_else.png)

---

### Dica: Executando JS no VS Code

> Para testar JS rapidamente no terminal do VS Code, use a extensão [Node.js Exec](https://marketplace.visualstudio.com/items?itemName=miramac.vscode-exec-node) (atalho F8).

---

### Exemplo prático: Sistema de multas

```js
function verificar() {
  let velo = document.querySelector('input#vel')
  let veloci = Number(velo.value)
  let res = document.querySelector('div#res')

  res.innerHTML = `<br>A velocidade do seu carro é de ${veloci}Km/h <br>`

  if (veloci > 80) {
    res.innerHTML += `MULTADO! Velocidade permitida é de 80Km/h. Seu carro estava a ${veloci - 80}Km/h acima do limite. <br>`
    res.innerHTML += `Dirija sempre respeitando os limites de velocidade! <br>`
    res.innerHTML += `Use cinto de segurança!`
  } else {
    res.innerHTML += `Você está dentro do limite de velocidade permitido <br>`
    res.innerHTML += `Use sempre o cinto de segurança <br>`
  }
}
```

**HTML:**
```html
<body>
  <h1>Sistema de multas</h1>
  Velocidade do carro: <input type="number" name="vel" id="vel" placeholder="Velocidade do carro">Km/h
  <input type="button" value="verificar" onclick="verificar()">
  <div id="res"></div>
  <script src="./index.js"></script>
</body>
```

---

### Desafio: Nacionalidade

Adapte o exemplo para verificar se a pessoa é brasileira ou estrangeira:

```js
function verificar() {
  let paisOrigem = document.querySelector('input#textbr')
  let res = document.querySelector('div#res')
  let pais = paisOrigem.value

  res.innerHTML = `<br>O país de origem informado foi: ${paisOrigem.value} <br>`
  if (pais == 'Brasil') {
    res.innerHTML += `Você é brasileiro! <br>`
    res.innerHTML += `Seja bem-vindo ao Brasil novamente! <br>`
  } else {
    res.innerHTML += `Você é estrangeiro! <br>`
    res.innerHTML += `Seja bem-vindo ao Brasil! <br> Welcome to Brazil! <br>`
  }
}
```

**HTML:**
```html
<body>
  <h1>Você é Brasileiro?</h1>
  Seu país de origem é: <input type="text" name="textbr" id="textbr" placeholder="Digite seu país de origem">
  <input type="button" value="Verificar" onclick="verificar()">
  <div id="res"></div>
  <script src="./index.js"></script>
</body>
```

---

### Links para Exercícios Aula 11

- [ex001](./Exercicios/ex001)
- [ex002](./Exercicios/ex002)
- [ex003](./Exercicios/ex003)
- [ex004 - Desafio](./Exercicios/ex004)

---

## Minhas Considerações Finais

Essas anotações são um resumo do que achei mais importante e interessante no Módulo D do curso de JavaScript do Curso em Vídeo.  
Organizei aqui os conceitos, exemplos e dicas que vão me ajudar a revisar e fixar o conteúdo.

Bora continuar estudando e evoluindo! 🚀

> _Última atualização: 09/06/25 por Ivan Rocha_