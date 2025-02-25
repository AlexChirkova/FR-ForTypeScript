//Variant 3
//Ex 1
function average(arr) {
    const len = arr.length;
    if (len === 0)
        return 0;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += arr[i];
    }
    return sum / len;
}
const n = [1, 2, 3, 4, 5, 6, 7];
console.log(average(n));
function countOfNumbersIn(matrix, min, max) {
    let count = 0;
    for (let row of matrix) {
        for (let num of row) {
            if (num <= max && num >= min) {
                ++count;
            }
        }
    }
    return count;
}
;
const matrix = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, 9]
];
console.log(countOfNumbersIn(matrix, -1, 5));
function tupleToString(tuple) {
    let s;
    s = tuple[0] + tuple[2].toString() + tuple[1];
    return s;
}
const tuple = ["all ", " you", 4];
console.log(tupleToString(tuple));
//Ex 3
var OilType;
(function (OilType) {
    OilType["Olive"] = "Olive oil";
    OilType["Sunflower"] = "Sunflower oil";
    OilType["Cocount"] = "Cocount oil";
})(OilType || (OilType = {}));
const oil = OilType.Olive;
console.log(oil);
//Ex 4
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printPetInfo(pet) {
    console.log(`Type of pet is: ${pet.constructor.name} Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
}
;
const cat = new Cat();
printPetInfo(cat);
const cake = {
    type: "Bento",
    oil: OilType.Olive,
    price: 3000,
};
console.log(JSON.stringify(cake, null, 2));
