"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function addTwo(num: any): any
function addTwo(num) {
    return num + 2;
}
// function getValue(myVal: number):boolean{
//     if(myVal>5){
//         return true
//     }
//     return "200 OK"
// }
const getHellow = (s) => {
    return "Error";
};
const heros = ["Thor", "Superman", "Irom Man"];
const order = [1, 3, 4, 6];
heros.map(hero => {
    return `hero is ${hero}`;
});
console.log(order);
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
