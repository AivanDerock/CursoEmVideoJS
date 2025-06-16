function verificar() {
  const dataAtual = new Date().getFullYear()
  const infoAno = Number(document.querySelector('#infoAno').value)
  const infoSexo = document.querySelector('#infoSexo').value
  const imagem = document.querySelector('#imagem')
  const resultado = document.querySelector('#res')
  const botao = document.querySelector('#botao')
  const resetar = document.querySelector('#resetar')

  if (infoAno > dataAtual || infoAno < 1900 || infoAno === 0) {
    resultado.innerHTML = '[ERROR] Ano inválido!'
    imagem.src = ''
    imagem.classList.add('hidden')
    return
  }

  const idade = dataAtual - infoAno

  let sexo = ''
  let imgURL = ''

  switch (infoSexo) {
    case '1':
      sexo = 'homem'
      imgURL =
        'https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg'
      break
    case '2':
      sexo = 'mulher'
      imgURL =
        'https://images.pexels.com/photos/7443030/pexels-photo-7443030.jpeg'
      break
    case '3':
      sexo = 'indefinido'
      imgURL =
        'https://images.pexels.com/photos/2058781/pexels-photo-2058781.jpeg'
      break
    default:
      resultado.innerHTML = '[ERROR] Sexo não selecionado corretamente!'
      imagem.src = ''
      imagem.classList.add('hidden')
      return
  }

  resultado.innerHTML = `Seu sexo é ${sexo} com ${idade} anos.`
  imagem.src = imgURL
  imagem.classList.remove('hidden')

  botao.classList.add('hidden')
  resetar.classList.remove('hidden')
}

function resetar() {
  const botao = document.querySelector('#botao')
  const resetar = document.querySelector('#resetar')
  const resultado = document.querySelector('#res')
  const imagem = document.querySelector('#imagem')
  const ano = document.querySelector('#infoAno')
  const sexo = document.querySelector('#infoSexo')

  resultado.innerHTML = ''
  imagem.src = ''
  imagem.classList.add('hidden')
  ano.value = ''
  sexo.value = '0'

  botao.classList.remove('hidden')
  resetar.classList.add('hidden')
}
