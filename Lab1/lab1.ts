alert("Hello, world!");

//Variant 3

//Ex 2
const sum = (num1: number, num2: number, num3: number): number => {
    return num1 + num2 + num3;
};

const result = sum(100, 27, 66);
console.log(result);


//Ex 3
let numberValue: number = 666;
const stringValue: string = "Hello";
let booleanValue: boolean = false;
const arrayValue: number[] = [1, 2, 3, 4, 5];
const objectValue: { key: string; value: number } = { key: "age", value: 25 };
let anyValue: any = "This can be any type";


//Ex 4
interface Entity {
    id: number;
}

interface ToJsonStringify extends Entity {
    e1?: number;
    e2: string;
}

const data: ToJsonStringify = {
    id: 3,
    e1: 12345,
    e2: "Поле 2",
}

const jsonString = JSON.stringify(data);
console.log(jsonString);


