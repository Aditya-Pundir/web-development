// 1. Ways to print in JavaScript:
// document.write("This is document write")
// This is how you can write something on the main web page.

// console.log("Hello World", 4 + 6, "Another log");
// alert("Hi, this is me!")

// 2. Console API's:
// console.warn("This is a warning!");
// console.error("This is an error...");

// console.assert(4==6)
// Returns an error in the console if the condition is not true(assertion failure).

// console.clear() // is used to clear the console.

// 3. Comments in JavaScript:
// This is a Comment.
/*
Multi
line
comment
*/

// 4. JavaScript Variables:
var number1 = 5;
var number2 = 56;
// console.log(number1 + number2);

// 5. Datatypes in JavaScript:
// Numbers
var num1 = 455;
var num1 = 37.5;

// String
var str1 = "This is a String";
var str2 = " This is also a String";

// console.log(str1+str2); // It will concatenate the strings.

// Objects
var marks = {
  Ravi: 34,
  Shubham: 75,
  Harry: 98.977,
};

// console.log(marks);

// Booleans:
var a = true;
var b = false;

// console.log(a, b);

// Undefined:
// var und = undefined;
var und; // This is also Undefined
// console.log(und)

// Null:
var n = null;
// console.log(n);
// There's a difference between null and undefined, undefined means You haven't defined the variable and null means the value = nothing

// At a very high level there are 2 types of Datatypes in JavaScript
// 1. Primitive Datatypes: undefined, null, number, string, boolean, symbol
// 2. Reference Datatypes: Arrays and Objects

// Arrays:
var arr = [1, 2, "String", 4, 5];
// console.log(arr[3])
// console.log(arr);

// Operators in JavaScript
// Arithmetic Operators:
var a = 100;
var b = 10;
// console.log("The value of a+b is: ", a + b);
// console.log("The value of a-b is: ", a - b);
// console.log("The value of a*b is: ", a * b);
// console.log("The value of a/b is: ", a / b);

// Assignment Operators:
var c = b;
c += 2;
// console.log(c);

// Comparision operators:
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x !== y);

// Logical operators:
// Logical and:
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical not:
// console.log(!false);
// console.log(!true);

// Functions in JavaScript:
// DRY ——> Do Not Repeat Yourself
function avg(a, b) {
  return (a + b) / 2;
}
// console.log(avg(2, 4));

// Conditionals in JavaScript:
// if-else ladder:
// var age = 34;

// function rasna(age) {

//     if (age > 18) {
//         console.log("You can drink rasna water.")
//     }
//     else if (age == 100) {
//         console.log("You can also drink rasna water.");
//     }
//     else if (age > 100 || age < 1) {
//         console.log("Not a valid age!");
//     }
//     else {
//         console.log("You cannot drink rasna water.");
//     }
// }
// console.log(rasna(13));

// Loops in JavaScript:
// for loop:
var arr = [1, 2, 3, 4, 5, 6];
// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// forEach loop:
// arr.forEach(element => {
//     console.log(element);
// });

// There's one more way for the loop of forEach:
// arr.forEach(function (element) {
//     console.log(element);
// });

// while loop:
let j = 0;
// let makes the variable block element that means the variable value is the only what is inside the semicolun, so if we use let in a for loop then we cannot access it from outside the loop.
const ac = 2;
// const is used when we do not want to override the variable after some time.

// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// do-while loop:
// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// break and continue:
// for (var i = 0; i < arr.length; i++){
//     if (i == 2) {
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// Array methods:
let myArr = ["Fan", "Camera", 34, null, true];
// console.log(myArr.length);
// myArr.pop(); // Removes the first element of the array.
// myArr.push("Tapo"); // Adds an element at the end of the array.
// myArr.shift(); // Removes the first element of the array.
// myArr.unshift("cam"); // Adds an element at the beginning of the array.
// console.log(myArr.unshift("cam")); // Adds the element at the beginning as well as prints the length of the new array.
// myArr.toString(); // Converets the array to string.
// myArr.sort() // Sorts the array after converting the array to string.
// console.log(myArr.indexOf(34)); // Returns the index of the given argument.
// myArr.splice(2, 4); // Removes the elements from the array and takes the index of the element from which to start the removing of the elements and number o elements to remove.
// console.log(myArr);

// String methods in JavaScript:
let myStr = "Aditya is a programmer programmer.";
// console.log(myStr.length);
// console.log(myStr.indexOf("programmer"));
// console.log(myStr.lastIndexOf("programmer"));
// console.log(myStr.replace("Aditya", "Raja")); // Replaces only the first occurance.

// String Slicing:
// console.log(myStr.slice(0, 5));

// dates in JavaScript:
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime()); // Returns the time in seconds
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manipulation:
// DOM ——> Document Object Model
// console.log(document.getElementById('click')); // Targets the element by its id.
let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add('bg-primary');
// elemClass[0].classList.add('text-success');
// elemClass[0].classList.remove('text-success');
// console.log(elemClass[1].innerHTML); // ——> Returns the inner HTML of the element.
// console.log(elemClass[1].innerText); // ——> Returns the inner Text of the element.

let tn = document.getElementsByTagName("div"); // Returns a collection of elements by targeting their tag name like in this case it is div.
// console.log(tn);

createdElement = document.createElement("h2"); // Creates an element in HTML.
createdElement.innerText = "This is an h2";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement("p"); // Creates an element in HTML.
createdElement2.innerText = "This is a created paragraph";
tn[0].replaceChild(createdElement2, createdElement);
// Other methods are:
// removeChild(element); // ——> Removes the element.

// console.log(document.location); // Returns the information of the host.
// console.log(document.title); // Returns the title of the page.
// console.log(document.URL); // Returns the URL of the website page.
// console.log(document.scripts); // Returns a list of script files.
// console.log(document.links); // Returns a list of links in the page.
// console.log(document.forms); // Returns a list of forms in the page.
// console.log(document.images); // Returns a list of images in the page.
// console.log(document.domain); // Returns only the domain of the page.

// Selecting using Query:
sel = document.querySelector(".container"); // Gives the first element that is having the property like in this case it targets the element by the class name of container.
// console.log(sel);
sel = document.querySelectorAll(".container"); // Gives all the elements that are having the property like in this case it targets all the element by the class name of container.
// console.log(sel);

// Events in JavaScript:
// function clicked() {
//     console.log("The button was clicked!");
// }
// window.onload = function () {
//     console.log("The window was loaded!"); // Sets an eventlistener that when the window is loaded, what to do.
// }

// firstContainer.addEventListener('click', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked!</b>";
//     console.log("Clicked in the container!");
// });

// firstContainer.addEventListener('mouseover', function () {
//     console.log("Cursor in the container!");
// });

// firstContainer.addEventListener('mouseout', function () {
//     console.log("Cursor outside the container!");
// });
// firstContainer.addEventListener('mousemove', function () {
//     console.log("Cursor moved in the container!");
// });

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function () {
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on the container!");
// });

// firstContainer.addEventListener('mousedown', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked!</b>";
//     console.log("Mouse down when clicked from the container!");
// });

// More event listeners:
// You can go to Google and search for "javascript event listeners".

// Arrow Functions:
// function sum(a, b) {
//   return a + b;
// }
// sum = (a, b) => {
//   return a + b;
// };

logKaro = () => {
  document.querySelectorAll(".container")[1].innerHTML =
    "<b>setTimeout fired!</b>";
  console.log("I am your log.");
};
// SetTimeout and SetInterval
// setTimeout(logKaro, 2000);
// clr = setInterval(logKaro, 2000);
// If you want to clear the Interval or Timeout:
// Use clearInterval(clr)/clearTimeout(clr)

// JavaScript Local Storage:
// You can use localStorage() to use the local storage of the user by following commands:
localStorage.setItem("name", "Aditya Pundir"); // To set item
// localStorage.clear(); // To clear the local storage
// localStorage // To see the local storage
// localStorage.getItem("name"); // To get item, NOTE: To be written in the console.
// localStorage.removeItem('name'); // To remove an item in this case name from the local storage.

// About JSON:
// stringify():
// obj = { name: "Aditya", a: { class: 'VI"I' } };
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(typeof obj);
// console.log(jso);
// console.log(obj);

// parse():
// parsed = JSON.parse(`{ "name": "Aditya", "a": { "class": "VI\\"I" } }`);
// console.log(parsed);

// Tempalate literals are just backticks nothing else
// Some examples of Template literals:
// a = 34;
// console.log(`This is my ${a}`);

// JavaScript versions:
// 1. ECMAScript ——> A standard to maintain JavaScript.
