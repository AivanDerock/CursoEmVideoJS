# 📒 Anotações - Curso de JavaScript

Bem-vindo(a) às anotações do módulo A de JavaScript do **Curso em Vídeo**!  
Aqui você encontrará resumos, exemplos e explicações das principais aulas.

### Resumo Geral

Este README reúne minhas anotações pessoais do Módulo A do curso de JavaScript do ``Curso em Vídeo``.  
Organizei o conteúdo por aulas, trazendo resumos dos principais conceitos, exemplos práticos, dicas e observações que considero úteis para revisão e fixação.

- ``Aula 01:`` Introdução ao JavaScript, explicação sobre client e servidor, funcionamento da comunicação via navegador e apresentação das três tecnologias fundamentais do front-end: HTML, CSS e JavaScript.
- ``Aula 02:`` Linha do tempo da evolução do JavaScript, desde a ARPANET até o surgimento do Node.js, incluindo a padronização ECMAScript e os principais avanços de cada versão.
- ``Aula 03:`` Aula mais voltada para orientações iniciais, esclarecimento de dúvidas, recomendações e instalação dos softwares necessários (VS Code, Chrome, Node.js, Hyper).
- ``Aula 04:`` Primeiros passos práticos com HTML, CSS e JavaScript. Mostra como estruturar um projeto, criar arquivos, linkar CSS e JS, e traz exemplos de código para cada tecnologia.

> Lembrete: O título de cada aula contém um link direto para o respectivo vídeo no YouTube do Curso em Vídeo.

## 📚 Conteúdo das Aulas

### Módulo A
- [Aula 01 - O que faz o JavaScript?](#aula-01-o-que-faz-o-javascript)
- [Aula 02 - Evolução do JavaScript](#aula-02-evolução-do-javascript)
- [Aula 03 - Primeiros Passos JavaScript](#aula-03-primeiros-passos-javascript)
- [Aula 04 - Nossos Primeiros Scripts](#aula-04-nossos-primeiros-scripts)

---

## [Aula 01: O que faz o JavaScript?](https://youtu.be/Ptbk2af68e8?si=4HmA_1PSD4C_ZxyH)

### Client x Servidor

- ``Client:`` Qualquer dispositivo (computador, celular, tablet) que consome serviços de um servidor.  
  **Exemplo:** Ao assistir um vídeo no YouTube, você está acessando informações dos servidores do YouTube.
- ``Servidor:`` É como um computador dedicado, com sistema operacional, pastas, arquivos e diretórios, responsável por fornecer serviços e responder às solicitações dos clientes.

> Qualquer dispositivo conectado à internet pode ser um client.

### Comunicação Client x Servidor

- A comunicação acontece via navegador (ex: Chrome).
- O navegador envia uma solicitação ao servidor, que responde com o caminho ou recurso solicitado.
- Normalmente, o servidor envia uma cópia de um arquivo HTML como resposta.

### Visualização do Site

- O navegador recebe o HTML e é responsável por renderizar e estilizar a página para o usuário.

![Imagem de Explicação](./image/Explicação.png)

### JavaScript: Origem e Função

- O JavaScript surgiu para atuar no lado do client, mas hoje também pode ser usado no servidor.
- **Importante:** JavaScript ainda é mais utilizado e eficiente no lado do client.

### As 3 Tecnologias do Front-End

- ``HTML5:`` Estrutura e conteúdo (texto, imagens, mídias) — como um jornalista.
- ``CSS3:`` Estilo e aparência — como um designer.
- ``JavaScript:`` Interatividade e lógica — como um programador.
---
## [Aula 02: Evolução do JavaScript](https://youtu.be/rUTKomc2gG8?si=fSit4-B741vkNm3c)

### História da Linguagem

- ``1970:`` Durante a Guerra Fria, a busca por inovação tecnológica levou à criação da agência DARPA, responsável por pesquisar tecnologias para segurança de dados em computadores gigantescos. Surgiu então a **ARPANET**, uma rede que permitia a comunicação e transferência de dados entre centros militares e universidades. Com o tempo, a ARPANET evoluiu e passou a se chamar **Internet**.

- ``1993:`` Um inglês criou o que hoje conhecemos como **HTML** e o protocolo **HTTP**, fundando a CERN, também conhecida como **WWW** (World Wide Web). Para acessar essas novas tecnologias, foi criado o navegador **Mosaic**, que impulsionou o avanço da web.

- ``1994:`` Surge a empresa **Netscape**, que, baseada no Mosaic, desenvolveu o navegador **Netscape Navigator**, muito popular na época.

- ``1995:`` O HTML era limitado, então foi criada uma linguagem chamada **Mocha**, que depois virou **LiveScript** e, finalmente, **JavaScript**. Paralelamente, surgiu o **Java**, que recebeu grande atenção da mídia. A Microsoft, percebendo o potencial do JavaScript, criou sua própria versão chamada **JScript** e lançou o **Internet Explorer**, baseado no código do Mosaic.

- ``1997:`` Para evitar conflitos entre as versões de JavaScript, a Netscape procurou a organização **ECMA** para padronizar a linguagem, surgindo assim o **ECMAScript** — o padrão que define o JavaScript moderno.

- ``2002:`` A disputa entre Netscape e Microsoft terminou. A Netscape perdeu espaço devido ao Internet Explorer vir instalado no Windows e acabou falindo. Ex-funcionários da Netscape fundaram a **Mozilla**, que mais tarde lançou o navegador **Firefox**.

- ``2008:`` O **Google** entra no mercado de navegadores com o lançamento do **Chrome**.

- ``2009:`` O Chrome trouxe o motor **V8**, que tornou o JavaScript muito mais rápido.

- ``2010:`` Aproveitando o motor V8, foi criado o **Node.js**, permitindo que o JavaScript rodasse fora do navegador, inclusive no lado do servidor.

### ECMAScript e Suas Versões

- **Versão 1.0:** 1997
- **Versão 2.0:** 1998
- **Versão 3.0:** 1999
- **Versão 4.0:** Nunca lançada oficialmente devido à complexidade e promessas não cumpridas
- **ES5:** 2009
- **ES6 (ES2015):** 2015 — trouxe grandes novidades para a linguagem
- **ES2016:** 2016
- **ES2017:** 2017
- **ES2018:** 2018
- E assim por diante, com novas versões lançadas anualmente.

### Evolução e Impacto

- O JavaScript evoluiu muito e hoje é base para diversas tecnologias e frameworks, como: **jQuery, Angular, React, Vue.js, Electron.js, Ionic, Cordova**, entre outros.
- Além do desenvolvimento web, o JavaScript também é utilizado em **aplicações desktop, mobile** e até mesmo em **jogos**.

> **Curiosidade:** O JavaScript é uma das linguagens mais populares do mundo, presente em praticamente todos os navegadores e plataformas modernas.

---
## [Aula 03: Primeiros Passos JavaScript](https://youtu.be/FdePtO5JSd0?si=iLHr5d9jnekpHan3)

Nessa aula, não houve anotações técnicas, pois o foco foi uma conversa introdutória, orientações gerais, esclarecimento de dúvidas, recomendações. Também foram discutidas crenças comuns sobre programação e a importância de manter uma mentalidade aberta durante o aprendizado. Além disso, foi realizado o processo de instalação dos principais softwares necessários para acompanhar o curso a partir da próxima aula.

**Softwares utilizados durante as aulas:**

- ``VS Code:`` Editor de código-fonte.
- ``Google Chrome:`` Navegador utilizado para testar e executar aplicações web.
- ``Node.js:`` Para rodar JavaScript fora do navegador.
- ``Hyper:`` Terminal para executar comandos.
- ``Windows:`` Sistema Operacional

---
## [Aula 04: Nossos Primeiros Scripts](https://youtu.be/OmmJBfcMJA8?si=yBGwbwYhM_cAO7c0)

Nesta aula, demos nossos primeiros passos práticos com HTML, CSS e JavaScript.

### Organização do Projeto

- Iniciamos criando e organizando as pastas do projeto.
- Criamos o arquivo principal chamado `ex001.html`.

### Estrutura Básica do HTML

> 💡 **Dica:** Para gerar rapidamente a estrutura básica do HTML no VS Code, basta digitar `!` e pressionar Enter. Isso cria automaticamente o seguinte template:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ex001</title>
</head>
<body>

</body>
</html>
```

Durante a aula, foram explicadas as principais tags do HTML, como `<head>`, `<body>`, `<h1>`, `<h2>`, e como organizar o conteúdo da página. Também aprendemos a **linkar** arquivos CSS e JavaScript externos para adicionar estilo e interatividade.

### Exemplo de HTML com CSS e JS

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ex001</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <h1>Meu primeiro script</h1>
  <h2>Olá, Mundo!</h2>
  <script src="index.js"></script>
</body>
</html>
```

### Exemplo de CSS (index.css)

```css
body {
  background-color: #00aeff;
  color: wheat;
  font: normal 20px/1.5em 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
```

### Exemplo de JavaScript (index.js)

```js
// Alerta no navegador
alert('Olá, mundo!');

// Mensagem no console
console.log('Olá, mundo!');

// Interação simples com o usuário
let user = confirm('Seu nome é Ivan?');
if (user) {
  alert('Olá, Ivan!');
} else {
  alert('Olá, visitante!');
}
```

> 💡 **Dica:** Para visualizar o resultado do seu HTML em tempo real, utilize a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code.

---

## Minhas Considerações Finais

Essas anotações são um resumo do que achei mais importante e interessante no Módulo A do curso de JavaScript do Curso em Vídeo.  
Organizei aqui os conceitos, exemplos e dicas que vão me ajudar a revisar e fixar o conteúdo.

Bora continuar estudando e evoluindo! 🚀

> _Última atualização: 26/05/25 por Ivan Rocha_