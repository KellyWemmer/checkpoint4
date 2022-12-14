import { ProxyState } from "../AppState.js";
import { timeService } from "../Services/TimeService.js";
import { Pop } from "../Utils/Pop.js";
import { Time } from "../Models/Time.js";

function _drawTime() {
    document.getElementById('clock').innerHTML = ProxyState.time.timeTemplate
}

export class TimeController {
    constructor() {
        ProxyState.on('time', _drawTime)
        setInterval(this.getTime, 1000)
    }

    getTime() {
        try {
            timeService.getTime()
        } catch (error) {
            console.log('[Getting time]', error)
            Pop.error(error)
        }
        

    }
}