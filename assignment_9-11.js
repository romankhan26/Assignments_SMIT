// // 1. Write a program to take “city” name as input from user. If 
// // user enters “Karachi”, welcome the user like this: 
// // “Welcome to city of lights”

// const city = prompt("Enter your city name:");

// if (city === "Karachi") {
//   console.log("Welcome to city of lights");
// } 

// // 2. Write a program to take “gender” as input from user. If the
// // user is male, give the message: Good Morning Sir. If the 
// // user is female, give the message: Good Morning Ma’am.

// const gender = prompt("Enter your gender:");

// if (gender === "male") {
//   console.log("Good Morning Sir");
// } else if (gender === "female") {
//   console.log("Good Morning Ma'am");
// }
// // 3. Write a program to take input color of road traffic signal 
// // from the user & show the message according to this table
// // Signal color Message
// // Red Must Stop
// // Yellow Ready to move
// // Green Move now

// const signalColor = prompt("Enter signal color:");

// if (signalColor === "red") {
//   console.log("Must Stop");
// } else if (signalColor === "yellow") {
//   console.log("Ready to move");
// } else if (signalColor === "green") {
//   console.log("Move now");
// }


// // 4. Write a program to take input remaining fuel in car (in 
// //     litres) from user. If the current fuel is less than 0.25litres, 
// //     show the message “Please refill the fuel in your car”

// const remainingFuel = parseFloat(prompt("Enter remaining fuel in litres:"));

// if (remainingFuel < 0.25) {
//   console.log("Please refill the fuel in your car");
// }


// // // Run this script, & check whether alert message would be
// // // displayed or not. Record the outputs.
// // //a.
// //  var a = 4;
// // if (++a === 5){
// // alert("given condition for variable a is true");
// // }
// // // b.
// //  var b = 82;
// // if (b++ === 83){
// // alert("given condition for variable b is true");
// // }
// // // c.
// //  var c = 12;
// // if (c++ === 13){
// // alert("condition 1 is true");
// // }
// // if (c === 13){
// // alert("condition 2 is true");
// // }
// // if (++c < 14){
// // alert("condition 3 is true");
// // }
// // if(c === 14){
// // alert("condition 4 is true");
// // }
// // // d.
// //  var materialCost = 20000;
// // var laborCost = 2000;
// // var totalCost = materialCost + laborCost;
// // if (totalCost === laborCost + materialCost){
// // alert("The cost equals");
// // }
// // // e.
// //  if (true){
// //     alert("True");
// //     }
// //    if(!true){//if we give false here , then the code will be unreachable , because we already let the condition be false and neglected, yet we can give the true condition and then use a NOR operator to consider it as a false.
// //     alert("False");
// //     }
// //     // f.
// //      if("car" < "cat"){
// //         alert("car is smaller than cat");
// //         }


// // Write a program to take input the marks obtained in three
// // subjects & total marks. Compute & show the resulting
// // percentage on your page. Take percentage & compute 
// // grade as per following table:
// // Show the total marks, marks obtained, percentage, grade &
// // remarks like
// let ObtainedMarksOf3Subjects = Number.parseInt(prompt("Enter obtained marks of 3 subjects:"));

// let TotalMarks = 300

// let Percentage = (ObtainedMarksOf3Subjects / TotalMarks) * 100
// let Grade;
// let Remarks;
// if (Percentage >= 80){
//     Grade = "A-one"
//     Remarks = "Excellent"
// } else if (Percentage >=70) {
//     Grade="A"
//     Remarks = "Good"
// }else if (Percentage >= 60){
//     Grade = "B"
//     Remarks = "You need to improve"
// } else if (Percentage <60) {
//     Grade="Fail"
//     Remarks = "Sorry"
// }


// document.write(
//     `<h1>Result</h1>
//     <p>Total Marks: ${TotalMarks}</p>
//     <p>Obtained Marks: ${ObtainedMarksOf3Subjects}</p>
//     <p>Percentage: ${Percentage.toFixed(2)}%</p>
//     <p>Grade: ${Grade}</p>
//     <p>Remarks: ${Remarks}</p>
//     `
// )


// // 7. Guess game:
// // Store a secret number (ranging from 1 to 10) in a variable.
// // Prompt user to guess the secret number.
// // a. If user guesses the same number, show “Bingo! Correct
// // answer”.
// // b. If the guessed number +1 is the secret number, show
// // “Close enough to the correct answer”.
// let secretNumber=6;

// let guess = parseInt(prompt("Guess a number between 1 and 10"));

// if (guess === secretNumber) {
//     document.write("Bingo! Correct answer");
// } else if (guess === --secretNumber || ++secretNumber){
//     document.write("Close enough to the correct answer");
// }
// 8.Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3

// let num = 9;

// if (num % 3 === 0) {
//     document.write(`${num} is divisible by 3`);
// } else {
//     document.write(`${num} is not divisible by 3`);
// }


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

let num = 12;

if (num % 2 === 0) {
    document.write(`${num} is an even number`);
} else {
    document.write(`${num} is an odd number`);
}

// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let temperature = 35;

// if (temperature > 40) {
//     document.write("It is too hot outside.");
// } else if (temperature > 30) {
//     document.write("The weather today is Normal.");
// } else if (temperature > 20) {
//     document.write("Today's weather is cool.");
// } else if (temperature > 10) {
//     document.write("OMG! Today's weather is so Cool.");
// }

// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user

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
