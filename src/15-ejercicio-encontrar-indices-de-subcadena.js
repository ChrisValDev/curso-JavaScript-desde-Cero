/*Encontrar Índices de Subcadena

Dado un array de cadenas de texto y una cadena de texto objetivo, escribe una función para 
determinar si la cadena objetivo está presente en el array. Si está presente, devuelve el índice de la 
primera ocurrencia y el índice de la última ocurrencia; de lo contrario, devuelve -1.*/


function findSubstring(array, cadena) {
    let ocurrencia = [];
    const existe = array.includes(cadena);
    if(existe) {
        ocurrencia.push(array.indexOf(cadena));
        ocurrencia.push(array.lastIndexOf(cadena));
    } else {
        ocurrencia.push(-1);
    }
    console.log(ocurrencia);
}

const frutas = ['apple', 'banana', 'orange', 'kiwi', 'banana', 'grape'];

const fruta = 'banana';

findSubstring(frutas, fruta);