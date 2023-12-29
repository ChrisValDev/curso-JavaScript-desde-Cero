/*Ganador del torneo algorítmico

Está teniendo lugar un torneo algorítmico en el que equipos de programadores compiten entre sí para resolver problemas algorítmicos lo más rápido posible. Los equipos compiten en un formato de todos contra todos, donde cada equipo se enfrenta a todos los demás. Solo dos equipos compiten entre sí en cada enfrentamiento, y en cada competición, un equipo es designado como equipo local, mientras que el otro es el equipo visitante.

Siempre hay un claro ganador y perdedor en cada competición, sin empates. Los equipos obtienen 3 puntos 
por una victoria y 0 puntos por una derrota. El ganador general del torneo es el equipo con la mayor cantidad de puntos.

Tu tarea es escribir una función que determine al ganador del torneo en función de los resultados de las 
competiciones. 
La entrada consta de dos arrays: competitions y results. El array competitions contiene 
pares de equipos representados como [equipoLocal, equipoVisitante], donde cada equipo es una cadena de 
hasta 30 caracteres. 
El array results indica el ganador de cada competición correspondiente en el array 
competitions. Específicamente, results[i] denota el ganador de competitions[i], donde un 1 en el array results significa que el equipo local ganó y un 0 significa que el equipo visitante ganó.

Se garantiza que exactamente un equipo ganará el torneo, y cada equipo competirá contra todos los demás 
equipos exactamente una vez. Además, se garantiza que el torneo siempre tendrá al menos dos equipos.*/


function ganadorDelTorneo(competiciones, resultados) {
    const marcador = {};
    let ganador = '';

    for(let i = 0; i < competiciones.length; i++) {
        // const local = competiciones[i][0];
        // const visitante = competiciones[i][1]; Estas dos lineas se pueden reducir a la siguiente
        const [local, visitante] = competiciones[i];
        const equipoGanador = resultados[i] === 0 ? visitante : local;
        marcador[equipoGanador] = (marcador[equipoGanador] || 0) + 3;
        
        console.log('ganador por ronda', equipoGanador);
        if(!ganador || marcador[equipoGanador] > marcador[ganador]) {
            ganador = equipoGanador;
        }
    }
    console.log('ganador real', ganador);
    console.log('marcador', marcador);
    return ganador;
}

const competiciones = [
    ['JavaScript', 'C#'],
    ['C#', 'Python'],
    ['Python', 'JavaScript'],
];

const resultados = [0, 0, 1];

console.log(ganadorDelTorneo(competiciones, resultados));