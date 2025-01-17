abstract class TakePhoto{       // it's blueprint class
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime():number{
        return 8
    }

}

// const Rafi = new TakePhoto("Test1", "Test2")

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Print here")
    }
    // we can also override getReelTime
    getReelTime():number{
        return 8
    }

}









export{}