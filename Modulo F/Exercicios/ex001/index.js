let num = [5, 8, 4, 9, 3]

console.log(num)
console.log(`Nosso vetor é ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nosso elemento na posição 0 é ${num[0]}`)
num.push(10)
num.sort()
console.log(`Nosso vetor ordenado é ${num}`)
console.log(`Nosso vetor com o elemento 10 adicionado é ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)

console.log(`------------------------------`)

let valores = [ 9, 1, 7, 4, 2 ]

for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(`------------------------------`)

for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(`------------------------------`)

let pos = valores.indexOf(8)
if (pos == -1) {
  console.log(`O valor 8 não foi encontrado no vetor`)
} else {
  console.log(`O valor 8 está na posição ${pos}`)
}

console.log(`O valor 8 está na posição ${pos}`)

let fal = valores.indexOf(4)
console.log(`O valor 4 está na posição ${fal}`)


