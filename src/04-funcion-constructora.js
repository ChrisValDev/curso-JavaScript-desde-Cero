// Esta es una funcion constructora, hereda propiedades a los objetos en su prototipo.
function Rocket(name, message) {
    this.name = name;
    this.launchMessage = message;
};

const messagePersonalized = () => `Cohete despegando exitosamente.`;
const falcon9Rocket = new Rocket("Falcon 9", messagePersonalized);
const falconHeavyRocket = new Rocket("Falcon Heavy");

console.log(falcon9Rocket.name);
console.log(falcon9Rocket.launchMessage());

// Arrow function con retorno implicito de un objeto () => ({})
// No es una funcion constructora por que no hereda propiedades, solo crea objetos individuales.
const RocketWithArrowFunction = (name, message) => ({
    name: name,
    launchMessage: message
})

const messagePersonalizedArrow = () => `Cohete Arrow despegando exitosamente.`;
const falcon9ArrowRocket = RocketWithArrowFunction("Falcon Arrow", messagePersonalizedArrow);

console.log(falcon9ArrowRocket);
console.log(falcon9ArrowRocket.name);
console.log(falcon9ArrowRocket.launchMessage());