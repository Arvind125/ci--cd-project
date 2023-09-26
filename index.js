console.log("I am learning gihub actions");

fetch("https://www.google.com/").then((resolve, error) => {
  if (error) {
    console.log(error);
  } else console.log(resolve);
});

console.log("Hello, Today i learned CI/CD");
