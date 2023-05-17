console.log((elderAge(8,5,1,100)) == 5 )
console.log((elderAge(8,8,0,100007)) == 224 )
console.log((elderAge(25,31,0,100007)) == 11925)
console.log((elderAge(5,45,3,1000007)) == 4323)
console.log((elderAge(16,16, 5,1000007)) == 880)
console.log(elderAge(28827050410, 35165045587, 7109602, 13719506))
// console.log(elderAge(2 882 7050 410, 50, 7109602, 13719506))


function elderAge(m, n, l, t) {
  // Deixa o comprimento maior que a altura
  if (n > m) [m, n] = [m, m]
  // Verifica se algum dos valores é  0
  if (m == 0 || n == 0) return 0;
  // Verifica se existe um quadrado perfeito, se sim, executa o código resumido
  const delta = maxBin(m)
  console.log("ATUMALACA")
  console.log(n - delta)
  let squares = []
  squares.push(squareBuilder(delta, l, t))
  return squares
  


}

function maxBin(value) {
 value = Math.log2(value)
 value = Math.floor(value)
 return Math.pow(2, value)
}

/*
Utilizando a fórmula de gauss

S = (a + b) * (b - a + 1) / 2

Onde:
S é a soma dos termos da sequência
a é o primeiro termo da sequência
b é o último termo da sequência

aqui temos que a soma deve ser de 1 até m - l;
logo

a = 1
b = m - l

S = (m - l + 1) * (m - l) / 2

console.log(elderAge(8,5,1,100), 5)
console.log(elderAge(8,8,0,100007), 224)

*/
function squareBuilder(m, l = 0, t = 0) {
  let value = Math.floor((m - l - 1) * (m - l)) / 2
  value *= m
  if (t) {value = value % t}
  return value
}

