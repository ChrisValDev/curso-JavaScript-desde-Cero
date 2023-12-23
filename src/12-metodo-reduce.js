// reduce() case 1

const numeros = [1, 2, 3, 4, 5, 6, 7];

const sumaNumeros = numeros.reduce((acumulador, numero) => {
    console.log(`acumulador: ${acumulador} + numero ${numero}`);
    return acumulador + numero;
}, 0);

console.log(sumaNumeros);

// reduce() case 2

const palabras = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye'];

const numeroPalabras = palabras.reduce((acumulador, palabra) => {
    if(acumulador[palabra]) {
        acumulador[palabra]++;
    } else {
        acumulador[palabra] = 1;
    }
    return acumulador;
}, {});

console.log(numeroPalabras);