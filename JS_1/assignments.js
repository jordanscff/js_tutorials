const country = 'Scotland';
const continent = 'Europe';
let population = 6500000;
const isIsland = true;
const language = 'English';

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

let halfPopulation = (population / 2);
console.log(halfPopulation);

population += 1;
console.log(population);

let finlandPopulation = 6000000;
console.log(population > finlandPopulation);

let averagePopulation = 33000000;
console.log(averagePopulation > population);

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';

let markWeight = 95;
let johnWeight = 85;
let markHeight = 1.88;
let johnHeight = 1.76;

let markBMI = markWeight / (markHeight*markHeight)
let johnBMI = johnWeight / (johnHeight*johnHeight)

let markHigherBMI = (markBMI>johnBMI)

console.log(markHigherBMI)
