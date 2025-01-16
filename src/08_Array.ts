const superHero: string[] = []
const superPower: number[] = []
// or 
const superPower1: Array<number> = []

superHero.push("Thor")

//  Union Type
let score: number | string = 33

score = 44
score = "rafi"

type User = {
    name: string,
    id: number
}

type Admin = {
    userName: string,
    id: number
}

let Rafi: User | Admin = {name: "Rafi Sharkar", id: 2131130}
function getDBId( id: number | string){
    if( typeof id === "string"){
        id.toLowerCase()
    }
}

// Array
const data: number[] = [1,2,3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", 2, true]

let pi: 3.1416 = 3.1416;
// pi = 3.145   // error

let user: "renter" | "owner" | "admin"


export{}