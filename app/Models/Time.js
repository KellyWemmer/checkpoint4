import { ProxyState } from "../AppState.js"

export class Time {
    constructor(data) {
        this.time = data
    }

    get timeTemplate() {
        return `
        <h1 class="bg-light rounded display-1 text-center">${this.time}</h1>`
        
    }

}