var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function freezeClass(constructor) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
function uppercaseMethod(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
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
var CCar = /** @class */ (function () {
    function CCar(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }
    Object.defineProperty(CCar.prototype, "brand", {
        get: function () { return this._brand; },
        set: function (value) { this._brand = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CCar.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) { this._model = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CCar.prototype, "year", {
        get: function () { return this._year; },
        set: function (value) { this._year = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CCar.prototype, "vin", {
        get: function () { return this._vin; },
        set: function (value) { this._vin = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CCar.prototype, "registrationNumber", {
        get: function () { return this._registrationNumber; },
        set: function (value) { this._registrationNumber = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CCar.prototype, "owner", {
        get: function () { return this._owner; },
        set: function (value) { this._owner = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CCar.prototype, "bodyType", {
        get: function () { return this._bodyType; },
        set: function (value) { this._bodyType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CCar.prototype, "carClass", {
        get: function () { return this._carClass; },
        set: function (value) { this._carClass = value; },
        enumerable: false,
        configurable: true
    });
    CCar.prototype.print = function () {
        console.log("Brand: ".concat(this._brand));
        console.log("Model: ".concat(this._model));
        console.log("Year of production: ".concat(this._year));
        console.log("VIN-number: ".concat(this._vin));
        console.log("Registration number: ".concat(this._registrationNumber));
        console.log("Car's type: ".concat(this._bodyType));
        console.log("Car's class: ".concat(this._carClass));
    };
    __decorate([
        uppercaseMethod
    ], CCar.prototype, "print", null);
    CCar = __decorate([
        freezeClass
    ], CCar);
    return CCar;
}());
var owner = new /** @class */ (function () {
    function class_1() {
        this.lastName = "Sherwood";
        this.firstName = "Andrew";
        this.middleName = "John";
        this.birthDate = new Date("2000-01-01");
        this.docType = Documents.Passport;
        this.docSeries = "1234";
        this.docNumber = "123456";
    }
    class_1.prototype.print = function () {
        console.log("Last name: ".concat(this.lastName));
        console.log("Name: ".concat(this.firstName));
        console.log("Middle name: ".concat(this.middleName));
        console.log("Birth date: ".concat(this.birthDate.toLocaleDateString()));
        console.log("Doc type: ".concat(this.docType));
        console.log("Doc series: ".concat(this.docSeries));
        console.log("Doc number: ".concat(this.docNumber));
    };
    return class_1;
}());
var car = new CCar("Toyota", "Rav4", 2016, "ABC123456789", "A123BC", owner, CarType.SUV, CarClass.Comfort);
car.print();
try {
    // @ts-ignore
    CCar.prototype.newProperty = "New property";
    console.log("New property successfully added to the prototype.");
}
catch (e) {
    if (e instanceof Error) {
        console.log("Error: It is not possible to add a property to a frozen prototype.");
    }
}
