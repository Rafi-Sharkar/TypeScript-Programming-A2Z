// Narrowing.

function detactType(val: number | string){
    // return val.toLowerCase()

    if(typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID")
        return
    }
    id.toLowerCase()
}



// Instanceof 
function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
                 
    } else {
      console.log(x.toUpperCase());
                 
    }
  }


// Type predictes
type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish( pet: Fish | Bird){
    return (pet as Fish).swim ! == undefined
}

function isBird( pet: Fish | Bird){
    return (pet as Bird).fly ! == undefined
}

function getFood(pet: Fish|Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else{
        pet 
        return "bird food"
    }
}



// ***** Most importent Update with the TypeScript Documantation *****