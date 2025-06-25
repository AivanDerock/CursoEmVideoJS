const num = document.querySelector("#infoNumber");
const lista = document.querySelector("#listaNumber");
const res = document.querySelector("#res");

const valores = [];

const isNumero = n => Number(n) >= 1 && Number(n) <= 100;
const inLista = (n, l) => l.includes(Number(n));

function adicionar() {
  const numero = Number(num.value);

  if (isNumero(numero) && !inLista(numero, valores)) {
    valores.push(numero);

    const item = document.createElement("option");
    item.text = `Valor ${numero} adicionado.`;
    lista.appendChild(item);

    res.innerHTML = "";
  } else {
    alert("Número inválido ou já adicionado.");
  }

  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length === 0) {
    alert("Adicione valores antes de finalizar!");
    return;
  }

  const total = valores.length;
  const maior = Math.max(...valores);
  const menor = Math.min(...valores);
  const soma = valores.reduce((acc, val) => acc + val, 0);
  const media = (soma / total).toFixed(2);

  res.innerHTML = `
    <p>🔢 Ao todo, temos <strong>${total}</strong> números cadastrados.</p>
    <p>📈 O maior valor informado foi <strong>${maior}</strong>.</p>
    <p>📉 O menor valor informado foi <strong>${menor}</strong>.</p>
    <p>🧮 A soma dos valores é <strong>${soma}</strong>.</p>
    <p>📊 A média dos valores é <strong>${media}</strong>.</p>
    <p>📋 Valores: <em>${valores.join(", ")}</em>.</p>
  `;
}
