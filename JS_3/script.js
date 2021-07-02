// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function(arr) {
    let printStatement = '';
    for (let i = 0; i < arr.length; i++) {
        printStatement += `...${arr[i]}°C in ${i+1} days`;
    }
    console.log(printStatement)
}

printForecast([17, 21, 23])