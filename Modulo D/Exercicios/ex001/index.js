let vel = 61

if (vel > 60) {
  console.log(`A velocidade do seu carro é ${vel}Km/h`)
  console.log(`MULTADO! Velocidade permitida é de 60Km/h. Seu carro estava a ${vel - 60}Km/h acima do limite.`)
  console.log(`Dirija sempre respeitando os limites de velocidade!`)
  console.log(`Use cinto de segurança!`)
} else {
  console.log(`A velocidade do seu carro é ${vel}Km/h`)
  console.log(`Você está dentro da velocidade permitida. Boa viagem!`)
  console.log(`Dirija sempre usando cinto de segurança!`)
}