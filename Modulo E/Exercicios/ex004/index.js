function calcular() {
  let num = Number(document.querySelector('input#textn').value)
  let table = document.querySelector('select#seltab')

  if (isNaN(num)) {
    alert('Por favor, digite um número!')
  } else {
    table.innerHTML = ''
    for (let c = 1; c <= 10; c++) {
      let item = document.createElement('option')
      item.text = `${num} x ${c} = ${num * c}`
      table.appendChild(item)
    }
  }
}
