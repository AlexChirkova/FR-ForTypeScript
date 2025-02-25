declare function average(arr: number[]): number;
declare const n: number[];
declare function countOfNumbersIn(matrix: number[][], min: number, max: number): number;
declare const matrix: number[][];
type Tuple = [string, string, number];
declare function tupleToString(tuple: Tuple): string;
declare const tuple: Tuple;
declare enum OilType {
    Olive = "Olive oil",
    Sunflower = "Sunflower oil",
    Cocount = "Cocount oil"
}
declare const oil = OilType.Olive;
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function printPetInfo<T extends Pet>(pet: T): void;
declare const cat: Cat;
type Cake = {
    type: string;
    oil: OilType;
    price: number;
};
declare const cake: Cake;
