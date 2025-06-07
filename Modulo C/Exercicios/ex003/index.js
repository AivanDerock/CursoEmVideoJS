function somar() {
  let n1 = document.getElementById("textn1")
  let n2 = document.getElementById("textn2")
  let res = document.getElementById("res")

  let num1 = Number(n1.value)
  let num2 = Number(n2.value)

  res.innerHTML = `A soma de ${num1} e ${num2} é igual a ${num1 + num2}.`
}