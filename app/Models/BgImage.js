export class BgImage {
    constructor(data) {
        this.img = data.largeImgUrl
        //dynamically write css here if needed
    }

       get imageString() {
        return this.img
    }
}