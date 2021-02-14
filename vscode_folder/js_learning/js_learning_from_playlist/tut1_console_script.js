console.time("Your code took");
// Objects:
console.log({ Aditya: "Programmer", projects: 79 });
console.table({ Aditya: "Programmer", projects: 79 }); // Prints the object in a tabular form.

// What if you want to know the time your JavaScript code took to execute in total?, There is a function known as time.

console.timeEnd("Your code took"); // But ensure that you don't clear the console before using this

// assert:
// console.assert(253 < 189, "Assertion fail"); // Will throw the generated error
