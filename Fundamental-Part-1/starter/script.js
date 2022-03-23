/*
let js = 'amazing';
console.log(40 + 5 - 23);

console.log('Jonas'); //Value
console.log(23); //Value - smallest piece of information in js

let firstName = "Bob"; //Variable Declaration
console.log(firstName);
*/
// ASSIGNMENT-1
/*
let country = 'India';
let continent = 'Asia';
let population = 80000000;
//logging their values in console
console.log(country);
console.log(continent);
console.log(population);
*/
//CODING CHALLENGE
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.*/

/*
const johnMass = 92;
const johnHeight = 1.95;
const markMass = 78;
const markHeight = 1.69;
const bmiOfJohn = johnMass / (johnHeight * johnHeight);
console.log(bmiOfJohn);
const bmiOfMark = markMass / (markHeight * markHeight);
console.log(bmiOfMark);
const markHigherBMI = bmiOfMark > bmiOfJohn;
console.log(markHigherBMI);
*/


//CODING CHALLENGE -2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI.The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.Example: "Mark's
BMI(28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement � */

/*
const johnMass = 92;
const johnHeight = 1.95;
const markMass = 78;
const markHeight = 1.69;
const bmiOfJohn = johnMass / (johnHeight * johnHeight);
console.log(bmiOfJohn);
const bmiOfMark = markMass / (markHeight * markHeight);
console.log(bmiOfMark);
const markHigherBMI = bmiOfMark > bmiOfJohn;
if (markHigherBMI) {
    console.log(`Mark's BMI(${bmiOfMark}) is higher than John's (${bmiOfJohn})`);
}
else {
    console.log("John's BMI is higher than Mark's!");
}
*/
/*
let n = '1' + 1; //  '11'
n = n - 1; // 11-1 = 10
console.log(n);
*/
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 // no team wins thropy
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 // koal's winner
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 // Draw
GOOD LUCK � */

//ANSWER
/*
let minScore = 100;
let dolphinsAvg = (97 + 112 + 101) / 3;
let koalasAvg = (109 + 95 + 106) / 3;
if ((dolphinsAvg > koalasAvg) && (dolphinsAvg >= minScore) && (koalasAvg >= minScore)) {
    console.log(`Dolphin's Winner`);
}
else if ((koalasAvg > dolphinsAvg) && (dolphinsAvg >= minScore) && (koalasAvg >= minScore)) {
    console.log(`koala's winner`);
}
else if ((dolphinsAvg === koalasAvg) && (dolphinsAvg >= minScore) && (koalasAvg >= minScore)) {
    console.log(`Draw!`);
}
else {
    console.log(`No team wins trophy`);
}
*/

//CODING CHALLENGE -4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK */

// ANSWER
/*
let billVal = 430;
const tip = (billVal >= 50 && billVal <= 300) ? `The bill was ${billVal},the tip was ${billVal * 0.15}, and the total value
is ${billVal + (billVal * 0.15)}` : `The bill was ${billVal},the tip was ${billVal * 0.2}, and the total value
is ${billVal + (billVal * 0.2)}`;
console.log(tip);
*/
/*1.The bill was 275, the tip was 41.25, and the total value
is 316.25*/

/*2.The bill was 40,the tip was 8, and the total value
is 48*/

/*3.The bill was 430,the tip was 86, and the total value
is 516*/


// ASSIGNMENT - 2
/*LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console */


//ANSWER
/*
let isIsland = true;
let language;
let country = 'India';
let continent = 'Asia';
let population = 80000000;
console.log(typeof country); //string
console.log(typeof population); // number
console.log(typeof isIsland);//boolean
console.log(typeof language); //undefined
*/

//ASSIGNMENT -3
/*
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens*/


//ANSWER

/*
const nativeLanguage = 'telugu';
let peopleSpokeLanguage = 'english';
console.log(peopleSpokeLanguage);
peopleSpokeLanguage = 'hindi';
console.log(peopleSpokeLanguage);
*/

//ASSIGNMENT -4
/*LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese*/

//ANSWER
/*
let countryPopulation = 100000000;
console.log(`Population in each half is ${countryPopulation / 2}`);
countryPopulation++;
console.log(countryPopulation);
let finlandPopulation = 60000000;
if (countryPopulation > finlandPopulation) {
    console.log("My country is in majority");
}
else {
    console.log("Finland !");
}
let avgPopulation = 3300000000;
const population = avgPopulation >= countryPopulation ? 'country population is not matches with avg' : 'matches';
console.log(population);
let description = 'Portugl is in europe, and its 11 million people speak portugues';
*/

//ASSIGNMENT - 5
/*
LECTURE: Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax
*/

//ANSWER
/*
let population = '11 million';
let description = `Portugal is in europe, and its ${population} people speak portugues`;
console.log(description);
*/


//ASSIGNMENT - 6
/*
LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/

//ANSWER
/*
let countryPopulation = 13000000;
if (countryPopulation > 3300000) {
    console.log("Portugal's population is above average");
}
else {
    console.log(`Portugal's population is ${countryPopulation - 3300000} million below average`);
}
*/

//ASSIGNMENT -7
/*LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5'; // 4
'19' - '13' + '17'; // 617
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143
2. Execute the operations to check if you were right
*/


//ASSIGNMENT -8

/*LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1 // Number(numNeighbours ===1) Only 1 border
8. Reflect on why we should use the === operator and type conversion in this
situation
*/

// test values with 1, 0,2 with ==
/*
if value == 1 then Only 1 border!
if value == 0 then 'No borders'
if value == 2  then More than 1 border
*/
//test values with 1,,0,2 with ===
/*
if value ===1 then No borders
if value ===0 then No borders
if value ===2 then More than 1 border
*/
//ANSWER
/*
let numNeighbours = prompt('How many neighbour countries does your country have?');
if (Number(numNeighbours) === 1) {
    console.log('Only 1 border!');
}
else if (numNeighbours > 1) {
    console.log('More than 1 border');
}
else {
    console.log('No borders');
}
*/


//ASSIGNMENT -9

/*LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D*/

//ANSWER
/*
let language = 'english';
let isIsland = false;
let population = 40;
let country = 'india';
if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}
*/


//ASSIGNMENT -10

/*LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D
*/

// ANSWER
/*
let language = 'chinese';
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
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
*/
