enum Documents {
    Passport = "Passport",
    MedicalРolicy = "Medicalpolicy",
    Snils = "Snils"
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
    constructor(
        public lastName: string,
        public firstName: string,
        public middleName: string,
        public birthDate: Date,
        public docType: Documents,
        public docSeries: string,
        public docNumber: string
    ) {}
    print(): void {
        console.log(`Last name: ${this.lastName}`);
        console.log(`Name: ${this.firstName}`);
        console.log(`Middle name: ${this.middleName}`);
        console.log(`Birth date: ${this.birthDate.toLocaleDateString()}`);
        console.log(`Doc type: ${this.docType}`);
        console.log(`Doc series: ${this.docSeries}`);
        console.log(`Doc number: ${this.docNumber}`);
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

class CVehicle implements Vehicle{
    constructor(
        public brand: string,
        public model: string,
        public year: number,
        public vin: string,
        public registrationNumber: string,
        public owner: Owner,
    ){}
    print(): void {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year of production: ${this.year}`);
        console.log(`VIN-number: ${this.vin}`);
        console.log(`Registration number: ${this.registrationNumber}`);
    }
}

interface Car extends Vehicle {
    bodyType: CarType;
    carClass: CarClass;
}

class CCar extends CVehicle implements Car {
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        public bodyType: CarType,
        public carClass: CarClass
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
    }

    print(): void {
        super.print();
        console.log(`Car's type: ${this.bodyType}`);
        console.log(`Car's class: ${this.carClass}`);
    }
}

interface Motobike extends Vehicle {
    frameType: string;
    forSport: boolean;
}

class СMotobike extends CVehicle implements Motobike {
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        public frameType: string,
        public forSport: boolean
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
    }

    print(): void {
        super.print();
        console.log(`Frame type: ${this.frameType}`);
        console.log(`For sport: ${this.forSport}`);
    }

    getMotobikeInfo(): string {
        const info = {
            frameType: this.frameType,
            forSport: this.forSport
        };
        return JSON.stringify(info);
    }
}

interface VehicleStorage<T extends Vehicle> {
    created: Date;
    vehicles: T[];
    getAllVehicles(): T[];
    sortByOwnersLastName(): T[];
    filterByOwnersLastName(lastName: string): T[];
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

    sortByOwnersLastName(): T[] {
        return this.vehicles.slice().sort((a, b) => a.owner.lastName.localeCompare(b.brand));
    }

    filterByOwnersLastName(lastName: string): T[] {
        return this.vehicles.filter(vehicle => 
            vehicle.owner.lastName.toLowerCase().startsWith(lastName.toLowerCase())
        );
    }
}


const owner1 = new COvner("Josten", "Neil", "Abram", new Date("1988-01-19"), Documents.Passport, "1234", "123456");
const owner2 = new COvner("Minyard", "Andrew", "Joseph", new Date("1987-11-04"), Documents.Passport, "5678", "654321");

const car1 = new CCar("Toyota", "Rav4", 2016, "ABC123", "A123BC", owner1, CarType.SUV, CarClass.Comfort);
const car2 = new CCar("BMW", "X5", 2019, "XYZ987", "B456XY", owner2, CarType.SUV, CarClass.Luxury);

const storage = new StorageClass<Vehicle>();
storage.addVehicle(car1);
storage.addVehicle(car2);


const sortedVehicles = storage.sortByOwnersLastName();
console.log("Sortes vehicles:");
sortedVehicles.forEach(vehicle => console.log(vehicle.brand));


const filteredVehicles = storage.filterByOwnersLastName("Иванов");
console.log("Filtered vehicles:");
filteredVehicles.forEach(vehicle => console.log(vehicle.brand));

const moto = new СMotobike("KAYO", "K1 250 MX", 2022, "XYZ987654321", "X666XX", owner1, "Steel", false);

console.log("Information about motobike in JSON-format:");
console.log(moto.getMotobikeInfo());