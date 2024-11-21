// Declare variables
/*
let country = "Kenya";
let continent = "Africa";
let population = 54000000;

// Log values to the console
console.log(country);
console.log(continent);
console.log(population);


// Test Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// Calculate BMIs
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

// Compare and log results with a detailed message
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// Test Data 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

// Calculate BMIs
BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

// Compare and log results with a detailed message
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
  
// Test data
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

// Log the average scores to the console
console.log(`Dolphins' average score: ${scoreDolphins}`);
console.log(`Koalas' average score: ${scoreKoalas}`);

// Determine the winner
if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy!");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy!");
} else {
  console.log("Both win the trophy!");
}
  

// Bonus
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

// Log the average scores to the console
console.log(`Dolphins' average score: ${scoreDolphins}`);
console.log(`Koalas' average score: ${scoreKoalas}`);

// Determine the winner
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy!");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy!");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy");
}
  */

//Test Data
const bill = 40;

//calculate tip using ternary operator
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

//calculate total bill
const total = bill + tip;

//construct and print the output string
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total was ${total}.`
);
