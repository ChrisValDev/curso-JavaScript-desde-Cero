const arrayDeObjetos = [
    {
        nombre: 'Christopher',
        edad: 28,
        comidaFavorita: 'Pechugas',
    },
    {
        nombre: 'Francisco',
        edad: 32,
        comidaFavorita: 'Pizza',
    },
    {
        nombre: 'David',
        edad: 24,
        comidaFavorita: 'Hamburguesa',
    },
    {
        nombre: 'Soledad',
        edad: 50,
        comidaFavorita: 'Sushi',
    },
];


for(let i = 0; i < arrayDeObjetos.length; i++) {
    console.log('==========================');
    console.log('Nombre: ' + arrayDeObjetos[i].nombre);
    console.log('Edad: ' + arrayDeObjetos[i].edad);
    console.log('Comida: ' + arrayDeObjetos[i].comidaFavorita);
};


const objetoConArray = {
    nombre: "Objeto con Array",
    arr: ['abeja', 'banana', 'camion', 'dado'],
};

const arrayAparte = objetoConArray.arr;

for(let i = 0; i < arrayAparte.length; i++) {
    console.log(arrayAparte[i] + ' jojojo2');
}

arrayAparte.forEach((elemento) => console.log(elemento + " jojojo"));

// Manipulacion de objetos

const persona = {
    nombre: 'Soledad',
    edad: 50,
    comidaFavorita: 'Sushi',
}

console.log(Object.entries(persona));
console.log(Object.keys(persona));
console.log(Object.getOwnPropertyNames(persona));
console.log(Object.values(persona));