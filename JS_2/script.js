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

const neighbours = ['Spain', 'Portugal', 'Germany'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop('Utopia');
console.log(neighbours);
if (!neighbours.includes('Germany')) {
  console.log('Probaby not a central European country :D');
}
const spainIndex = neighbours.indexOf('Spain')
neighbours[spainIndex] = 'Espana'
console.log(neighbours);

let tip;

function calcTip (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44]
const tips = []
tips.push(calcTip(bills[0]))
tips.push(calcTip(bills[1]))
tips.push(calcTip(bills[2]))

const total = []
total.push(bills[0] + tips[0])
total.push(bills[1] + tips[1])
total.push(bills[2] + tips[2])

console.log(tips);
console.log(total);

const jordan = {
  firstName: "Jordan",
  lastName: "Ball",
  friends: ['Andrew', 'Chris', 'Connor'],
  job: 'developer'
};

console.log(`${jordan.firstName} has ${jordan.friends.length} friends and his
best friend is called ${jordan.friends[2]}`)

const myCountry = {
  country:"Scotland",
  capital:"Edinburgh",
  langauge:"English",
  population:55000000,
  neighbours:["England", "Northern Ireland", "Ireland", "Wales"]
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.langauge}-speaking people, ${myCountry.neighbours.length} neightbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population += 2;
 console.log(myCountry.population);
 myCountry['population'] -= 2;
 console.log(myCountry.population);
