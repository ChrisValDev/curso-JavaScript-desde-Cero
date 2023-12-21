// Enlace implicito

const house = {
    dogName: "Fido",
    dogGreeting: function() {
        console.log(`Hi, I'm ${this.dogName}`);
    }
}

house.dogGreeting();

// Enlace explicito

function dogGreeting() {
    console.log(`Hi, I'm ${this.dogName}`);
}

const house1 = {
    dogName: "Andrus",
    dogAge: 3
}

dogGreeting.call(house1);

const house2 = {
    dogName: "Andrus",
    dogAge: 3
}

function newDogGreeting(owner, address) {
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const propietario = "Lucas";
const direccion = "Churubusc 232";

newDogGreeting.call(house2, propietario, direccion);