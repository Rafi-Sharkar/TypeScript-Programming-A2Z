"use strict";
// const user: (string | number)[] = ['hc', 1]
Object.defineProperty(exports, "__esModule", { value: true });
// const user: (string | number | boolean)[] = ['lol',true,3]   // order doesn't matter
let tUser;
tUser = ["rafi", 7, true]; // tuples consider order
const newUser = [2131, "rafi144@gmail.com"];
// enums
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["front"] = "f";
    SeatChoice["mid"] = "m";
    SeatChoice["win"] = "w";
    SeatChoice["fourth"] = "ft";
})(SeatChoice || (SeatChoice = {}));
const hcSeat = SeatChoice.fourth;
