function contar() {
  let inicio = document.querySelector('input#texti').value
  let fim = document.querySelector('input#textf').value
  let passos = document.querySelector('input#textp').value
  let res = document.querySelector('div#res')

  if (inicio.length == 0 || fim.length == 0 || passos.length == 0) {
    alert('Preencha todos os campos!')
  } else {
    res.innerHTML = 'Contando: <br>'
    let i = Number(inicio)
    let f = Number(fim)
    let p = Number(passos)

    if (p <= 0) {
      p = 1
      alert('Passo inválido! Considerando passo 1')
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}
