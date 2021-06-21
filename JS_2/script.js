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
