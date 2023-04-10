// console.log('its working');

function add (a: number, b: number): number {
    return a + b;
}

 function subtract (a: number, b: number): number {
    return a-b;
}

function divide (a: number ,b: number): number {
    return a/b;
}

function isAdult (age: number): boolean {

    return age>= 18 ? true : false;
}

console.log(isAdult(19));


