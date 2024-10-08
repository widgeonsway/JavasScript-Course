/*CHALLENGE #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 79 kg and is 1.69 m tall. John weighs 85 kg and is 1.95 m tall.*/

const massMark = 79;
const massJohn = 85;
const heightMark = 1.69;
const heightJohn = 1.95;

const BMIMark = (massMark / (heightMark * heightJohn));
const BMIJohn = (massJohn / (heightJohn * heightJohn));

const markHigherBMI = BMIJohn <= BMIMark;

console.log(BMIJohn, BMIMark);
console.log(markHigherBMI);

