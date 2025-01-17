"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name) {
        this.city = "NG";
        this.email = email,
            this.name = name;
        this.city = "Dhaka";
    }
}
const Rafi = new User("rafi144@gmail.com", "Rafi");
// profetional way to write class and constructor.
class User1 {
    constructor(email, name, uID) {
        this.email = email;
        this.name = name;
        this.uID = uID;
        this._courseCount = 1;
        this.city = "NG";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    // getter, setter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const Rafi1 = new User1("rafi144@gmail.com", "Rafi", 2131);
// Rafi1.deleteToken()      // uncomment and show the error.
class SubUser extends User1 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
