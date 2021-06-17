'use strict';

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry('Scotland', 5500000, 'Edinburgh'));
console.log(describeCountry('England', 65000000, 'London'));
console.log(describeCountry('Wales', 3500000, 'Cardiff'));
