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