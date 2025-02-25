//Variant 3

//Ex 1

//from

/*const data: string[] = []
const record = (param: string) => {
    setInterval(() = > {
    this.data.push(param);
    console.log('Record: ' + param + ' removed!');
    }, 5000);
    this.data.pop();
    console.log('Record: ' + param + ' added!');
}*/

//to 

const data: string[] = [];

const record = (param: string) => {
    data.push(param);
    console.log('Record: ' + param + ' added!');

    setTimeout(() => {
        const index = data.indexOf(param);
        if (index !== -1) {
            data.splice(index, 1);
            console.log('Record: ' + param + ' removed!');
        }
    }, 10000);
}

record("Test");



//Ex 2
function createLogger(message: any) {
    return function() {
        console.log(message);
    };
}

const logHello = createLogger("Hello, World!");
const logGoodbye = createLogger("Goodbye, World!");

logHello();   
logGoodbye(); 