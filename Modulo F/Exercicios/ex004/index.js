let amigo = {
  nome: 'José', 
  idade: 25, 
  peso: 70.5, 
  sexo: "M", 
  engordar(p){
    console.log(`engordou`)
    this.peso += p;
  }
} 

amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso}kg`);