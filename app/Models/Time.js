import { ProxyState } from "../AppState.js"

export class Time {
    constructor(data) {
        this.time = data
    }

    get timeTemplate() {
        return `
        <h1 class="">${this.time}</h1>        `
        
    }

}