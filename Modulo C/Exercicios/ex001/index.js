let p1 = document.getElementsByTagName('p')[1]
let d = document.getElementById('msg')
let v = document.getElementsByName('vasco')[0]
let f = document.getElementsByClassName('fla')[0]
let i = document.querySelector('p#iva')
let c = document.querySelector('p.car')
let corpo = document.body
corpo.style.backgroundColor = 'lightblue'
p1.style.color = 'red'
p1.style.backgroundColor = 'black'
document.write(`Esta escrito assim: ${p1.innerText}`)

document.write(p1.innerText)
document.write(p1.innerHTML)

d.style.color = 'blue'
d.style.background = 'red'

v.style.color = 'green'
v.style.background = 'yellow'

f.style.color = 'purple'
f.style.background = 'orange'

i.style.color = 'pink'
i.style.background = 'gray'

c.style.color = 'black'
c.style.background = 'white'