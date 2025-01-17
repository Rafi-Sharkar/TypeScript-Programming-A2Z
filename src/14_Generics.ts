/**
 * Generics provide a way to create reusable components while maintaining type checks, allowing you to write more flexible and maintainable code. The any type, on the other hand, is a way to opt out of TypeScript's type system, essentially telling the compiler to allow a value to be of any type.
 * 
 */



// spacify type
function Nid( num: number): number{    
    return num;
}

// any type. where compilor not check it.
function Nid1( num: any): any{
    return num
}

// Generic Type
function Nid2<Type>(num: Type): Type{
    return num
}

// Shortcut of Generic Type
function Nid3<T>(num: T): T{
    return num
}

Nid3(3)
Nid3("3")
Nid3(true)


// Array
const score: Array<number> = []
const names: Array<string> = []
const grade: Array<boolean> = []

interface Bootle{
    brand: string,
    type: number
}

Nid3<Bootle>({brand:"Apple",type:4})


// Generic Type in function

function getSearchProducts<T>(products: T[]): T{
    const myIndex = 3

    return products[myIndex]
}
// <T,> this comma mean this a Generic Type not any html tag in .tsx file. By using comma it not throw error.
const getMoreSearchProducts = <T,>(products:T[]):T => {
    const myIndex = 5
    return products[myIndex]
    // return [][myIndex]
    
}


// Generic Classes
interface DataBase{
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends DataBase>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}

anotherFunction(3, {connection:"Connected",username:"Rafi", password:"@R#1"})

interface Quiz{
    name: string,
    type: string
}
interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T extends Quiz | Course>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}



export{}