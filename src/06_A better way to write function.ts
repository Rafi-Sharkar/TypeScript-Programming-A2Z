// function addTwo(num: any): any
function addTwo(num: number):number{
    return num + 2
}

// function getValue(myVal: number):boolean{
//     if(myVal>5){
//         return true
//     }
//     return "200 OK"
// }

const getHellow = (s: string):string => {
    return "Error"
}

const heros = ["Thor", "Superman", "Irom Man"]
const order = [1,3,4,6]

heros.map(hero => {
    return `hero is ${hero}`
})

console.log(order)

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError (errmsg: string): never{
    throw new Error(errmsg)
}




export{}