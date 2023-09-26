const fs = require("fs");

// console.log(fs);

try {
  const content = fs.readFileSync("index.js", "utf-8");
  console.log(content);
} catch (err) {
  console.log("Failed to read the file");
}
