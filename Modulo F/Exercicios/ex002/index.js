function parimpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

let numero = parimpar(4)

console.log(numero);
console.log(parimpar(5));

console.log("--------------------------------------")

function soma(a=0, b=0) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));

console.log("--------------------------------------")

let v = function(x) {
  return x * 2;
}

console.log(v(5));

console.log("--------------------------------------")

function fatorial(f) {
  let fat = 1
  for (let c = f; c > 1; c--) {
    fat *= c;
  }
  return fat;
}

console.log(fatorial(5));

console.log("--------------------------------------")

function fatorial2(f2) {
  if (f2 == 1) {
    return 1;
  } else {
    return f2 * fatorial2(f2 - 1);
  }
}

console.log(fatorial2(5));