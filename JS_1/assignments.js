const country = 'Scotland';
const continent = 'Europe';
let population = 65000000;
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

const day = 'monday';
if (day === 'monday') {
  console.log('Monday');
} else if (day === 'tuesday') {
  console.log('tuesday');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('wednesday or thursday');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('sat or sun')
} else {
  console.log('Invalid')
}

switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'English':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

population > 33000000 ? console.log(`UK's population is above average`) : console.log(`UK's population is below average`);

console.log(
`${country}'s population is ${population > 33 ? 'above' :
'below'} average`,
);

const bill = 275;
let tip;
switch (bill) {
  case bill >= 50 && bill <= 300:
    tip = bill * 0.15;
    break;
  default:
    tip = bill * 0.2;
    break;
}
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
  ${bill + tip}`)

const tip_2 = bill >= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip_2}, and the total value
  ${bill + tip_2}`)
