declare enum Documents {
    Passport = "Passport",
    MedicalРolicy = "Medicalpolicy",
    Snils = "Snils"
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
declare class COvner implements Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    docType: Documents;
    docSeries: string;
    docNumber: string;
    constructor(lastName: string, firstName: string, middleName: string, birthDate: Date, docType: Documents, docSeries: string, docNumber: string);
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
declare class CVehicle implements Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner);
    print(): void;
}
interface Car extends Vehicle {
    bodyType: CarType;
    carClass: CarClass;
}
declare class CCar extends CVehicle implements Car {
    bodyType: CarType;
    carClass: CarClass;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: CarType, carClass: CarClass);
    print(): void;
}
interface Motobike extends Vehicle {
    frameType: string;
    forSport: boolean;
}
declare class СMotobike extends CVehicle implements Motobike {
    frameType: string;
    forSport: boolean;
    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: string, forSport: boolean);
    print(): void;
    getMotobikeInfo(): string;
}
interface VehicleStorage<T extends Vehicle> {
    created: Date;
    vehicles: T[];
    getAllVehicles(): T[];
    sortByOwnersLastName(): T[];
    filterByOwnersLastName(lastName: string): T[];
}
declare class StorageClass<T extends Vehicle> implements VehicleStorage<T> {
    created: Date;
    vehicles: T[];
    constructor();
    getAllVehicles(): T[];
    addVehicle(vehicle: T): void;
    sortByOwnersLastName(): T[];
    filterByOwnersLastName(lastName: string): T[];
}
declare const owner1: COvner;
declare const owner2: COvner;
declare const car1: CCar;
declare const car2: CCar;
declare const storage: StorageClass<Vehicle>;
declare const sortedVehicles: Vehicle[];
declare const filteredVehicles: Vehicle[];
declare const moto: СMotobike;
