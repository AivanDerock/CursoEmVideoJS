let a = document.getElementById("area")
a.addEventListener("click", clicar)
a.addEventListener("mouseenter", entrar)
a.addEventListener("mouseleave", sair)

function clicar() {
  a.innerText = "Clicou!"
  a.style.background = "lightblue"
  a.style.color = "black"
}

function entrar() {
  a.innerText = "Entrou!"
  a.style.background = "lightgreen"
  a.style.color = "black"
}

function sair() {
  a.innerText = "Saiu!"
  a.style.background = "lightcoral"
  a.style.color = "black"
}