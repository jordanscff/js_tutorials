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
console.log(`percentages 1 ` + percentages )

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

const billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsArray = [];
const totalsArray = [];

for (let i = 0; i < billsArray.length; i++) {
  console.log("Bills array")
  console.log(calcTip(billsArray[i]))
}

let sum = 0;
let calcAverageArr = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum / arr.length;
}
console.log("Bills total")
console.log(calcAverageArr(billsArray))

const jordan = {
  firstName: "Jordan",
  lastName: "Ball",
  birthYear: 1996,
  friends: ['Andrew', 'Chris', 'Connor'],
  job: 'developer',
  hasDriversLicence: true,
  calcAge: function(){
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jordan.job}, and he has ${this.hasDriversLicence ? 'a': 'no'} driver's licence`
  }
};

console.log(`${jordan.firstName} has ${jordan.friends.length} friends and his
best friend is called ${jordan.friends[2]}`)

const myCountry = {
  country:"Scotland",
  capital:"Edinburgh",
  langauge:"English",
  population:55000000,
  neighbours:["England", "Northern Ireland", "Ireland", "Wales"],
  describle: function(){
    console.log(`${this.country} has ${this.population} million ${this.langauge}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`)
  },
  checkIsland: function() {
    this.isIsland = this.neighbours.length === 0 ? true : false
  }
};

myCountry.describle()
myCountry.checkIsland();
console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.langauge}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population += 2;
 console.log(myCountry.population);
 myCountry['population'] -= 2;
 console.log(myCountry.population);

console.log(`${jordan.getSummary()}`)

const markBMI = {
  fullName :'Mark Smith',
  mass:78,
  height:1.69,
  calcBMI: function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

const johnBMI = {
  fullName :'John Smith',
  mass:92,
  height:1.95,
  calcBMI: function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

console.log(markBMI.calcBMI());
console.log(johnBMI.calcBMI());

if(markBMI.bmi > johnBMI.bmi) {
  console.log(`${markBMI.fullName}'s BMI (${markBMI.bmi}) is
  higher than ${johnBMI.fullName}'s BMI (${johnBMI.bmi})`)
} else {
  console.log(`${johnBMI.fullName}'s BMI (${johnBMI.bmi}) is
  higher than ${markBMI.fullName}'s BMI (${markBMI.bmi})`)
}

for (var i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

const percentages2 = []
for (var i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2)

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
//I couldnt work this one out
for (let i = 0; i < listOfNeighbours.length; i++)
for (let y = 0; y < listOfNeighbours[i].length; y++)
console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

const percentages3 = []
let x = 0
while (x < populations.length) {
  percentages3.push(percentageOfWorld1(populations[x]));
  x++;
}
console.log(percentages3)
