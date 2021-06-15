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

let description = `Portugal is in Europe, and its 11 million people speak portuguese`;

let markWeight = 95;
let johnWeight = 85;
let markHeight = 1.88;
let johnHeight = 1.76;

let markBMI = markWeight / (markHeight*markHeight)
let johnBMI = johnWeight / (johnHeight*johnHeight)

let markHigherBMI = (markBMI>johnBMI)

let outputStatement;
if (markHigherBMI) {
  outputStatement = `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`
} else {
  outputStatement = `Mark's BMI (${markBMI}) is lower than John's (${johnBMI})!`
}

console.log(outputStatement)

let populationInfo;
if (population > 33000000) {
  populationInfo = `Portugal's population is above average`;
} else {
  populationInfo = `Portugal's population is 22 million below average`;
}

console.log(populationInfo);

console.log('19' - '13' + '17')

/**
let numNeighbours = prompt('How many neighbour countries does your country have?');
if (Number(numNeighbours) === 1) {
  console.log(`Only 1 border`)
} else if (numNeighbours > 1) {
  console.log(`More than 1 border`)
} else {
  console.log(`No borders`)
}
**/

if (language === 'English' && population > 50000000 && !isIsland){
  console.log(`You should live in Scotland`)
} else {
  console.log(`Don't live in Scotland`)
}

const dolphinScore1 = 96;
const dolphinScore2 = 108;
const dolphinScore3 = 89;
const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;

const dolphinAverageScore = ((dolphinScore1 + dolphinScore2 + dolphinScore3) / 3);
const koalasAverageScore = ((koalasScore1 + koalasScore2 + koalasScore3) / 3);

if (dolphinAverageScore > koalasAverageScore && dolphinAverageScore > 100){
  console.log(`Dolphins win!`);
} else if (dolphinAverageScore === koalasAverageScore && koalasAverageScore > 100 && koalasAverageScore > 100) {
  console.log(`It's a tie!`);
} else if (koalasAverageScore > dolphinAverageScore && koalasAverageScore > 100) {
  console.log(`Koalas win!`);
} else {
  console.log(`No one wins.`);
};
