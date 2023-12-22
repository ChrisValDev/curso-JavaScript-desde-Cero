/*Ejercicio: Pila de libros

Crea un programa que simule una pila usando los métodos push y pop. La pila debe 
contener una colección de libros. Los usuarios deben poder ejecutar las siguientes acciones:

1. Agregar un libro encima de la pila.
2. Quitar un libro de encima de la pila.
3. Mostrar la pila actual de libros.

Implementa un ciclo que permita a los usuarios interactuar con la pila hasta que decidan 
salir*/

const collectionBooks = ["El Alquimista", "Harry Potter", "Los vengadores"];

const mostrar = function showCollectionBooks() {
    return collectionBooks;
};

const agregar = function addBook(book) {
    numeroLibros = collectionBooks.push(book)
    console.log(`El libro que agregaste fue ${book} y ahora tu coleccion contiene ${numeroLibros} libros`);
};

const eliminar = function removeBook() {
    if(collectionBooks.length === 0) {
        console.log(`La coleccion de libros esta vacia, no hay nada que eliminar`);
    }
    libroEliminado = collectionBooks.pop()
    console.log(`El libro que eliminaste fue "${libroEliminado}"`);
};

console.log(mostrar());
eliminar();
console.log(mostrar());
agregar("Las Mil y Una Noches");
console.log(mostrar());