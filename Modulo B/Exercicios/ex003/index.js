var name = prompt("Qual é seu nome?");
document.write(`Olá, ${name} seja bem-vindo(a)!<br>`);
document.write(`Seu nome tem ${name.length} caracteres<br>`);
document.write(`Seu nome em maiusculas ${name.toUpperCase()} caracteres<br>`);
document.write(`Seu nome em minusculas ${name.toLowerCase()} caracteres<br>`);

// A diferença é que aqui usamos document.write para exibir a mensagem na página