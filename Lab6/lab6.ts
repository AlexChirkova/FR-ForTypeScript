function freezeClass(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

function uppercaseMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };

    return descriptor;
}



enum Documents {
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

enum CarType {
    Sedan = "Sedan",
    Hatchback = "Hatchback",
    SUV = "SUV",
    Coupe = "Coupe",
    Minivan = "Minivan"
}

enum CarClass {
    Economy = "Economy",
    Comfort = "Comfort",
    Business = "Business",
    Luxury = "Luxury"
}

interface Car extends Vehicle {
    bodyType: CarType;
    carClass: CarClass;
}


@freezeClass
class CCar implements Car {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _bodyType: CarType;
    private _carClass: CarClass;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        bodyType: CarType,
        carClass: CarClass
    ) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }

    get brand(): string { return this._brand; }
    get model(): string { return this._model; }
    get year(): number { return this._year; }
    get vin(): string { return this._vin; }
    get registrationNumber(): string { return this._registrationNumber; }
    get owner(): Owner { return this._owner; }
    get bodyType(): CarType { return this._bodyType; }
    get carClass(): CarClass { return this._carClass; }

    set brand(value: string) { this._brand = value; }
    set model(value: string) { this._model = value; }
    set year(value: number) { this._year = value; }
    set vin(value: string) { this._vin = value; }
    set registrationNumber(value: string) { this._registrationNumber = value; }
    set owner(value: Owner) { this._owner = value; }
    set bodyType(value: CarType) { this._bodyType = value; }
    set carClass(value: CarClass) { this._carClass = value; }

    @uppercaseMethod
    print(): void {
        console.log(`Brand: ${this._brand}`);
        console.log(`Model: ${this._model}`);
        console.log(`Year of production: ${this._year}`);
        console.log(`VIN-number: ${this._vin}`);
        console.log(`Registration number: ${this._registrationNumber}`);
        console.log(`Car's type: ${this._bodyType}`);
        console.log(`Car's class: ${this._carClass}`);
    }
}


const owner = new class implements Owner {
    lastName: string = "Sherwood";
    firstName: string = "Andrew";
    middleName: string = "John";
    birthDate: Date = new Date("2000-01-01");
    docType: Documents = Documents.Passport;
    docSeries: string = "1234";
    docNumber: string = "123456";

    print(): void {
        console.log(`Last name: ${this.lastName}`);
        console.log(`Name: ${this.firstName}`);
        console.log(`Middle name: ${this.middleName}`);
        console.log(`Birth date: ${this.birthDate.toLocaleDateString()}`);
        console.log(`Doc type: ${this.docType}`);
        console.log(`Doc series: ${this.docSeries}`);
        console.log(`Doc number: ${this.docNumber}`);
    }
};

const car = new CCar(
    "Toyota",
    "Rav4",
    2016,
    "ABC123456789",
    "A123BC",
    owner,
    CarType.SUV,
    CarClass.Comfort
);

car.print();


try {
    // @ts-ignore
    CCar.prototype.newProperty = "New property";
    console.log("New property successfully added to the prototype.");
} catch (e) {
    if (e instanceof Error) {
        console.log("Error: It is not possible to add a property to a frozen prototype.");
    }
}