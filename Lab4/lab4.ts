import { Transport } from "./transport";

const owner = new Transport.COvner(
    "Sherwood", 
    "Andrew", 
    "John", 
    new Date("2000-01-01"), 
    Transport.Documents.Passport, 
    "1234", 
    "123456"
);

const car = new Transport.CCar(
    "Toyota",
    "Rav4",
    2016,
    "ABC123456789",
    "A123BC",
    owner,
    Transport.CarType.SUV,
    Transport.CarClass.Comfort
);

const bike = new Transport.СMotobike(
    "Harley-Davidson",
    "Sportster",
    2019,
    "XYZ987654321",
    "X666XX",
    owner,
    "Steel",
    true
);

const storageClass = new Transport.StorageClass<Transport.Vehicle>();
storageClass.addVehicle(car);
storageClass.addVehicle(bike);

car.print();
bike.print();
owner.print();
console.log("All vehicles:", storageClass.getAllVehicles());