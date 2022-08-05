export class BgImage {
    constructor(data) {
        this.img = data.largeImgUrl
        //dynamically write css here if needed
    }

    get BgImageTemplate(){
        return `
        <img src="${this.img}" alt="">`
    }
}