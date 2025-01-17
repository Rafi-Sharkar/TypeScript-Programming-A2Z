"use strict";
/**
 * Generics provide a way to create reusable components while maintaining type checks, allowing you to write more flexible and maintainable code. The any type, on the other hand, is a way to opt out of TypeScript's type system, essentially telling the compiler to allow a value to be of any type.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// spacify type
function Nid(num) {
    return num;
}
// any type. where compilor not check it.
function Nid1(num) {
    return num;
}
// Generic Type
function Nid2(num) {
    return num;
}
// Shortcut of Generic Type
function Nid3(num) {
    return num;
}
Nid3(3);
Nid3("3");
Nid3(true);
// Array
const score = [];
const names = [];
const grade = [];
Nid3({ brand: "Apple", type: 4 });
// Generic Type in function
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
// <T,> this comma mean this a Generic Type not any html tag in .tsx file. By using comma it not throw error.
const getMoreSearchProducts = (products) => {
    const myIndex = 5;
    return products[myIndex];
    // return [][myIndex]
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, { connection: "Connected", username: "Rafi", password: "@R#1" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
