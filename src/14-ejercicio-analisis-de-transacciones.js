/* Análisis de transacciones
Imagina que tienes una lista de transacciones financieras y deseas realizar varias operaciones de 
procesamiento de datos. Usa las siguientes instrucciones como guía para completar el ejercicio:

1. Calcular el Saldo Total: - Utiliza el método reduce para calcular y mostrar el saldo total de todas las 
transacciones.
2. Encontrar la Transacción más Grande (Ingreso o Egreso): - Emplea el método reduce para encontrar 
la transacción con el mayor monto (ya sea ingreso o egreso) y muéstrala en la consola.
3. Filtrar Transacciones de Compra: - Usa el método filter para obtener y mostrar en la consola solo las 
transacciones de compra (con montos negativos).
4. Encontrar una Transacción por Descripción: - Utiliza el método find para buscar y mostrar en la 
consola una transacción específica por su descripción.
5. Encontrar el Índice de una Transacción por Monto: - Emplea el método findIndex para encontrar y 
mostrar en la consola el índice de una transacción específica por su monto.
6. Actualizar Descripciones de Transacciones: - Utiliza el método forEach para actualizar las 
descripciones de las transacciones. Añade el prefijo "Gasto: " a las transacciones con montos 
negativos y "Ingreso: " a las transacciones con montos positivos. Muestra las transacciones 
actualizadas en la consola.
Recuerda adaptar y combinar estas operaciones según sea necesario. */

const transactions = [
    { id: 1, description: 'Grocery Shopping', amount: -50 },
    { id: 2, description: 'Salary Deposit', amount: 2000 },
    { id: 3, description: 'Utility Bill Payment', amount: -100 },
    { id: 4, description: 'Online Purchase', amount: -30 },
];

// 1. Calcular el saldo total.

const totalBalance = transactions.reduce((acumulador, transaction) => acumulador + transaction.amount, 0);
console.log('Total Balance', totalBalance);

// 2. Encontrar la Transacción más Grande (Ingreso o Egreso).

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0]);

console.log('Largest Transaction', largestTransaction);

// 3. Filtrar Transacciones de Compra.

const filterPurchaseTransactions = transactions.filter((transaction) => transaction.amount < 0);
console.log('Filter Purchase Transactions', filterPurchaseTransactions);

// 4. Encontrar una Transacción por Descripción.

const specificTransaction = transactions.find((transaction) => transaction.description === 'Online Purchase');
console.log('specific Transaction', specificTransaction);

// 5. Encontrar el Índice de una Transacción por Monto.

const indexTransaction = transactions.findIndex((transaction) => transaction.amount === -30);
console.log('indexTransaction : -30', indexTransaction);

// 6. Actualizar Descripciones de Transacciones.

transactions.forEach((transaction) => {
    if(transaction.amount < 0) {
        transaction.description = `Expense: ${transaction.description}`    
    } else {
        transaction.description = `Income: ${transaction.description}`
    }
});

console.log('Updated Transactions', transactions);