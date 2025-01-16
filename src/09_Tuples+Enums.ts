// const user: (string | number)[] = ['hc', 1]

// const user: (string | number | boolean)[] = ['lol',true,3]   // order doesn't matter

let tUser: [string, number, boolean]

tUser = ["rafi", 7, true]   // tuples consider order

type User = [number, string]

const newUser: User = [2131, "rafi144@gmail.com"]


// enums
enum SeatChoice {
    front="f", 
    mid="m",
    win="w",
    fourth="ft",
}

const hcSeat = SeatChoice.fourth






export{}






