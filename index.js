// Add answers here 
const nameOfCity = (str) => {
str.includes("New") || str.includes("Los") || str.includes("new") ? console.log(str) : console.log(`The city name does not begin with Los or New`);
}
nameOfCity("New York");
nameOfCity("newark");
nameOfCity("london");




const isDivisible = (num) => num % 100 === 0 ? true : false;

console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log(isDivisible(100));




const isRaining = () => true ? console.log("wet day - you need am umbrella") : console.log("dry day - leave your umbrella at home");

isRaining(true);



const geometricalSequence = (num) => {
    let result = 1;
    let output = "1"
    for (let i = 1; i <= num; i++) {
        result = result * 2
        output+= " " + result
    }
   console.log(output) 
}

geometricalSequence(8);



const multiplesOfThree = (num) => {
    let result1 = 1;
    let output = "";
    for (let i = 1; i <= num; i++) {
        result1 = i * 3
        output+= " " + result1
    }
    console.log(output);
}

multiplesOfThree(5);



const powerOf = (num) => console.log(Math.pow(num, num));

powerOf(3)
powerOf(4)



const vowelCount = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            result += 1
        }
    }
    console.log(result)
}

vowelCount("hello")
vowelCount("test")
vowelCount("fbw")

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

