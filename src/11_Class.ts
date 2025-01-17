class User {
    email: string
    name: string
    private readonly city: string = "NG"
    constructor(email: string, name:string){
        this.email = email,
        this.name = name
        this.city = "Dhaka"
    }
}

const Rafi = new User("rafi144@gmail.com", "Rafi")

// profetional way to write class and constructor.
class User1 {

    protected _courseCount = 1

    readonly city: string = "NG"
    constructor(public email: string, private name:string, private uID: number){}

    private deleteToken(){
        console.log("Token deleted")
    }

    // getter, setter
    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum<=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }

}

const Rafi1 = new User1("rafi144@gmail.com", "Rafi",2131)

// Rafi1.deleteToken()      // uncomment and show the error.


class SubUser extends User1{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}


export{}


