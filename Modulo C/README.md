# 📒 Anotações - Curso de JavaScript

Bem-vindo(a) às anotações do módulo C de JavaScript do **Curso em Vídeo**!  
Aqui você encontrará resumos, exemplos e explicações das principais aulas.

### Resumo Geral

Este README reúne minhas anotações pessoais do Módulo C do curso de JavaScript do Curso em Vídeo.
Organizei o conteúdo por aulas, trazendo resumos dos principais conceitos, exemplos práticos, dicas e observações que considero úteis para revisão e fixação

- ``Aula 09:`` Introdução ao DOM (Document Object Model), explicando como acessar, manipular e estilizar elementos HTML usando JavaScript no navegador.
- ``Aula 10:`` Eventos DOM — como tornar a página interativa respondendo a ações do usuário, como cliques e movimentos do mouse, utilizando funções e manipuladores de eventos.

> Lembrete: O título de cada aula contém um link direto para o respectivo vídeo no YouTube do Curso em Vídeo.

## 📚 Conteúdo das Aulas

### Módulo C

- [Aula 09 - Entendendo o DOM](#aula-09---entendendo-o-dom)
- [Aula 10 - Eventos DOM](#aula-10---eventos-dom)

---

## [Aula 09 - Entendendo o DOM](https://youtu.be/WWZX8RWLxIk?si=xa7Eu-aqLo9LpS7c)

Nesta aula, aprendemos sobre o **DOM** (Document Object Model), que é a interface que permite ao JavaScript acessar e manipular todos os elementos de uma página HTML.

---

### O que é DOM?

- **DOM** significa *Document Object Model* (Modelo de Objetos para Documentos).
- Ele representa a estrutura do HTML como uma árvore de objetos, onde cada elemento (tag, texto, atributo) é um nó.
- O DOM só funciona no navegador, não no Node.js.
- É através do DOM que conseguimos modificar o conteúdo, o estilo e a estrutura da página de forma dinâmica.

---

### Estrutura da Árvore DOM

- A raiz da árvore é o objeto `window` (a janela do navegador).
- Dentro de `window`, temos:
  - `location`: informações sobre a URL e navegação.
  - `document`: representa o documento HTML atual.
  - `history`: histórico de navegação.
- O `document` contém o HTML, que possui dois grandes "filhos": `head` e `body`.
- Cada elemento dentro do HTML pode ser pai ou filho de outros elementos, formando uma hierarquia.

---

### Selecionando Elementos no DOM

Podemos acessar elementos de várias formas:

- **Por tag (marca):**
  ```js
  let p1 = document.getElementsByTagName('p')[0]; // Primeiro <p>
  ```
- **Por id:**
  ```js
  let d = document.getElementById('msg');
  ```
- **Por nome:**
  ```js
  let v = document.getElementsByName('vasco')[0];
  ```
- **Por classe:**
  ```js
  let f = document.getElementsByClassName('fla')[0];
  ```
- **Por seletor (moderno e recomendado):**
  ```js
  let i = document.querySelector('p#iva'); // <p> com id "iva"
  let c = document.querySelector('p.car'); // <p> com classe "car"
  ```

> **Dica:** Sempre que um método retorna uma coleção (como `getElementsByTagName`), use `[0]`, `[1]`, etc., para acessar elementos específicos. Lembre-se que a contagem começa do zero.

---

### Modificando Estilos e Conteúdo

Com o DOM, podemos alterar estilos e textos dos elementos:

```js
p1.style.color = 'red';
p1.style.backgroundColor = 'black';
```

- **`innerText`**: retorna apenas o texto do elemento.
- **`innerHTML`**: retorna o texto com a formatação HTML interna.

Exemplo:
```js
document.write(p1.innerText);   // Só o texto
document.write(p1.innerHTML);   // Texto + tags HTML internas
```

---

### Exemplo Completo

**HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Primeiros passos com DOM</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <h1 name="vasco">Iniciando com DOM</h1>
  <p class="fla">Aqui vai o resultado</p>
  <p>Aprendendo a usar <strong>DOM</strong></p>
  <p id="iva">Meu nome é</p>
  <p class="car">Meu carro é</p>
  <div id="msg">Clique em mim</div>
  <script src="index.js"></script>
</body>
</html>
```

**CSS:**
```css
body {
  background-color: rgb(116, 116, 116);
  font: 16px arial, sans-serif;
  color: #000000;
}
```

**JavaScript:**
```js
let p1 = document.getElementsByTagName('p')[1];
let d = document.getElementById('msg');
let v = document.getElementsByName('vasco')[0];
let f = document.getElementsByClassName('fla')[0];
let i = document.querySelector('p#iva');
let c = document.querySelector('p.car');
let corpo = document.body;

corpo.style.backgroundColor = 'lightblue';
p1.style.color = 'red';
p1.style.backgroundColor = 'black';

document.write(`Está escrito assim: ${p1.innerText}`);

d.style.color = 'blue';
d.style.background = 'red';

v.style.color = 'green';
v.style.background = 'yellow';

f.style.color = 'purple';
f.style.background = 'orange';

i.style.color = 'pink';
i.style.background = 'gray';

c.style.color = 'black';
c.style.background = 'white';
```

---

### Resumo

- O DOM permite manipular qualquer elemento da página via JavaScript.
- Existem vários métodos para selecionar elementos: por tag, id, nome, classe e seletor.
- Podemos alterar estilos, textos e até a estrutura da página em tempo real.

---

### Links para Exercícios Aula 9

- [ex001](./Exercicios/ex001)

---

## [Aula 10 - Eventos DOM](https://youtu.be/wWnBB-mZIvY?si=_3ARAITBu0DWs8DK)

Nesta aula, aprofundamos o uso de **eventos** no JavaScript, que são ações ou ocorrências que acontecem nos elementos da página (como clicar, passar o mouse, etc.).

---

### O que são eventos?

Eventos são tudo o que pode acontecer com um elemento da página: clique, passar o mouse, pressionar uma tecla, etc.  
Os eventos mais comuns de mouse são:

- `mouseenter`: quando o mouse entra na área do elemento
- `mousemove`: quando o mouse se move dentro do elemento
- `mousedown`: quando o botão do mouse é pressionado
- `mouseup`: quando o botão do mouse é solto
- `click`: quando o elemento é clicado
- `mouseout`/`mouseleave`: quando o mouse sai do elemento

> Existem muitos outros eventos. Consulte a [documentação da Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/Events) para ver todos.

---

### Diferença entre `mouseout` e `mouseleave`

- `mouseleave`: Dispara quando o mouse sai totalmente do elemento (não dispara ao entrar em um filho).
- `mouseout`: Dispara quando o mouse sai do elemento ou de qualquer filho.

Na maioria dos casos, `mouseleave` é mais previsível quando há elementos filhos.

---

### Como tratar eventos em JavaScript

Para que um código seja executado quando um evento ocorre, usamos **funções**.  
Funções são blocos de código que só rodam quando chamadas por um evento.

Exemplo de função:
```js
function acao() {
  // bloco de código
}
```

Podemos configurar eventos de duas formas:

#### 1. No HTML

```html
<div id="area" onclick="clicar()" onmouseenter="entrar()">
  <p>interaja..</p>
</div>
```

#### 2. No JavaScript (recomendado)

```js
let a = document.getElementById("area");
a.addEventListener("click", clicar);
a.addEventListener("mouseenter", entrar);
a.addEventListener("mouseleave", sair);
```

---

### Exemplo prático de manipulação de eventos

```js
let a = document.getElementById("area");

function clicar() {
  a.innerText = "Clicou!";
  a.style.background = "lightblue";
  a.style.color = "black";
}

function entrar() {
  a.innerText = "Entrou!";
  a.style.background = "lightgreen";
  a.style.color = "black";
}

function sair() {
  a.innerText = "Saiu!";
  a.style.background = "lightcoral";
  a.style.color = "black";
}
```

---

### Dica: Escopo de variáveis

Se você declarar a variável `a` fora das funções, ela pode ser usada em todas elas.  
Se declarar dentro, só estará disponível naquela função.

---

### Debugando eventos

Para encontrar erros, use o **DevTools** do navegador (F12).  
Erros de JavaScript aparecem com uma bolinha vermelha e indicam o arquivo, linha e coluna do erro.

---

### Exemplo de interatividade: Somando números

Podemos usar eventos para criar interações, como somar dois números digitados pelo usuário:

**HTML:**
```html
<body>
  <h1>Somando:</h1>
  <input type="number" name="textn1" id="textn1" placeholder="Digite um número" /> +
  <input type="number" name="textn2" id="textn2" placeholder="Digite outro número" />
  <input type="button" value="Somar" onclick="somar()" />
  <p id="res"></p>
  <script src="./index.js"></script>
</body>
```

**JavaScript:**
```js
function somar() {
  let n1 = document.getElementById("textn1");
  let n2 = document.getElementById("textn2");
  let res = document.getElementById("res");

  let num1 = Number(n1.value);
  let num2 = Number(n2.value);

  res.innerHTML = `A soma de ${num1} e ${num2} é igual a ${num1 + num2}.`;
}
```

---

### Resumo

- Eventos permitem tornar a página interativa.
- Funções são executadas quando eventos acontecem.
- Prefira adicionar eventos pelo JavaScript usando `addEventListener`.
- Use o DevTools para depurar e encontrar erros.

---

### Links para Exercícios Aula 10

- [ex002](./Exercicios/ex002)
- [ex003](./Exercicios/ex003)

---

## Minhas Considerações Finais

Essas anotações são um resumo do que achei mais importante e interessante no Módulo C do curso de JavaScript do Curso em Vídeo.  
Organizei aqui os conceitos, exemplos e dicas que vão me ajudar a revisar e fixar o conteúdo.

Bora continuar estudando e evoluindo! 🚀

> _Última atualização: 06/06/25 por Ivan Rocha_