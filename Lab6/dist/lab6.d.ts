declare function freezeClass(constructor: Function): void;
declare function uppercaseMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
declare enum Documents {
    Passport = "Passport",
    MedicalРolicy = "Medicalpolicy",
    Snils = "Snils"
}
interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    docType: Documents;
    docSeries: string;
    docNumber: string;
    print(): void;
}
interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    print(): void;
}
declare enum CarType {
    Sedan = "Sedan",
    Hatchback = "Hatchback",
    SUV = "SUV",
    Coupe = "Coupe",
    Minivan = "Minivan"
}
declare enum CarClass {
    Economy = "Economy",
    Comfort = "Comfort",
    Business = "Business",
    Luxury = "Luxury"
}
interface Car extends Vehicle {
    bodyType: CarType;
    carClass: CarClass;
}
declare class CCar implements Car {
    private _brand;
    private _model;
    private _year;
    private _vin;
    private _registrationNumber;
    private _owner;
    private _bodyType;
    private _carClass;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: CarType, carClass: CarClass);
    get brand(): string;
    get model(): string;
    get year(): number;
    get vin(): string;
    get registrationNumber(): string;
    get owner(): Owner;
    get bodyType(): CarType;
    get carClass(): CarClass;
    set brand(value: string);
    set model(value: string);
    set year(value: number);
    set vin(value: string);
    set registrationNumber(value: string);
    set owner(value: Owner);
    set bodyType(value: CarType);
    set carClass(value: CarClass);
    print(): void;
}
declare const owner: {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    docType: Documents;
    docSeries: string;
    docNumber: string;
    print(): void;
};
declare const car: CCar;
