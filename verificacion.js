function personasNuevas (ronda, amigos) {
    if (ronda === 0) {
        return 1;
    }
    return amigos * personasNuevas(ronda - 1, amigos);
}

function personasTotales (ronda, amigos) {
    if (ronda === 0) {
        return 1;
    }
    return personasTotales(ronda - 1, amigos) + personasNuevas(ronda, amigos);
}

console.log("seccion 2 modulo 1: se le comparten a 3 personas");
for (let ronda = 0; ronda <= 6; ronda++) {
    const nuevas= personasNuevas(ronda, 3);
    const totales= personasTotales(ronda, 3);
    const formula = (3 **(ronda +1) - 1) / 2;
    console.log(`ronda ${ronda} | nuevas ${nuevas} | totales ${totales} | formula${formula}`)
}

console.log("");
console.log("seccion 3 modulo 2: se le comparten a 10 personas");
const probabilidades = [0.15, 0.10, 0.08];

for (const probabilidad of probabilidades) {
  const factorR = 10 * probabilidad;
  if (factorR > 1) {
    console.log(`probabilidad = ${probabilidad} | R = ${factorR} | viral`);
  } else if (factorR === 1) {
    console.log(`probabilidad = ${probabilidad} | R = ${factorR} | crítico`);
  } else {
    const totalFinal = Math.round(1 / (1 - factorR));
    console.log(`probabilidad = ${probabilidad} | R = ${factorR} | se apaga, total = ${totalFinal}`);
  }
}

function personasFibonacci(ronda) {
  let rondaAnterior = 1;
  let rondaActual = 1;
  for (let i = 2; i <= ronda; i++) {
    const rondaSiguiente = rondaActual + rondaAnterior;
    rondaAnterior = rondaActual;
    rondaActual = rondaSiguiente;
  }
  return rondaActual;
}
 
const raiz5 = Math.sqrt(5);
const phi = (1 + raiz5) / 2;
const psi = (1 - raiz5) / 2;
 
function formulaBinet(ronda) {
  const resultado = (phi ** (ronda + 1) - psi ** (ronda + 1)) / raiz5;
  return Math.round(resultado);
}
 
console.log("");
console.log("SECCIÓN 4 - MODELO 3: Fibonacci");
const rondasDePrueba = [5, 10, 20];
for (const ronda of rondasDePrueba) {
  const conCiclo = personasFibonacci(ronda);
  const conFormula = formulaBinet(ronda);
  console.log(`Ronda ${ronda} | con el ciclo: ${conCiclo} | con Binet: ${conFormula}`);
}
const crecimiento = personasFibonacci(30) / personasFibonacci(29);
console.log(`Cada ronda crece: ${crecimiento} veces`);



console.log("");
console.log("SECCIÓN 5 - COMPARACIÓN: rondas para llegar a 1 000 000 de personas");

const rondasLineal = Math.ceil((1000000 - 1) / 50);
console.log(`Lineal: ${rondasLineal}`);
 
let rondasFibonacci = 0;
while (personasFibonacci(rondasFibonacci) < 1000000) {
  rondasFibonacci++;
}
console.log(`Fibonacci: ${rondasFibonacci}`);
 
let rondasArbol = 0;
while (personasTotales(rondasArbol, 3) < 1000000) {
  rondasArbol++;
}
console.log(`Árbol: ${rondasArbol}`);

const factorR = 1.5;
const poblacion = 100000;
let nuevas = 1;
let alcanzadas = 1;
for (let ronda = 1; ronda <= 40; ronda++) {
  const faltaPorVer = 1 - alcanzadas / poblacion;
  nuevas = factorR * nuevas * faltaPorVer;
  alcanzadas = alcanzadas + nuevas;
}
console.log(`Limitado: se queda en ${Math.round(alcanzadas)} personas`);


function factorial(numero) {
  if (numero <= 1) {
    return 1;
  }
  return numero * factorial(numero - 1);
}
 

function permutacion(total, elegidos) {
  return factorial(total) / factorial(total - elegidos);
}
 

function combinacion(total, elegidos) {
  return permutacion(total, elegidos) / factorial(elegidos);
}
 
console.log("");
console.log("SECCIÓN 6 - TÉCNICAS DE CONTEO");
console.log(`Regla de la suma: ${12 + 5 + 3}`);
console.log(`Regla del producto: ${20 * 24}`);
console.log(`Permutaciones P(8, 3): ${permutacion(8, 3)}`);
console.log(`Combinaciones C(20, 3): ${combinacion(20, 3)}`);
console.log(`Inclusión-exclusión: ${5000 + 4000 + 3000 - 1200 - 800 - 700 + 300}`);
console.log(`Palomar: ${Math.ceil(1093 / 33)}`);

