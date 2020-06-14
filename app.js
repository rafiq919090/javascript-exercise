//assignment 1

// alert("WelCome to our website");
// window.alert("Error! Please enter a valid password..");
// window.alert("Welcome to Js Land...\r\n Haappy Coding");
// window.alert("Welcome to Js Land");
// window.alert("Happy Coding! \r\n Prevent this page from additional dialog box");
// window.alert("hello... i can run JS  through my web browser 's console");
// console.log("hello... i can run JS  through my web browser 's console");

//assignment 2:
// let age = "12 year old";
// alert(fname + " \r\n" + lname + "\r\n" + address + "\r\n" + age);

// var str = "pizza";
// for (var m = 0; m <= str.length; m++) {
//   for (var n = m; n <= str.length; n++) {
//     document.write("" + str + " ");
//   }
//   document.write("<br/>");
// }

// let email = "Muhammadrafiq017@gmail.com";
// alert("My Email address is" + email);

// let msg = "A smarter way to learn javascript";
// alert("i am trying to learn from the Book" + msg);

// document.write("yah! I can write HTML content through Javascript");

//assignment 3

// let age = 15;
// alert("i am" + age + "year old");

// function NewNamer() {
//   let name = prompt("please enter your name");
// }
// alert(name);

// let dob = 1990;
// document.write("My birth year is " + dob);

// let vistorName = prompt("Enter name plase");
// let productItem = prompt("Please Enter your product");
// let quantity = prompt("please Enter the quantity");

// document.write(
//   `${vistorName}ordered${productItem}on XYZ Store with${quantity}`
// );

//assignment 4
// Declare 3 variables in one statement.
// let weight = 64;
// let age = 20;
// let height = 5;
// document.write(`this guy has ${weight}weight ,age${age}and height${height}`);

// // Declare 5 legal & 5 illegal variable names.

// // 1: let name;
// // 2:let f_name;
// // 3:let f-name;
// // 4:let userCounter;
// // 5:let userName1;

//  // illegal variable name
// //  let @name;
// //  let $name;
// //  let anyLongVariable;
// //  let notUsed$SuchVariable;
// //  let $userName%

//assignment # 5

// let num = 5;
// let num2 = 10;
// let ans = num + num2;
// document.write(`${num} and ${num2}added and make ${ans}`);

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

// let num = 5;
// let num2 = 10;
// let ans = num - num2;
// document.write(`${num} and ${num2}sub and make ${ans}`);

// let num = 5;
// let num2 = 10;
// let ans = num * num2;
// document.write(`${num} and ${num2}multiply and make ${ans}`);

// let num = 50;
// let num2 = 10;
// let ans = num / num2;
// document.write(`${num} and ${num2}divided and make ${ans}`);

// let num = 5;
// let num2 = 10;
// let ans = num2 % num;
// document.write(`${num} and ${num2}madulas and make ${ans}`);

// let initialValue = 5;
// document.write(`value after increment ${++initialValue}::::`);

// document.write(`value after addition is${initialValue++ + 7}:::::`);
// document.write(`value after decrement is ${initialValue-- + 5}::`);
// document.write(`value after modulas is ${(initialValue * 2) % 2}`);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
// let ticker = 600;
// document.write(`the price of 5 tickets are ${ticker * 5}`);

// let table = 4;
// for (var i = 1; i <= 10; i++) {
//   document.write(`${table}x${i}=${table * i}<br>`);
// }

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// function cToF(celsius) {
//   const cTemp = celsius;
//   const cToFahr = (cTemp * 9) / 5 + 32;
//   const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
//   document.write(message);
// }
// +"<br>";

// function fToC(fahrenheit) {
//   const fTemp = fahrenheit;
//   const fToCel = ((fTemp - 32) * 5) / 9;
//   const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
//   document.write(message);
// }
// cToF(60);
// fToC(45);

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// document.write("<h1>Shopping card</h1>");

// let price = 650;
// let quantity = 3;
// let price2 = 100;
// let quantity2 = 7;
// let shippingCharges = 100;

// document.write(`price of item 1 is ${price}<br>
// Quantity of item 1 is ${quantity}<br>
// price of item 2 is${price2}<br>
// Quantity of item 2 is${quantity2}<br>
// shipping Charges is ${shippingCharges}<br>
// Total cost of your order is${price * 3 + price2 * 7 + shippingCharges}`);

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// document.write("<h1>Marks Sheet</h1>");
// let totalMarks = 980;
// let obtained = 804;
// let percent = (obtained / totalMarks) * 100;
// document.write(`Total Marks:${totalMarks}<br>
// Obtained Marks:${obtained}<br>
// Percentage:${percent}`);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// let UsRate = 104.8 * 10;
// let RiyalRate = 28 * 25;
// let total = UsRate + RiyalRate;
// document.write(`Total currency rate is::${total}`);

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression
// let num = 5;
// document.write(`${num + (5 * 10) / 2}`);

// function calculate_age(dob) {
//   var diff_ms = Date.now() - dob.getTime();
//   var age_dt = new Date(diff_ms);

//   return Math.abs(age_dt.getUTCFullYear() - 1970);
// }

// document.write(calculate_age(new Date(1982, 11, 4)));

// document.write(calculate_age(new Date(1962, 1, 1)));

// Assignment # 6

// var a = +prompt("Enter a number");

// document.write("Result : " + "<br>");

// document.write("The Value of a is  : " + a + "<br>");

// document.write("------------------------------------------" + "<br>"+ "<br>");

// ++a;
// document.write("The Value of ++a is  : " + a + "<br>");
// document.write("Now the Value of a is  : " + a + "<br>"+ "<br>"+ "<br>");

// document.write("The Value of a++ is  : " + a + "<br>");
// a++;
// document.write("Now the Value of a is  : " + a + "<br>"+ "<br>"+ "<br>");

// --a;
// document.write("The Value of --a is  : " + a + "<br>");
// document.write("Now the Value of a is  : " + a + "<br>"+ "<br>"+ "<br>");

// document.write("The Value of a-- is  : " + a + "<br>");
// a--;
// document.write("Now the Value of a is  : " + a + "<br>"+ "<br>"+ "<br>");

// 2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;

// var a = 2;
// var b = 1;

// document.write("a is  : " + a + "<br>");
// document.write("b is  : " + b + "<br>");

// var c = --a - --b + ++b + b--;
// document.write("Result is  : " + c + "<br>");

// c = --a ;
// document.write("Result is  : " + c + "<br>");

// c = --a - --b;
// document.write("Result is  : " + c + "<br>");

// c = --a - --b + ++b;
// document.write("Result is  : " + c + "<br>");

// c = --a - --b + ++b + b--;
// document.write("Result is  : " + c + "<br>");

// Write a program that takes input a name from user & greet the user.

// var a = prompt("Enter your Name");

// document.write("Welcome to " + a + "<br>");

// Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
// var num = +prompt(" Enter the Table Number ");

// for(var i=1; i<=10;  i++){

//     document.write(num + "x" + i + " = " + (num*i) + "<br>")
// }

// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

// document.write("<b>" + " Subject " +  " Total Marks " + " Obtained Marks " + " Percentage " + "</b>" + "<br>")

// var a = prompt("Enter the First Subject");
// var m1 = +prompt("Enter the Subject Marks");
// var b = prompt("Enter the Second Subject");
// var m2 = +prompt("Enter the Subject Marks");
// var c = prompt("Enter the Third Subject");
// var m3 = +prompt("Enter the Subject Marks");
// var t = 100;

// document.write( "<br>");
// document.write(a + "&nbsp;&nbsp");
// document.write(t + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
// document.write(m1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
// var p1 = ((m1*100)/t)
// document.write(p1 + "%" + "<br>" + "<br>");

// document.write(b + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
// document.write(t + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
// document.write(m1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
// var p2 = ((m2*100)/t)
// document.write(p2 + "%" + "<br>" + "<br>");

// document.write(c + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
// document.write(t + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
// document.write(m1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp");
// var p3 = ((m3*100)/t)
// document.write(p3 + "%" + "<br>" + "<br>");

// document.write("<b>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" + (t*3) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" +  (m1+m2+m3) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp" + ((p1+p2+p3)/3) +"%" + "</b>" + "<br>")

// Assignment # 7

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
// var a = prompt("Enter Your City");
// var b = "Karachi"

// if(a == b){
//     alert("Welcome to city of lights")
// }
// else {
//     alert("Try Another City")
// // }

// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter Your Gender");
// var b = "male";
// var c = "female";

// if(gender == b){
//     alert("Good Morning Sir")
// }
// else if(gender == c) {
//     alert("Good Morning Ma’am")
// }
// else{
//     alert("Please Enter the Correct Gender")
// }

// Write a program to take input color of road traffic signal from the user & show the message according to this table:
// var trafic = prompt("Please Enter the Trafic Color");
// var r = "red";
// var y = "yellow";
// var g = "green";

// if(trafic == r){
//     alert("Must Stop")
// }
// else if(trafic == y) {
//     alert("Ready to Move")
// }
// else if(trafic == g){
//     alert("Move Now")
// }
// else{
//     alert("Please Enter the Correct Color")
// }

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
// var fuel = +prompt("Please Enter Fuel in letters");
// var l = 0.25;

// if(fuel <= l){
//     alert("Please refill the fuel in your car")
// }

// else{
//     alert("You have a Fuel in the Tank")
// }

// Run this script, & check whether alert message would be displayed or not. Record the outputs.

// document.write("a. " + " given condition for variable a is true" + "<br>"+ "<br>");

// document.write("b. " + " given condition for variable b is true" + "<br>"+ "<br>");

// document.write("c. " + "condition 2 is true" + "condition 4 is true"  + "<br>" + "<br>");

// document.write("d. " + "The cost equals"  + "<br>" + "<br>");

// document.write("e. " + "True"  + "<br>" + "<br>");

// document.write("f. " + "car is smaller than cat"  + "<br>" + "<br>");

// Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

// var mark1 = +prompt("Enter First Subject Marks");
// var mark2 = +prompt("Enter Second Subject Marks");
// var mark3 = +prompt("Enter Third Subject Marks");

// var total = 300;
// var c = (mark1+mark2+mark3);
// var p = ((c*100)/total);

// document.write("<h1><b>Marks Sheet</b></h1>");

// document.write("Total Marks : " + "  " + total + "<br>");

// document.write("Marks Obtaind : " + "  " + c + "<br>");

// document.write("Percentage : " + "  " +  p  + "%" +  "<br>");

// if(p >= 80 && p <= 100){
//     document.write("Grade : " + " A +" + "<br>");
//     document.write("Remarks : " + " Excellet " + "<br>");
// }
// else if(p >= 70 && p <= 80){
//     document.write("Grade : " + " A " + "<br>");
//     document.write("Remarks : " + " Very Good " + "<br>");
// }
// else if(p >= 60 && p <= 70){
//     document.write("Grade : " + " B " + "<br>");
//     document.write("Remarks : " + " You Need to Improve " + "<br>");
// }
// else if(p >= 50 && p <= 60){
//     document.write("Grade : " + " C " + "<br>");
//     document.write("Remarks : " + " You Need to Improve " + "<br>");
// }
// else if(p >= 40 && p <= 50){
//     document.write("Grade : " + " D " + "<br>");
//     document.write("Remarks : " + " You Need to Improve" + "<br>");
// }
// else if(p >= 33 && p <= 40){
//     document.write("Grade : " + " E " + "<br>");
//     document.write("Remarks : " + " Poor" + "<br>");
// }
// else{
//     document.write("Grade : " + " Fail " + "<br>");
//     document.write("Remarks : " + " Try Again +" + "<br>");
// }

// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// var num = +prompt("Enter Number for 1 to 10");
// var n = 3;
// if(num == n){
//     alert("Bingo! Correct answer");
// }
// else{
//     alert("Close enough to the correct answer");
// }

// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
// var num = +prompt("Please the Enter Number ");
// var n = (num%3);
// if(n == 0){
//     alert("The number is Divisible by 3");
// }
// else{
//     alert("Try Another One");
// }

// Write a program that checks whether the given input is an even number or an odd number.

// var num = +prompt("Please Enter a Number ");
// var e = (num%2);
// var o = (num%3);
// if(e == 0){
//     alert("The number is Even");
// }
// else if(o == 0){
//     alert("The number is Odd");
// }
// else{
//     alert("The number is Prime");
// }

// Write a program that takes temperature as input and shows a message based on following criteria a. T > 40 then “It is too hot outside.” b. T > 30 then “The Weather today is Normal.” c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! Today’s weather is so Cool.”
// var t = +prompt("Please Enter a Number ");

// if(t > 40){
//     alert("It is too hot outside");
// }
// else if(t > 30){
//     alert("The Weather today is Normal");
// }
// else if(t > 20){
//     alert("Today’s Weather is cool");
// }
// else{
//     alert("OMG! Today’s weather is so Cool");
// }

// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

// var n1 = +prompt("Please Enter a Number ");
// var o = prompt("Please Enter Operation ");
// var n2 = +prompt("Please Enter a Number ");

// if(o == "+"){
//     alert("Your Result is : " + (n1+n2));
// }
// else if(o == "-"){
//     alert("Your Result is : " + (n1-n2));
// }
// else if(o == "*"){
//     alert("Your Result is : " + (n1*n2));
// }
// else if(o == "/"){
//     alert("Your Result is : " + (n1/n2));
// }
// else if(o == "%"){
//     alert("Your Result is : " + (n1%n2));
// }
// else{
//     alert("Please Enter the Correct Operator");
// }
