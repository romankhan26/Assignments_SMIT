//    1. Write a JavaScript program that asks the user for their age and then displays a message indicating whether they are eligible to vote (18 or older).

//   let age = 12 ;
//   if(age >= 18) {
//     console.log("Eligible to vote");
//   }
//    2. Use a conditional statement to determine whether a number is positive, negative, or zero.

//   let number = 0;
//   if (number > 0) {
//     console.log("Number is positive");
//   } else if (number < 0) {
//     console.log("Number is negative");
//   } else {
//     console.log("Number is zero");
//   }

//    3. Write a JavaScript program that asks the user for their favorite color and then displays a message indicating whether they like a primary color (red, blue, or yellow, green).

//   let color = prompt("What color is your faourite?");

//   if (color === "red" || color === "blue" || color === "yellow" || color === "green") {
//     console.log("Favorite color is primary");
//   } else {
//     console.log("Favorite color is not primary");
//   }

//    4. Use logical operators to determine whether a number is between 10 and 20 (use logical operator).

//   let NNumber = 13;

//   if (NNumber >= 10 && NNumber <= 20) {
//     console.log("Number is between 10 and 20");
//   } else {
//     console.log("Number is not between 10 and 20");
//   }
//    5. Write a JavaScript program that asks the user for their grade (A, B, C, D, or F) and then displays a message indicating whether they passed or failed.

//   let grade = prompt("What is your grade?");

//   if ( grade === "F") {
//     console.log("Grade is failed");

//   } else {
//     console.log("Grade is passed");
//   }

//    6. Write a JavaScript program that asks the user for their age and gender, and then displays a message indicating whether they are eligible to serve in the military (18-30 years old, male).

//   let age1 = prompt("Please enter your age");
//   let gender = prompt("Please enter your gender");

//   if (age1 >= 18 && age1 <= 30 && gender === "male") {
//     console.log("Eligible to serve in the military");
//   } else {
//     console.log("Not eligible to serve in the military");
//   }
//    7. Use logical operators to determine whether a number is even or odd.

//   let num = 25;
//   if (num% 2== 0){
//     console.log("Number is even");
//   } else {
//     console.log("Number is odd");
//   }

//     8. Use a conditional statement to determine whether a number is a multiple of 3.

//    let number1 = 24;

//    if (number1 % 3 === 0) {
//      console.log("Number is a multiple of 3");
//    } else {
//      console.log("Number is not a multiple of 3");
//    }
//   let day = prompt("Enter the number of day"
//   );
//   day = parseInt(day);

//   switch (day ){
//     case 1 :
//     document.write("Day is Monday");
//     break;
//     case 2 :
//       document.write("Day is Tuesday");
//       break;
//     case 3 :
//       document.write("Day is Wednesday");
//       break;
//     case 4 :
//       document.write("Day is Thursday");
//       break;
//     case 5 :
//       document.write("Day is Friday");
//       break;
//    default:
//     document.write("Weekend");
//     break;

//   }

// Number Guessing game

//   let RNumberques = prompt("Guess the random Number")
//   RNumberques= Number.parseInt(RNumberques);
//   let RandomNumber =12 Math.random().toFixed(2) *100;
//   console.log(RandomNumber);
//   let randomNumberI = RandomNumber +1
//   let randomNumberD = RandomNumber -1

//   if (RNumberques == RandomNumber) {
//     document.write("Congratulations ! You got the exact number!");
//   } else if (RNumberques == randomNumberD || RNumberques == randomNumberI ) {
//     document.write("Congratulations ! too close to the real number");

//   } else if (RNumberques > 2 + RandomNumber   ){
//     document.write("Your guessed Number is high!")
//   } else if (RNumberques < 2 + RandomNumber) {
//     document.write("Your guessed Number is low!")

//   } else {
//     document.write("Invalid Number")
//   }

//    let num = prompt("Enter the Number");
//    if ( num % 2 == 0) {
//        console.log(num + " is an even number");
//    } else  {
//        console.log(num + " is an odd number");
//    }

// Manual Calculator
//     let num2 = promot

//    let a = prompt("Enter first operand");
//    let b = prompt("Enter second operand");
//    let Operator = prompt("Operator");
//    let Val1 = Number.parseInt(a);
//    let Val2 = Number.parseInt(b);
//    if (Operator == "/" || Operator.toLowerCase() == "divide") {
//      document.write("Answer: ", Val1 / Val2);
//    } else if (Operator == "*" || Operator.toLowerCase() == "multiply") {
//      document.write("Answer: ", Val1 * Val2);
//    } else if (
//      Operator == "+" ||
//      Operator.toLowerCase() == "plus" ||
//      Operator.toLowerCase() == "add" ||
//      Operator.toLowerCase() == "addition"
//    ) {
//      document.write("Answer: ", Val1 + Val2);
//    } else if (
//      Operator == "-" ||
//      Operator.toLowerCase() == "minus" ||
//      Operator.toLowerCase() == "sub" ||
//      Operator.toLowerCase() == "subtraction"
//    ) {
//      document.write("Answer: ", Val1 - Val2);
//    } else if (
//      Operator == "%" ||
//      Operator.toLowerCase() == "modulus" ||
//      Operator.toLowerCase() == "modulus"
//    ) {
//      document.write("Answer: ", Val1 % Val2);
//    } else if (
//      Operator == "**" ||
//      Operator.toLowerCase() == "power" ||
//      Operator.toLowerCase() == "exponentiation"
//    ) {
//      document.write("Answer: ", Val1 ** Val2);
//    } else {
//      document.write("Invalid operator");
//    }
//    let c = alert("Answers of all the possible arithmetic operations in console");
//    console.log("Addition", Val1 + Val2);
//    console.log("Subtraction", Val1 - Val2);
//    console.log("Multiplication", Val1 * Val2);
//    console.log("Division", Val1 / Val2);
//    console.log("Modulus ", Val1 % Val2);
//    console.log("Exponentiation ", Val1 ** Val2);
