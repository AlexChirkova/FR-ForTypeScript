"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let Documents;
    (function (Documents) {
        Documents["Passport"] = "Passport";
        Documents["Medical\u0420olicy"] = "Medicalpolicy";
        Documents["Snils"] = "Snils";
    })(Documents = Transport.Documents || (Transport.Documents = {}));
    class COvner {
        constructor(lastName, firstName, middleName, birthDate, docType, docSeries, docNumber) {
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
        get docType() { return this._docType; }
        get docSeries() { return this._docSeries; }
        get docNumber() { return this._docNumber; }
        set lastName(value) { this._lastName = value; }
        set firstName(value) { this._firstName = value; }
        set middleName(value) { this._middleName = value; }
        set birthDate(value) { this._birthDate = value; }
        set docType(value) { this._docType = value; }
        set docSeries(value) { this._docSeries = value; }
        set docNumber(value) { this._docNumber = value; }
        print() {
            console.log(`Last name: ${this._lastName}`);
            console.log(`Name: ${this._firstName}`);
            console.log(`Middle name: ${this._middleName}`);
            console.log(`Birth date: ${this._birthDate.toLocaleDateString()}`);
            console.log(`Doc type: ${this._docType}`);
            console.log(`Doc series: ${this._docSeries}`);
            console.log(`Doc number: ${this._docNumber}`);
        }
    }
    Transport.COvner = COvner;
    class CVehicle {
        constructor(brand, model, year, vin, registrationNumber, owner) {
            this._brand = brand;
            this._model = model;
            this._year = year;
            this._vin = vin;
            this._registrationNumber = registrationNumber;
            this._owner = owner;
        }
        get brand() { return this._brand; }
        get model() { return this._model; }
        get year() { return this._year; }
        get vin() { return this._vin; }
        get registrationNumber() { return this._registrationNumber; }
        get owner() { return this._owner; }
        set brand(value) { this._brand = value; }
        set model(value) { this._model = value; }
        set year(value) { this._year = value; }
        set vin(value) { this._vin = value; }
        set registrationNumber(value) { this._registrationNumber = value; }
        set owner(value) { this._owner = value; }
        print() {
            console.log(`Brand: ${this._brand}`);
            console.log(`Model: ${this._model}`);
            console.log(`Year of production: ${this._year}`);
            console.log(`VIN-number: ${this._vin}`);
            console.log(`Registration number: ${this._registrationNumber}`);
        }
    }
    Transport.CVehicle = CVehicle;
    let CarType;
    (function (CarType) {
        CarType["Sedan"] = "Sedan";
        CarType["Hatchback"] = "Hatchback";
        CarType["SUV"] = "SUV";
        CarType["Coupe"] = "Coupe";
        CarType["Minivan"] = "Minivan";
    })(CarType = Transport.CarType || (Transport.CarType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "Economy";
        CarClass["Comfort"] = "Comfort";
        CarClass["Business"] = "Business";
        CarClass["Luxury"] = "Luxury";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    class CCar extends CVehicle {
        constructor(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
            super(brand, model, year, vin, registrationNumber, owner);
            this._bodyType = bodyType;
            this._carClass = carClass;
        }
        get bodyType() { return this._bodyType; }
        set bodyType(value) { this._bodyType = value; }
        get carClass() { return this._carClass; }
        set carClass(value) { this._carClass = value; }
        print() {
            super.print();
            console.log(`Car's type: ${this._bodyType}`);
            console.log(`Car's class: ${this._carClass}`);
        }
    }
    Transport.CCar = CCar;
    class СMotobike extends CVehicle {
        constructor(brand, model, year, vin, registrationNumber, owner, frameType, forSport) {
            super(brand, model, year, vin, registrationNumber, owner);
            this._frameType = frameType;
            this._forSport = forSport;
        }
        get frameType() { return this._frameType; }
        set frameType(value) { this._frameType = value; }
        get forSport() { return this._forSport; }
        set forSport(value) { this._forSport = value; }
        print() {
            super.print();
            console.log(`Frame type: ${this.frameType}`);
            console.log(`For sport: ${this._forSport}`);
        }
    }
    Transport.СMotobike = СMotobike;
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
    }
    Transport.StorageClass = StorageClass;
})(Transport || (exports.Transport = Transport = {}));
