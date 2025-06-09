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