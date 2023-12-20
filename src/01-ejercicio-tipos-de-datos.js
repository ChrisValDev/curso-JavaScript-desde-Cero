// Social Media Profile

// 1. User informaation
const userName = "ElRinconDev";
const fullName = "Chris Dev";
const age = 23;
const isStudent = true;

// 2. Address
const address = {
    street: "Pulpos 45",
    city: "China",
    state: "Bejing",
    zipCode: 56070
};

// 3. Hobbies
const hobbies = ['Coding', 'Reading', 'Gaming'];

// 4. Generating personalized bio

const personalizedBio = `Hi, my name is ${fullName}.
I'm ${age} years old.
I live in the country of ${address.city}.
I love to make ${hobbies.join(', ')}.
Follow me for more information.`;

console.log(personalizedBio);