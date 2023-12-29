let array1D = [1, 2, 3]; // unidimensional
let array2D = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];  // bidimensional

let bidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

bidimensional[1][2] = 10
console.log('original', bidimensional);

// Operations

for(let i = 0; i < bidimensional.length; i++) {
    for(let j = 0; j < bidimensional[i].length; j++) {
        console.log(bidimensional[i][j]);
    }
};

function findElement(arrayBi, element) {
    for(let i = 0; i < arrayBi.length; i++) {
        for(let j = 0; j < arrayBi[i].length; j++) {
            if(arrayBi[i][j] === element) {
                return true
            }
        }
    }
    return false;
};

console.log(findElement(bidimensional, 6));

function duplicateArray(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            newArray[i] = [...array[i]];
        }
    }
    return newArray;
};

console.log('duplicado', duplicateArray(bidimensional));