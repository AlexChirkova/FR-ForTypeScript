
//Ex 1
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

class COvner implements Owner {
    private _lastName: string;
    private _firstName: string;
    private _middleName: string;
    private _birthDate: Date;
    private _docType: Documents;
    private _docSeries: string;
    private _docNumber: string;

    constructor(
        lastName: string,
        firstName: string,
        middleName: string,
        birthDate: Date,
        docType: Documents,
        docSeries: string,
        docNumber: string
    ) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._docType = docType;
        this._docSeries = docSeries;
        this._docNumber = docNumber;
    }

    get lastName() { return this._lastName; }
    get firstName() { return this._firstName; }
    get middleName() { return this._middleName; }
    get birthDate() { return this._birthDate; }
    get docType () { return this._docType; }
    get docSeries() { return this._docSeries; }
    get docNumber() { return this._docNumber; }

    set lastName(value: string) {this._lastName = value;}
    set firstName(value: string) {this._firstName = value;}
    set middleName(value: string) {this._middleName = value;}
    set birthDate(value: Date) {this._birthDate = value;}
    set docType(value: Documents) {this._docType = value;}
    set docSeries(value: string) {this._docSeries = value;}
    set docNumber(value: string) {this._docNumber = value;}

    print(): void {
        console.log(`Last name: ${this._lastName}`);
        console.log(`Name: ${this._firstName}`);
        console.log(`Middle name: ${this._middleName}`);
        console.log(`Birth date: ${this._birthDate.toLocaleDateString()}`);
        console.log(`Doc type: ${this._docType}`);
        console.log(`Doc series: ${this._docSeries}`);
        console.log(`Doc number: ${this._docNumber}`);
    }
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

class CVehicle implements Vehicle {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
    ) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }

    get brand(): string { return this._brand;}
    get model(): string {return this._model;}
    get year(): number {return this._year;}
    get vin(): string {return this._vin;}
    get registrationNumber(): string {return this._registrationNumber;} 
    get owner(): Owner {return this._owner;}

    set brand(value: string) {this._brand = value;}
    set model(value: string) {this._model = value;}
    set year(value: number) {this._year = value;}
    set vin(value: string) {this._vin = value;}
    set registrationNumber(value: string) {this._registrationNumber = value;}
    set owner(value: Owner) {this._owner = value;}

    print(): void {
        console.log(`Brand: ${this._brand}`);
        console.log(`Model: ${this._model}`);
        console.log(`Year of production: ${this._year}`);
        console.log(`VIN-number: ${this._vin}`);
        console.log(`Registration number: ${this._registrationNumber}`);
    }
}


//Ex 2
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

class CCar extends CVehicle implements Car {
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
        super(brand, model, year, vin, registrationNumber, owner);
        this._bodyType = bodyType;
        this._carClass = carClass;
    }

    get bodyType(): CarType {return this._bodyType;}
    set bodyType(value: CarType) {this._bodyType = value;}
    get carClass(): CarClass {return this._carClass;}
    set carClass(value: CarClass) {this._carClass = value;}

    print(): void {
        super.print();
        console.log(`Car's type: ${this._bodyType}`);
        console.log(`Car's class: ${this._carClass}`);
    }
}

interface Motobike extends Vehicle {
    frameType: string;
    forSport: boolean;
}

class СMotobike extends CVehicle implements Motobike {
    private _frameType: string;
    private _forSport: boolean;

    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        frameType: string,
        forSport: boolean
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
        this._frameType = frameType;
        this._forSport = forSport;
    }

    get frameType(): string {return this._frameType;}
    set frameType(value: string) {this._frameType = value;}
    get forSport(): boolean {return this._forSport;}
    set forSport(value: boolean) {this._forSport = value;}

    print(): void {
        super.print();
        console.log(`Frame type: ${this.frameType}`);
        console.log(`For sport: ${this._forSport}`);
    }
}



//Ex 3
interface VehicleStorage<T extends Vehicle> {
    created: Date;
    vehicles: T[];
    getAllVehicles(): T[];
}

class StorageClass<T extends Vehicle> implements VehicleStorage<T> {
    created: Date;
    vehicles: T[];

    constructor() {
        this.created = new Date();
        this.vehicles = [];
    }

    getAllVehicles(): T[] {
        return this.vehicles;
    }

    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }
}
const owner = new COvner(
    "Sherwood", 
    "Andrew", 
    "John", 
    new Date("2000-01-01"), 
    Documents.Passport, 
    "1234", 
    "123456"
);

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

const bike = new СMotobike(
    "Harley-Davidson",
    "Sportster",
    2019,
    "XYZ987654321",
    "X666XX",
    owner,
    "Steel",
    true
);

const storageClass = new StorageClass<Vehicle>();
storageClass.addVehicle(car);
storageClass.addVehicle(bike);

car.print();
bike.print();
owner.print();
console.log("All vehicles:", storageClass.getAllVehicles());