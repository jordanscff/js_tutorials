'use strict';

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry('Scotland', 5500000, 'Edinburgh'));
console.log(describeCountry('England', 65000000, 'London'));
console.log(describeCountry('Wales', 3500000, 'Cardiff'));

let worldPopulation = 7900000000;

function percentageOfWorld1 (population) {
  return population / worldPopulation * 100;
}
console.log(percentageOfWorld1(5500000));

let percentageOfWorld2 = function (population) {
  return population / worldPopulation * 100;
}
console.log(percentageOfWorld2(5500000));

const percentageOfWorld3 = population => {
  return population / worldPopulation * 100
}

console.log(percentageOfWorld3(5500000));

function describePopulation (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)}% of the world.`
}

console.log(describePopulation('scotland', 5500000))

const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
  return (scoreOne + scoreTwo + scoreThree) / 3;
};

const dolphinAverage = calcAverage(44, 23, 71);
const koalasAverage = calcAverage(65, 54, 49);

const dolphinAverage2 = calcAverage(85, 54, 41);
const koalasAverage2 = calcAverage(23, 34, 27);


function checkWinner (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} > ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins) {
    console.log(`Koalas win (${avgKoalas} > ${avgDolphins})`);
  } else {
    console.log(`It's a draw.`)
  }
}

checkWinner(dolphinAverage, koalasAverage);
checkWinner(dolphinAverage2, koalasAverage2);

const populations = [56000000,5500000,3100000,1900000];
console.log(populations);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages)
