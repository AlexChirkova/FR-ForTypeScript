//Variant 3

//Ex 1
function  average(arr: number[]) : number
{
    const len = arr.length;
    if(len === 0)
        return 0;
 
    let sum = 0;
 
    for(let i = 0; i < len; i++) {
        sum += arr[i];
    } 
    return sum / len;
}
 
const n = [1, 2, 3, 4, 5, 6, 7];
console.log(average(n));


function countOfNumbersIn (matrix: number[][], min: number, max: number): number {
    let count = 0;
    for (let row of matrix) {
        for (let num of row) {
            if (num <= max && num >= min) {
                ++count;
            }
        }
    }
    return count;
};

const matrix = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, 9]
];
console.log(countOfNumbersIn(matrix, -1, 5));



//Ex 2
type Tuple = [string, string, number];
function tupleToString (tuple: Tuple) : string{
    let s: string;
    s = tuple[0] + tuple[2].toString() + tuple[1];
    return s;
}

const tuple: Tuple = ["all ", " you", 4];
console.log(tupleToString(tuple));


//Ex 3
enum OilType {
    Olive = "Olive oil",
    Sunflower = "Sunflower oil",
    Cocount = "Cocount oil"
}

const oil = OilType.Olive;
console.log(oil);


//Ex 4
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}
    
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printPetInfo <T extends Pet>(pet: T): void {
    console.log(`Type of pet is: ${pet.constructor.name} Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
};

const cat = new Cat();
printPetInfo(cat);



//Ex 5
type Cake = {
    type: string;
    oil: OilType;
    price: number;
};

const cake: Cake = {
    type: "Bento",
    oil: OilType.Olive,
    price: 3000,
};

console.log(JSON.stringify(cake, null, 2));