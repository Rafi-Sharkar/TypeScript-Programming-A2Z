"use strict";
const User = {
    name: "Rafi SharKar",
    email: "rafisharkar144@gmail.com",
    isActive: true
};
// function createUser({name: string, isPaid: boolean}){}
// createUser({name:"Banna", isPaid:false})
function createCourse() {
    return {
        name: "TypeScript",
        price: 244
    };
}
function createUser1(user) {
    return { name: "Mahabub", email: "mahabub", isActive: false };
}
createUser1({ _id: 2131, name: "Mahabub", email: "mahabub", isActive: false });
