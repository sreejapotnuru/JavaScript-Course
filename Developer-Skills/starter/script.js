// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
Developer Skills & Editor Setup
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK
*/
const arr = [17, 21, 23];
function printForecast(arr) {
  let str = "";
  for (let r = 0; r < arr.length; r++) {
    str = str + `${arr[r]}ºC in ${r + 1} days ...`;
  }
  console.log("..." + str);
}
printForecast(arr);
