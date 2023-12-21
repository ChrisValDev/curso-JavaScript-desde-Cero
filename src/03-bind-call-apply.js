const propietario = 'Jessica';
const direccion = "Calle 124"

function dogGreeting(owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
};

const house = {
    dogName: 'Aqua',
};
// Contextos de ejecucion

// call(objeto, parametro1, parametro2)
dogGreeting.call(house, propietario, direccion);

// apply(objeto)
const parameters = [propietario, direccion];
dogGreeting.apply(house, parameters);

// bind()
const bindMethod = dogGreeting.bind(house, propietario, direccion);
bindMethod();