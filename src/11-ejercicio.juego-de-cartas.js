/*Ejercicio: Implementación de un Juego de Cartas

Supongamos que estás construyendo un juego de cartas simple. Tienes un array que representa un 
mazo de cartas y deseas realizar las siguientes operaciones:

1. Barajar el Mazo: Reorganizar aleatoriamente el orden de las cartas en el mazo.
2. Repartir Cartas: Repartir una cantidad específica de cartas a los jugadores desde la parte superior del mazo. Este ejercicio implica el uso del método splice() para barajar el mazo y 
repartir las cartas*/

const mazoDeCartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function barajearCartas() {
    return mazoDeCartas.sort(() => Math.random() - 0.5);
}


function repartirCartas(numCartas) {
    const repartir = mazoDeCartas.splice(0, numCartas);
    return repartir
}

barajearCartas();
console.log(mazoDeCartas);
const jugador1 = repartirCartas(4)
const jugador2 = repartirCartas(4)


console.log(jugador1);
console.log(jugador2);

console.log(mazoDeCartas);