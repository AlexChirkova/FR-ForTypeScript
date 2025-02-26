var Documents;
(function (Documents) {
    Documents["Passport"] = "Passport";
    Documents["Medical\u0420olicy"] = "Medicalpolicy";
    Documents["Snils"] = "Snils";
})(Documents || (Documents = {}));
var CarType;
(function (CarType) {
    CarType["Sedan"] = "Sedan";
    CarType["Hatchback"] = "Hatchback";
    CarType["SUV"] = "SUV";
    CarType["Coupe"] = "Coupe";
    CarType["Minivan"] = "Minivan";
})(CarType || (CarType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "Economy";
    CarClass["Comfort"] = "Comfort";
    CarClass["Business"] = "Business";
    CarClass["Luxury"] = "Luxury";
})(CarClass || (CarClass = {}));
class COvner {
    constructor(lastName, firstName, middleName, birthDate, docType, docSeries, docNumber) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.birthDate = birthDate;
        this.docType = docType;
        this.docSeries = docSeries;
        this.docNumber = docNumber;
    }
    print() {
        console.log(`Last name: ${this.lastName}`);
        console.log(`Name: ${this.firstName}`);
        console.log(`Middle name: ${this.middleName}`);
        console.log(`Birth date: ${this.birthDate.toLocaleDateString()}`);
        console.log(`Doc type: ${this.docType}`);
        console.log(`Doc series: ${this.docSeries}`);
        console.log(`Doc number: ${this.docNumber}`);
    }
}
class CVehicle {
    constructor(brand, model, year, vin, registrationNumber, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.owner = owner;
    }
    print() {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year of production: ${this.year}`);
        console.log(`VIN-number: ${this.vin}`);
        console.log(`Registration number: ${this.registrationNumber}`);
    }
}
class CCar extends CVehicle {
    constructor(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        super(brand, model, year, vin, registrationNumber, owner);
        this.bodyType = bodyType;
        this.carClass = carClass;
    }
    print() {
        super.print();
        console.log(`Car's type: ${this.bodyType}`);
        console.log(`Car's class: ${this.carClass}`);
    }
}
class СMotobike extends CVehicle {
    constructor(brand, model, year, vin, registrationNumber, owner, frameType, forSport) {
        super(brand, model, year, vin, registrationNumber, owner);
        this.frameType = frameType;
        this.forSport = forSport;
    }
    print() {
        super.print();
        console.log(`Frame type: ${this.frameType}`);
        console.log(`For sport: ${this.forSport}`);
    }
    getMotobikeInfo() {
        const info = {
            frameType: this.frameType,
            forSport: this.forSport
        };
        return JSON.stringify(info);
    }
}
class StorageClass {
    constructor() {
        this.created = new Date();
        this.vehicles = [];
    }
    getAllVehicles() {
        return this.vehicles;
    }
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
    // Сортировка
    sortByOwnersLastName() {
        return this.vehicles.slice().sort((a, b) => a.owner.lastName.localeCompare(b.brand));
    }
    // Фильтрация
    filterByOwnersLastName(lastName) {
        return this.vehicles.filter(vehicle => vehicle.owner.lastName.toLowerCase().startsWith(lastName.toLowerCase()));
    }
}
