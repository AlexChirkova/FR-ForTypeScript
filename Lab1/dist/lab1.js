alert("Hello, world!");
//Variant 3
//Ex 2
const sum = (num1, num2, num3) => {
    return num1 + num2 + num3;
};
const result = sum(100, 27, 66);
console.log(result);
//Ex 3
let numberValue = 666;
const stringValue = "Hello";
let booleanValue = false;
const arrayValue = [1, 2, 3, 4, 5];
const objectValue = { key: "age", value: 25 };
let anyValue = "This can be any type";
const data = {
    id: 3,
    e1: 12345,
    e2: "Поле 2",
};
const jsonString = JSON.stringify(data);
console.log(jsonString);
