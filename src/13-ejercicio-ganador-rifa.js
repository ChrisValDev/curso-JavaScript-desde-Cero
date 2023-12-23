/*Programa de Verificación de Ganadores de Rifa

En este programa, puedes verificar si una persona está entre los ganadores de una rifa. Simplemente 
ingresa el nombre o número de boleto, y el programa verificará y mostrará la información del 
ganador*/


function searchWinnerName(nombre) {
    let ganador = participantesGanadores.find((participante) => participante.name === nombre);

    if(ganador != undefined) {
        console.log(`Felicidades, ganaste el premio ${nombre}`);
    } else {
        console.log(`Lo siento, no esta tu nombre en la lista de ganadores`);
    }
};

function searchWinnerNumberTicket(numeroDeBoleto) {
    let ganador = participantesGanadores.find((participante) => participante.ticketNumber === numeroDeBoleto);
    if(ganador != undefined) {
        console.log(`Felicidades, ganaste el premio con el numero de boleto ${numeroDeBoleto}`);
    } else {
        console.log(`Lo siento, no esta tu numero en la lista de ganadores`);
    }
};


const participantesGanadores = [
    {id: 334, name: "Francisco", ticketNumber: 121},
    {id: 268, name: "Jazmin", ticketNumber: 458},
    {id: 24, name: "Paola", ticketNumber: 384},
    {id: 167, name: "Gerardo", ticketNumber: 293}
];

searchWinnerName("Francisco");
searchWinnerNumberTicket(384);