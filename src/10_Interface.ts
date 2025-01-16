interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number):number
}

const rafi: User = {dbId: 4904,email: "rafi@xyz.com", userId: 2131, startTrail:()=>{
    return "trail started"}, getCoupon:(cn:'NGJT', val: 30)=>{return 777}}


interface User{
    githubToken: string
}
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}









export{}




