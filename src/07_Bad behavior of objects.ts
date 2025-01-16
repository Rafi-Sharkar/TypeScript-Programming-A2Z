const User = {
    name: "Rafi SharKar",
    email: "rafisharkar144@gmail.com",
    isActive: true
}

// function createUser({name: string, isPaid: boolean}){}
// createUser({name:"Banna", isPaid:false})

function createCourse():{name: string, price: number}{
    return {
        name: "TypeScript",
        price: 244
    }
}


// ** Type Aliases
type User = {
    readonly _id: number,
    name: string,
    email: string,
    isActive: boolean,
    craditcardDetails?: number      // this question mark indicate that it is optional.
}

function createUser1(user: User){
    return {name: "Mahabub", email:"mahabub", isActive: false}

}

createUser1({_id: 2131, name: "Mahabub", email:"mahabub", isActive: false})

type cardNum = {
    cardNum: number
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNum & cardDate & {
    cvv: number
}








