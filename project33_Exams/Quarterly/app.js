const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./Science.json"));
const parsedData = JSON.parse(data);

// Prints the total marks:
// console.log("Subject: " + parsedData.subject);
// console.log("Marks Obtained: " + parsedData.totalMarks);

// All the data:
// parsedData.answerList.map((sol) => {
//   console.log(sol);
// });

// If you want to print the wrong answered questions:
parsedData.answerList.map((sol) => {
  if (sol.correct === false) {
    console.log(sol);
  }
});

// Total Percentage:
const Science = JSON.parse(JSON.parse(fs.readFileSync("./Science.json")));
const Maths = JSON.parse(JSON.parse(fs.readFileSync("./Maths.json")));
const Sanskrit = JSON.parse(fs.readFileSync("./Sanskrit.json"));
const English = JSON.parse(JSON.parse(fs.readFileSync("./English.json")));
const Hindi = JSON.parse(JSON.parse(fs.readFileSync("./Hindi.json")));
const Sst = JSON.parse(JSON.parse(fs.readFileSync("./Sst.json")));

const MarksObtained =
  Science.totalMarks +
  Maths.totalMarks +
  Sanskrit.totalMarks +
  English.totalMarks +
  Hindi.totalMarks +
  Sst.totalMarks;

const TotalMarks = 50 * 5 + 30;

const Percentage = (MarksObtained / TotalMarks) * 100;
console.log(Math.round(Percentage) + "%");
